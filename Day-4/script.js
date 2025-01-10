const sizeSlider = document.getElementById('size-slider');
const opacitySlider = document.getElementById('opacity-slider');
const image = document.getElementById('dynamic-image');

sizeSlider.addEventListener('input', () => {
    const newSize = sizeSlider.value + 'px';
    image.style.width = newSize;
    image.style.height = 'auto';
});

opacitySlider.addEventListener('input', () => {
    const newOpacity = opacitySlider.value;
    image.style.opacity = newOpacity;
});