const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const sliderItems = document.querySelectorAll('.slider-item');


// --------------------slider-part--------------------
let slideIndex = 0;
let slideInterval;

function startInterval() {
    slideInterval = setInterval(() => {
        slideIndex = (slideIndex + 1) % sliderItems.length;
        updateSlider();
    }, 3000);
}

function resetInterval() {
    clearInterval(slideInterval);
    startInterval();
}

function updateSlider() {
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    hideAllText();
    showText(slideIndex);
}

function hideAllText() {
    const texts = document.querySelectorAll('.text');
    texts.forEach(text => {
        text.style.opacity = 0;
        text.style.transform = 'translateX(-50%) translateY(0)';
    });
}

function showText(index) {
    const text = sliderItems[index].querySelector('.text');
    text.style.opacity = 1;
    text.style.transform = 'translateX(-50%) translateY(-50px)';
}

prevButton.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + sliderItems.length) % sliderItems.length;
    updateSlider();
    resetInterval();
});

nextButton.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % sliderItems.length;
    updateSlider();
    resetInterval();
})

startInterval();

// --------------------------------slider-part end------------------


// ----------------scroll-reveal part--------------------

