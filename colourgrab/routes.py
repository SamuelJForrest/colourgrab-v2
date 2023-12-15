import random
from flask import render_template
from colourgrab import app

@app.route('/')
def home():
    colour_modifiers = ['__blue', '__green', '__red', '__orange', '__purple', '__pink', '__yellow']
    modifier = random.choice(colour_modifiers)
    return render_template('pages/home.html', modifier=modifier)

@app.route('/test')
def test():
    return 'This is a newer test!'