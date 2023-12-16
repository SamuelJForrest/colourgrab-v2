from dotenv import load_dotenv
import os
from flask import Flask
from colourgrab import app, routes

load_dotenv()
port = int(os.getenv('PORT'))

if __name__ == '__main__':
    app.run(
        debug=os.getenv('DEVELOPMENT'), 
        port=port
    )