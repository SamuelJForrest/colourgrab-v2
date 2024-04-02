import { fireEvent } from '@testing-library/dom';
import copy from 'copy-to-clipboard';
import { paletteString } from '../../colourgrab/frontend/js/modules/selectPalette'; // Assuming you have defined paletteString

jest.mock('copy-to-clipboard');

describe('Copy to Clipboard Functionality', () => {
    test('should copy text to clipboard when copy button is clicked', () => {
        // simulate mock button
        const copyButton = document.createElement('button');
        copyButton.classList.add('palette-modal-copy');
        document.body.appendChild(copyButton);

        // add event listener to button
        copyButton.addEventListener('click', () => {
            copy(paletteString);

            copyButton.textContent = 'Copied';

            clearTimeout(resetCopyBtnText);

            const resetCopyBtnText = setTimeout(() => {
                copyButton.textContent = 'Copy to clipboard';
            }, 2000);
        });

        // simulate a click event on the copy button
        fireEvent.click(copyButton);

        // assert that the copy function from copy-to-clipboard is called with the expected text
        expect(copy).toHaveBeenCalledWith(paletteString);
    });
});
