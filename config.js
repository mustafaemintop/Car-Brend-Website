// Ana resmi bul
const mainImage = document.getElementById('mainCarImage');

// Default değerleri al
let selectedColor = mainImage.getAttribute('data-default-color');
let selectedWheel = mainImage.getAttribute('data-default-wheel');

const colorButtons = document.querySelectorAll('.color-btn');
const wheelButtons = document.querySelectorAll('.wheel-btn');

// Renk seçimi
colorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.color-btn.selected')?.classList.remove('selected');
        btn.classList.add('selected');

        selectedColor = btn.getAttribute('data-color');
        updateImage();
    });
});

// Jant seçimi
wheelButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.wheel-btn.selected')?.classList.remove('selected');
        btn.classList.add('selected');

        selectedWheel = btn.getAttribute('data-wheel');
        updateImage();
    });
});

// Resmi güncelle
function updateImage() {
    const imageName = `${selectedColor}-${selectedWheel}.jpg`;
    mainImage.src = imageName;
}