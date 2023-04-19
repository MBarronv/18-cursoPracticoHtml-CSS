const menuEmail = document.querySelector( '.navbar-email' );
const desktopMenu = document.querySelector( '.desktop-menu' );

const iconMenuMovile = document.querySelector( '.menu' );
const movileMenu = document.querySelector( '.movile-menu' );


menuEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

iconMenuMovile.addEventListener('click', toggleMovileMenu);
function toggleMovileMenu(){
    movileMenu.classList.toggle('inactive');
}