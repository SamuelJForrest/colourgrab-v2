import A11yDialog from "a11y-dialog";

const container = document.querySelector('#palette-modal');
let dialog;
const dialogCloseButton = document.querySelector('.palette-modal-close');
const dialogOverlay = document.querySelector('.palette-modal-overlay');
const allDialogCloseElements = [dialogCloseButton, dialogOverlay];

const openModal = () => {
    dialog.show();
    document.body.classList.add('__modal');
}

const closeModal = () => {
    dialog.hide();
    document.body.classList.remove('__modal');
}

if (container) {
    dialog = new A11yDialog(container);

    allDialogCloseElements.forEach(el => {
        el.addEventListener('click', () => {
            closeModal();
        });
    });
}

export { openModal };