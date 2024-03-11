import A11yDialog from "a11y-dialog";

const container = document.querySelector('#palette-modal');
export const dialog = new A11yDialog(container);
const dialogCloseButton = document.querySelector('.palette-modal-close');

dialogCloseButton.addEventListener('click', () => {
    dialog.hide();
});
