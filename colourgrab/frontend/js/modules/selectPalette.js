const colourPalettes = document.querySelectorAll('.toggleColour');

const selectPaletteColour = (el) => {
    el.setAttribute('aria-pressed', el.getAttribute('aria-pressed') == 'false' ? 'true' : 'false' );
}

const setTextColour = (el) => {
    const elementBackgroundColour = window.getComputedStyle(el).backgroundColor;
    const [r, g, b] = elementBackgroundColour.match(/\d+/g);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    el.classList.add(luminance > 0.5 ? '__blackicon' : '__whiteicon');
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
}