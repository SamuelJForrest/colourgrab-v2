import random
import os
from dotenv import load_dotenv
from colourgrab import app
from flask import Flask, render_template, request, redirect, url_for, session
import colorgram as cg
from werkzeug.utils import secure_filename

COLOUR_MODIFIERS = ['blue', 'green', 'red', 'orange', 'purple', 'pink', 'yellow']
THEME = random.choice(COLOUR_MODIFIERS)

UPLOAD_FOLDER = os.getenv('UPLOAD_FOLDER')
app.config['UPLOAD_FOLDER'] = 'colourgrab/static/uploads'

@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        image = request.files['file-input']
        filename = secure_filename(image.filename)

        
        # Use absolute path for saving the file
        file_path = os.path.join(os.path.abspath(UPLOAD_FOLDER), filename)
        image.save(file_path)

        if session.get('uploaded_image'):
            session.clear()

        # Store the filename in session (you might want to use a database instead)
        session['uploaded_image'] = filename

        return redirect(url_for('palette'))

    return render_template('pages/home.html', theme=THEME)

@app.route('/palette')
def palette():
    # Retrieve the filename from session (or your storage mechanism)
    filename = session.get('uploaded_image')

    # Use absolute path for generating the image URL
    image_url = url_for('static', filename=os.path.join('uploads', filename)) if filename else None

    color_list = []
    colors = cg.extract(os.path.join(UPLOAD_FOLDER, filename), 8)
    colors.sort(key=lambda c: c.hsl.h)
    for color in colors:
        r = color.rgb.r
        g = color.rgb.g
        b = color.rgb.b
        new_color = (r, g, b)
        color_list.append(new_color)

    # Pass the filename and image URL to the template
    return render_template(
        'pages/palette.html',
        theme=THEME,
        image_filename=filename,
        image_url=image_url,
        colors=colors,
        color_list=color_list
    )
