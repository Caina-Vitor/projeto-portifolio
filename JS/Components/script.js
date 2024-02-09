const BtnMobile = document.getElementById('#btn-Mobile');

function ToggleEvent() {
    const nav = document.getElementById('#nav');
    nav.classList.toggle('active');
}

BtnMobile.addEventListener('click', Toggle);