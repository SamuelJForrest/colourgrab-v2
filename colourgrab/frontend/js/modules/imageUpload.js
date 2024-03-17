const uploadForm = document.querySelector('#upload-form');
const uploadArea = document.querySelector('.upload-area');
const uploadText = document.querySelector('.upload-area-text');
const uploadIcon = document.querySelector('.upload-icon');

const compressImage = async (file, { quality = 1, type = file.type}) => {
    const imageBitmap = await createImageBitmap(file);

    const canvas = document.createElement('canvas');
    canvas.width = imageBitmap.width;
    canvas.height = imageBitmap.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(imageBitmap, 0, 0);

    // turn image data into blob
    const blob =  await new Promise((res) => {
        canvas.toBlob(res, type, quality);
    });

    return new File([blob], file.name, {
        type: blob.type
    });
}

uploadForm.addEventListener('change', async (e) => {
    const { files } = e.target;
    const targetFile = files[0];

    // return if no file selected, or the file type isn't an image
    if (!files.length) return;

    const dataTransfer = new DataTransfer();

    uploadText.innerText = 'Generating Palette...';
    uploadIcon.remove();
    uploadArea.insertAdjacentHTML(
        'afterbegin',
        '<div class="loader"></div>'
    );

    if (targetFile.type.startsWith('image')) {
        const compressedImage = await compressImage(targetFile, {
            quality: 0.75,
        });

        dataTransfer.items.add(compressedImage);

        console.log(e.target.files);
        e.target.files = dataTransfer.files;
        console.log(e.target.files);
    }
    
    uploadForm.submit();
});