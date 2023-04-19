const menuEmail = document.querySelector( '.navbar-email' );
const desktopMenu = document.querySelector( '.desktop-menu' );

const iconMenuMovile = document.querySelector( '.menu' );
const movileMenu = document.querySelector( '.movile-menu' );

const navbarShoppingCart = document.querySelector( '.navbar-shopping-cart' );
const aside = document.querySelector( '.product-detail' );


menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenuMovile.addEventListener('click', toggleMovileMenu);
navbarShoppingCart.addEventListener('click', toggleShoppingCart);


function toggleDesktopMenu(){
    // mutualmente excluyente con toggleShopingCart
    const isAsideClosed = aside.classList.contains('inactive');

    if( !isAsideClosed){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMovileMenu(){
    // mutualmente excluyente con toggleShopingCart
    const isAsideClosed = aside.classList.contains('inactive');

    if( !isAsideClosed){
        aside.classList.add('inactive');
    }
    movileMenu.classList.toggle('inactive');
}

function toggleShoppingCart(){
    // mutualmente excluyente con toggleMovileMenu
    const isMovileMenuClosed = movileMenu.classList.contains('inactive');
    const isDeskMenuClosed = desktopMenu.classList.contains('inactive');

    if( !isMovileMenuClosed){
        movileMenu.classList.add('inactive');
    }
    
    if( !isDeskMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');

}