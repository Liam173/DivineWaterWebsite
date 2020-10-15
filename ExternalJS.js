let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: '3 Stage Big',
        tag: 'filtrationSystem1',
        price: 3999,
        inCart: 0
    },
    {
        name: 'Little Lux',
        tag: 'filtrationSystem2',
        price: 199,
        inCart: 0
    },
    {
        name: '14 Liter Min',
        tag: 'filtrationSystem3',
        price: 389,
        inCart: 0
    },
    {
        name: 'Reverse Osmo',
        tag: 'filtrationSystem4',
        price: 1799,
        inCart: 0
    }
];

for(let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');
    console.log('My cartCost is: ', cartCost);
    console.log(typeof cartCost);
    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price);
    } else {
        localStorage.setItem('totalCost', product.price);
    }
}

function displayCart(){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let containerCheckout = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');

    if(cartItems && containerCheckout){
        containerCheckout.innerHTML = '';
        Object.values(cartItems).map(item => {
            containerCheckout.innerHTML += `
            <div class="product">
                <img src='./Content/${item.tag}.jpg'>
                ................................Price: R <span>${item.price}.00</span>
                ................................................................................Amount: ${item.inCart}
            </div>
            `;
        });

        containerCheckout.innerHTML += `
            <div class='basketTotalContainer'>
                <h4 class='basketTotalTitle'>
                    Basket Total
                </h4>
                <h4 class='basketTotal'>
                    R${cartCost}.00
                </h4>
            </div>
        `;
    }
}

onLoadCartNumbers();
displayCart();