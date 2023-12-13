from flask import Flask
from colourgrab import app, routes

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')