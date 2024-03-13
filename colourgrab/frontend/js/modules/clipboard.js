import copy from "copy-to-clipboard";
import { paletteString } from "./selectPalette";

const copyButton = document.querySelector('.palette-modal-copy');

if (copyButton) {
    copyButton.addEventListener('click', () => {
        copy(paletteString);
        
        copyButton.textContent = 'Copied';
        
        clearTimeout(resetCopyBtnText);
        
        const resetCopyBtnText = setTimeout(() => {
            copyButton.textContent = 'Copy to clipboard';
        }, 2000);
    });
}