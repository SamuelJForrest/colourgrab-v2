import random
import os
from colourgrab import app
from flask import (
    render_template,
    request,
    redirect,
    url_for,
    session,
    flash,
)
from datetime import datetime
from werkzeug.utils import secure_filename
from .utils import (
    allowed_file,
    dir_files_length,
    generate_color_palette
)


COLOUR_MODIFIERS = [
    'blue',
    'green',
    'red',
    'orange',
    'purple',
    'pink',
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
    if not session.get('uploaded_image'):
        flash('There has been an error. Please try again.')
        return redirect(url_for('home'))

    # Use absolute path for generating the image URL
    image_url = url_for(
        'static', filename=os.path.join('uploads', filename)
    ) if filename else None

    color_palette = generate_color_palette(
        os.path.join(UPLOAD_FOLDER, filename)
    )
    colors = color_palette['colors']
    color_list = color_palette['color_list']

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


@app.route('/demo')
def demo():
    demo_images_path = os.path.join(
        app.static_folder, 'images'
    )

    demo_images_length = dir_files_length(
        demo_images_path
    )

    if not demo_images_length:
        flash(
            "We don't have any demo images to show right now. " +
            "Sorry for the inconvenience."
        )

        return redirect(url_for('home'))

    random_file_number = random.randint(1, demo_images_length)
    random_file_name = f'demo-image-{random_file_number}.jpg'

    image_url = os.path.join(
        demo_images_path, random_file_name
    )

    color_palette = generate_color_palette(
        image_url
    )
    colors = color_palette['colors']
    color_list = color_palette['color_list']

    return render_template(
        'pages/palette.html',
        theme=THEME,
        image_url=image_url,
        image_filename=random_file_name,
        colors=colors,
        color_list=color_list,
        current_year=CURRENT_YEAR,
        demo_page=True
    )
