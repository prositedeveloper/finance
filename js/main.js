const popupOverlay = document.querySelector('.popup-overlay');
const popup = document.querySelector('.popup');

popupOverlay.style.display = 'none';

function showPopup() {
    popupOverlay.style.display = 'block';
}

function hidePopup() {
    popupOverlay.style.display = 'none';
}

popup.addEventListener('click', (event) => event.stopPropagation());