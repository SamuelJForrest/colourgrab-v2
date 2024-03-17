# ColourGrab

![ColourGrab Cover Image](./docs/colourgrab-cover-image.gif)

## Features

### Current Features
- Image handling (including compression)

### Features To Be Implemented
- Drag & drop image upload

## Design

### Colour Themes
- How the colour themes are determined
- Updated Favicon colour

## Technologies

### Languages
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
- [Python](https://www.python.org/)

### Frameworks/Pre-processors
- [SCSS](https://sass-lang.com/)
- [Flask](https://flask.palletsprojects.com/en/3.0.x/)

### Libraries
- [a11y Dialog](https://a11y-dialog.netlify.app/)
- [Colorgram](https://pypi.org/project/colorgram.py/): this package is used to extract the colours from user uploaded images.

### Design
- [Figma](https://figma.com)

### Misc
- [NVM](https://github.com/nvm-sh/nvm)
- [Webpack](https://webpack.js.org/)

## Development

### Setup
#### Set Environment Variables
This project using the following environment variables, which would be included in a `.env` file at the root directory of the project:
- `DEVELOPMENT` (bool): Toggles debug mode on/off
- `PORT` (int): The port that you want your local server to run the app on
- `SECRET_KEY` (str): A randomly generated string, this can be anything.
- `UPLOAD_FOLDER` (str): The path to your uploads folder (often found within 'static')

#### Virtual Environment, Dependencies, and Server
**NOTE**: The following instructions assume that you are in the root directory of the project.
- Create a virtual environment through a method of your choice. If you are unsure how to do this, run the following command: `python -m venv .venv`. This will create a virtual environment called `.venv`
- Activate your virtual environment. If you created a virtual environment by running the command in the previous step, now run one of the following commands:
    - Windows: `.venv\Scripts\activate`
    - Unix: `source .venv\bin\activate`
- With your virtual environment running, install the dependencies by running: `pip install -r requirements.txt`
- Finally, run `python3 app.py` to start the server.

#### Build Frontend
- Before starting, ensure you have the correct version of Node installed, this can be found in the `.nvmrc` file in the root directory (`v21.6.2`).
- Once you have installed the correct version of Node, run `npm install` (or `npm i`) to install `node_modules`
- Finally, run `npm run watch` to compile the CSS/JS. This command will recompile these assets every time a .scss or .js file (within the relevant directories) is saved.

Congratulations, you are now set up!

## Testing

## Bugs (turn this into table)
- Colour palettes not always in order of colour

## Credits
- Thanks to the [Pqina Blog](https://pqina.nl/blog/compress-image-before-upload/#saving-the-compressed-image-back-to-the-file-input) for their article on compressing images using JavaScript.