// Add sliding effect for project cards
const slider = document.querySelector('.project-slider');

let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;
let startX;

// Event listeners for desktop and touch devices
slider.addEventListener('mousedown', startDrag);
slider.addEventListener('mousemove', drag);
slider.addEventListener('mouseup', endDrag);
slider.addEventListener('mouseleave', endDrag);

slider.addEventListener('touchstart', startDrag);
slider.addEventListener('touchmove', drag);
slider.addEventListener('touchend', endDrag);

function startDrag(e) {
    isDragging = true;
    startX = getEventPosition(e);
    prevTranslate = currentTranslate;
    slider.style.cursor = 'grabbing';

    // Stop any ongoing animations
    cancelAnimationFrame(animationID);
}

function drag(e) {
    if (!isDragging) return;
    const currentPosition = getEventPosition(e);
    const movedBy = currentPosition - startX;

    currentTranslate = prevTranslate + movedBy;
    setSliderPosition();
}

function endDrag() {
    if (!isDragging) return;
    isDragging = false;
    slider.style.cursor = 'grab';

    // Snap to nearest project card
    snapToCard();
}

function getEventPosition(e) {
    return e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
}

function setSliderPosition() {
    slider.style.transform = `translateX(${currentTranslate}px)`;
}

function snapToCard() {
    const cardWidth = slider.children[0].offsetWidth + 20; // Including gap
    const totalCards = slider.children.length;

    let nearestIndex = Math.round(-currentTranslate / cardWidth);

    // Clamp the index to prevent overscrolling
    nearestIndex = Math.max(0, Math.min(nearestIndex, totalCards - 1));

    currentTranslate = -nearestIndex * cardWidth;
    setSliderPosition();
}

function getTranslateX(element) {
    const transform = window.getComputedStyle(element).transform;
    if (transform === 'none') return 0;
    return parseFloat(transform.split(',')[4]);
}

