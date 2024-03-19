import os
from flask import Flask
from .utils import dir_files_length

app = Flask(__name__)


@app.context_processor
def has_demo_images():
    demo_images_path = os.path.join(
        app.static_folder, 'images'
    )

    demo_images_length = dir_files_length(
        demo_images_path
    )

    return dict(
        has_demo_images=demo_images_length > 0
    )
