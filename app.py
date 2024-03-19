from dotenv import load_dotenv
import os
from colourgrab import app, routes

load_dotenv()
PORT = int(os.getenv('PORT'))
SECRET_KEY = os.getenv('SECRET_KEY')

app.config['SECRET_KEY'] = SECRET_KEY

if __name__ == '__main__':
    app.run(
        debug=os.getenv('DEVELOPMENT'),
        host='0.0.0.0',  # this line is required for docker to run your app
        port=PORT
    )
