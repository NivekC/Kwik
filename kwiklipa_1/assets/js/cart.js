console.log('running');

let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Carrot',
        tag: 'Vegetable',
        price: 20,
        inCart: 0
    },
    {
        name: 'Tomatoes',
        tag: 'Fruits',
        price: 15,
        inCart: 0
    },
    {
        name: 'Pepper',
        tag: 'Vegetable1',
        price: 30,
        inCart: 0
    },
    {
        name: 'Purple Cabbage',
        tag: 'Vegetable2',
        price: 64,
        inCart: 0
    },
]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart-icon span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers); //convert string to number

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1); //add number + 1 to update cart
        document.querySelector('.cart-icon span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart-icon span').textContent = 0;
    }

    setItems(product);

}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {

        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }

        cartItems = [product.tag].inCart += 1;
    } else {
        product.inCart = 1;  
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify
        (cartItems));
}

function totalCost(product) {
    // console.log("The product price is", product.price);
    let cartCost = localStorage.getItem('totalCost');

    console.log("My CartCost is", cartCost);
    console.log(typeof cartCost);

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost +
        product.price);
        document.querySelector('.cart-price').textContent = cartCost + product.price;
    } else {
        localStorage.setItem("totalCost", product.price);
        document.querySelector('.cart-icon span').textContent = 0;
    }
    
}


function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector
    (".shopping-cart spad");
    if( cartItems && productContainer ) {
        console.log("runningtable! Hooray");
    }
}


onLoadCartNumbers();
displayCart();