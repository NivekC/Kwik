//show cart

(function () {
    const cartInfo = document.getElementsByClassName('cart-hover');
    const cart = document.getElementsByClassName('cart-icon');

    cartInfo.addEventListener('click', function () {
        cart.classList.toggle('cart-hover');
    });
})();

//add items to the cart

(function () {
    const cartBtn = document.querySelectorAll('.icon');

    cartBtn.forEach(function (btn) {
        btn.addEventListener('click', function (event) {

           // console.log(event.target);

           if(event.target.parentElement.classList.contains("icon"))
           {
               let fullPath =  
               event.target.previousElementSibling.src; 
               let pos = fullPath.index('img') + 3;

               console.log(pos);
           }
        });
    });

})();