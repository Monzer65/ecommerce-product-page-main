const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('menu');
const basket = document.querySelector('.cart-icon');
const cart = document.querySelector('.cart');
const addBtn = document.querySelector('.add-to-cart');
const productName = document.querySelector('.product-name');
const pricePerItem = document.querySelector('.price');
const quantity = document.getElementById('numbers');
const plusBtn = document.querySelector('.plus');
const minusBtn = document.querySelector('.minus');
const topBasketNumber = document.querySelector('.top-basket-number');
const slides = document.querySelectorAll('.slide')

menuIcon.addEventListener('click', function(){
    menu.parentElement.classList.toggle('active');
    if(menu.parentElement.classList.contains('active')){
        menuIcon.src = "images/icon-close.svg"
    }else{
        menuIcon.src = "images/icon-menu.svg"
    }
});

let slide = 1;
slideToShow(slide);
function changeSlide(i){
    slideToShow(slide += i)
}
function currentSlide(i){
    slideToShow(slide = i)
}
function slideToShow(i){
    let x;
    let allSlides = document.getElementsByClassName('slide');
    if(i > allSlides.length){
        slide = 1
    }
    if(i < 1){
        slide = allSlides.length
    }

    for (x =0; x < allSlides.length; x++){
        allSlides[x].style.display = 'none'
    }

    allSlides[slide - 1].style.display = "block"
}

// document.addEventListener('click', function(event){
//     if(event.target != cart  && event.target != basket ){
//         cart.classList.remove('active')
//     }
// })

basket.addEventListener('click', function(){   
    cart.classList.toggle('active');
});

plusBtn.addEventListener('click', function(){
    quantity.innerHTML = parseInt(quantity.innerHTML) + 1
});

minusBtn.addEventListener('click', function (){
    if(quantity.innerHTML <= "1"){
        return
    }else{
        quantity.innerHTML = parseInt(quantity.innerHTML) - 1
    }
})

function totalPrice (){
    let total = parseInt(quantity.innerHTML) * parseInt(pricePerItem.innerHTML)
    return total
}
    
addBtn.onclick = function (){
    cart.innerHTML=`
        <p>Cart</p>
        <hr>
        <div class="cart-product">
            <img class="cart-thumbnail" src="images/image-product-1-thumbnail.jpg" alt="">
            <p>${productName.innerHTML}<br>$<span>${pricePerItem.innerHTML}</span> <span>&#215; ${quantity.innerHTML}</span> <span class="cart-currency-sign">$</span><span id="total">${totalPrice()}</span></p>
            <img class="delete-btn" src="images/icon-delete.svg" alt="">
        </div>
        <button class="checkout">Checkout</button>`
    const deleteBtn = document.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function(){
        showEmptyCart()
    });
    topBasketNumber.style.display = "flex"
    topBasketNumber.innerHTML = quantity.innerHTML
}; 

function showEmptyCart(){
    cart.innerHTML=`
    <p>Cart</p>
    <hr>
    <div class="empty-cart">
        Your cart is empty.
    </div>`
    topBasketNumber.style.display = "none"
}
showEmptyCart()

const overlay = document.querySelector('.overlay')
slides.forEach(pic =>{
    pic.addEventListener('click', function(){
        overlay.classList.add('active')
    });
});

let overlaySlide = 1;
overlaySlideToShow(overlaySlide);
function overlayChangeSlide(i){
    overlaySlideToShow(overlaySlide += i)
}
function overlayCurrentSlide(i){
    overlaySlideToShow(overlaySlide = i)
}
function overlaySlideToShow(i){
    let x;
    let allSlides = document.getElementsByClassName('overlay-slide');
    if(i > allSlides.length){
        overlaySlide = 1
    }
    if(i < 1){
        overlaySlide = allSlides.length
    }
    for (x =0; x < allSlides.length; x++){
        allSlides[x].style.display = 'none'
    }
    allSlides[overlaySlide - 1].style.display = "block"
}
const overlayCloseBtn = document.querySelector('.overlay-close-btn');
overlayCloseBtn.addEventListener('click', ()=>{
    overlay.classList.remove('active')
})

window.addEventListener("resize", closeAllmodals);
function closeAllmodals(){
    overlay.classList.remove('active');
    cart.classList.remove('active');
    menu.parentElement.classList.remove('active');
    menuIcon.src = "images/icon-menu.svg"
};