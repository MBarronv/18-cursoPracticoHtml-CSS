const menuEmail = document.querySelector( '.navbar-email' );
const desktopMenu = document.querySelector( '.desktop-menu' );

const iconMenuMovile = document.querySelector( '.menu' );
const movileMenu = document.querySelector( '.movile-menu' );

const navbarShoppingCart = document.querySelector( '.navbar-shopping-cart' );
const aside = document.querySelector( '.product-detail' );


const cardsContainer = document.querySelector( '.cards-container' );


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


// comandos para generar lista de productos generados semi automaticos desde js
const productList = [];

productList.push({
    name: 'bike',
    price: '350',
    image: 'images/bike.jpg'
});

productList.push({
    name: 'bike2',
    price: '950',
    image: 'images/bike.jpg'
});

productList.push({
    name: 'bike3',
    price: '150',
    image: 'images/bike.jpg'
});


function renderProducts( productList ){


    for( product of productList){

        //console.log(product.name)
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        
        const productName = document.createElement('p');
        productName.innerText =  product.name;

        const productFigure = document.createElement('figure');

        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', 'icons/bt_added_to_cart.svg');
        
        productFigure.appendChild( productImgCart);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productFigure);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);

    }
    
}

renderProducts( productList );