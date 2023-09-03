const button = document.querySelector('#button');

button.addEventListener('click', playAudio);

function playAudio() {
    new Audio('./sound/olavache.mp3').play();
}

const theme_button = document.querySelector('#dark_theme');

theme_button.addEventListener('click', themeSwitch)

function themeSwitch () {
    const body = document.querySelector('body');
    body.classList.toggle('body__dark');
    const icon = document.querySelector('#theme_icon')
    icon.classList.toggle('dark_picture')
}