import random
import os
from colourgrab import app
from flask import (
    render_template,
    request,
    redirect,
    url_for,
    session,
    flash
)
import colorgram as cg
from datetime import datetime
from werkzeug.utils import secure_filename
from .utils import allowed_file

COLOUR_MODIFIERS = [
    'blue',
    'green',
    'red',
    'orange',
    'purple',
    'pink',
    'yellow'
]
THEME = random.choice(COLOUR_MODIFIERS)

ADJECTIVES = [
    'Stunning',
    'Striking',
    'Spectacular',
    'Gorgeous',
    'Magnificent',
    'Majestic'
]
ADJECTIVE = random.choice(ADJECTIVES)

UPLOAD_FOLDER = os.getenv('UPLOAD_FOLDER')
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 5 * 1024 * 1024

CURRENT_YEAR = datetime.now().year


@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        # Return early if file size is too big
        if request.content_length > app.config['MAX_CONTENT_LENGTH']:
            flash('File upload failed. Maximum allowed file size is 5MB.')
            return redirect(url_for('home'))

        image = request.files['file-input']

        # If the file has an allowed extension
        if image and allowed_file(image.filename):
            filename = secure_filename(image.filename)

            # Use absolute path for saving the file
            file_path = os.path.join(os.path.abspath(UPLOAD_FOLDER), filename)
            image.save(file_path)

            # If uploaded image already exists in session, clear it
            if session.get('uploaded_image'):
                session.clear()

            # Store the filename in session
            session['uploaded_image'] = filename

            return redirect(url_for('palette'))
        else:
            flash(
                'Invalid file type. Please upload a .jpg, .png, or .svg file.'
            )
            return redirect(url_for('home'))

    return render_template(
        'pages/home.html',
        theme=THEME,
        current_year=CURRENT_YEAR,
        adjective=ADJECTIVE
    )


@app.route('/palette')
def palette():
    # Retrieve the filename from session (or your storage mechanism)
    filename = session.get('uploaded_image')

    # If file doesn't exist, redirect user to homepage
    if not os.path.isfile(os.path.join(UPLOAD_FOLDER, filename)):
        flash('There has been an error. Please try again.')
        return redirect(url_for('home'))

    # Use absolute path for generating the image URL
    image_url = url_for(
        'static', filename=os.path.join('uploads', filename)
    ) if filename else None

    color_list = []
    colors = cg.extract(os.path.join(UPLOAD_FOLDER, filename), 16)
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
        color_list=color_list,
        current_year=CURRENT_YEAR
    )
