import os
from flask import Flask
from colourgrab import app, routes

if __name__ == '__main__':
    app.run(
        debug=os.environ.get('DEVELOPMENT'), 
        host=os.environ.get('PORT')
    )