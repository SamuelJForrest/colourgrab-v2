import { openModal } from "./a11y-dialog";
const colourPalettes = document.querySelectorAll('.toggleColour');
const rgbPaletteButton = document.querySelector('.rgbPalette');
const cssPaletteButton = document.querySelector('.cssPalette');
const sassPaletteButton = document.querySelector('.sassPalette');
const tailwindPaletteButton = document.querySelector('.tailwindPalette');
let paletteString;

const rgbOptions = {
    'format': 'rgb',
}

const cssOptions = {
    'format': 'css',
    'paletteStart': ':root {\n',
    'paletteEnd': '}'
}

const sassOptions = {
    'format': 'sass',
}

const tailwindOptions = {
    'format': 'tailwind',
    'paletteStart': 'module.exports = {\n\ttheme: {\n\t\tcolors: {\n',
    'paletteEnd': '\t\t}\n\t}\n}'
}

const allButtons = [rgbPaletteButton, cssPaletteButton, sassPaletteButton, tailwindPaletteButton];
const allOptions = [rgbOptions, cssOptions, sassOptions, tailwindOptions];

const selectPaletteColour = (el) => {
    el.setAttribute('aria-pressed', el.getAttribute('aria-pressed') == 'false' ? 'true' : 'false' );
}

const setTextColour = (el) => {
    const elementBackgroundColour = window.getComputedStyle(el).backgroundColor;
    const [r, g, b] = elementBackgroundColour.match(/\d+/g);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    el.classList.add(luminance > 0.5 ? '__blackicon' : '__whiteicon');
}

const generatePalette = (options) => {
    const selectedColours = document.querySelectorAll('.palette-color[aria-pressed=true]');
    
    if (!selectedColours.length) return;

    let palette = '';
    let { paletteStart, paletteEnd, format } = options;

    if (!paletteStart) {
        paletteStart = '';
    }

    if (!paletteEnd) {
        paletteEnd = '';
    }

    selectedColours.forEach((color, i) => {
        let backgroundColor = window.getComputedStyle(color).backgroundColor;
        switch (format) {
            case 'rgb':
                palette += `Colour ${i + 1}: ${backgroundColor};\n`;
                break;
            case 'css':
                palette += `\t--color-${i + 1}: ${backgroundColor};\n`;
                break;
            case 'sass':
                palette += `$color-${i + 1}: ${backgroundColor};\n`;
                break;
            case 'tailwind':
                palette += `\t\t\tcolor-${i + 1}: '${backgroundColor}',\n`;
                break;
            default:
                palette = '';
        }
    });

    paletteString = paletteStart + palette + paletteEnd;
}

const updatePaletteModal = (format) => {
    const modalTitle = document.querySelector('.palette-modal-title');
    const modalText = document.querySelector('.palette-modal-text');

    if (!paletteString) {
        modalTitle.innerHTML = 'NO COLOURS SELECTED';
        modalText.innerHTML = 'Please try again';
    } else {
        const formattedStr = paletteString.replace(/\n/g, "<br>").replace(/\t/g, "&emsp;");
    
        modalTitle.innerHTML = format.toUpperCase();
        modalText.innerHTML = formattedStr;
    }
}

if (colourPalettes.length > 0) {
    colourPalettes.forEach(palette => {
        // Add class to determine what colour checkmark should be used when selected
        setTextColour(palette);

        // Event listener to select palette colour
        palette.addEventListener('click', function() {
            selectPaletteColour(palette);
        });
    });

    allButtons.forEach((button, i) => {
        button.addEventListener('click', () => {
            generatePalette(allOptions[i]);
            updatePaletteModal(allOptions[i].format);
            openModal();
        });
    });
}

export { paletteString };