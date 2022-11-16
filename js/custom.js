"use strict";
let cantProductosCart;
let cantProductosLove;

function checkIcon(idIcon) {
    let iconSelected = document.getElementById(idIcon);

    if (iconSelected.classList.contains("bi-suit-heart")) {
        iconSelected.classList.remove("bi-suit-heart");
        iconSelected.classList.add("bi-suit-heart-fill");

        cantProductosLove = addProduct("badge-love", cantProductosLove);
    } else if (iconSelected.classList.contains("bi-suit-heart-fill")) {
        iconSelected.classList.remove("bi-suit-heart-fill");
        iconSelected.classList.add("bi-suit-heart");

        cantProductosLove = remProduct("badge-love", cantProductosLove);
    }

    if (iconSelected.classList.contains("bi-cart")) {
        iconSelected.classList.remove("bi-cart");
        iconSelected.classList.add("bi-cart-fill");

        cantProductosCart = addProduct("badge-cart", cantProductosCart);
    } else if (iconSelected.classList.contains("bi-cart-fill")) {
        iconSelected.classList.remove("bi-cart-fill");
        iconSelected.classList.add("bi-cart");

        cantProductosCart = remProduct("badge-cart", cantProductosCart);
    }
}

function addProduct(id, contador) {
    let badge = document.getElementById(id);

    if (contador === undefined) {
        badge.removeAttribute("hidden");
        contador = 1;
    } else {
        contador++;
        badge.innerHTML = String(contador);
    }

    return contador;
}

function remProduct(id, contador) {
    let badge = document.getElementById(id);

    if (contador > 1) {
        contador--;
        badge.innerHTML = String(contador);
    } else {
        badge.setAttribute("hidden", "true");
        contador = undefined;
    }

    return contador;
}

function popupImage(url) {

    let imgPopup = document.getElementById("insert-img");
    let divPopup =  document.getElementById("div-popup");

    imgPopup.setAttribute('src', url);
    divPopup.classList.add('opened');
}

function closePopup() {
    
    let imgPopup = document.getElementById("insert-img");
    let divPopup =  document.getElementById("div-popup");

    imgPopup.removeAttribute('src');
    divPopup.classList.remove('opened');
}

// $(document).ready(function() {

//     // required elements
//     var imgPopup = $('.img-popup');
//     var imgCont  = $('.container__img-holder');
//     var popupImage = $('.img-popup img');
//     var closeBtn = $('.close-btn');
  
//     // handle events
//     imgCont.on('click', function() {
//       var img_src = $(this).children('img').attr('src');
//       imgPopup.children('img').attr('src', img_src);
//       imgPopup.addClass('opened');
//     });
  
//     $(imgPopup, closeBtn).on('click', function() {
//       imgPopup.removeClass('opened');
//       imgPopup.children('img').attr('src', '');
//     });
  
//     popupImage.on('click', function(e) {
//       e.stopPropagation();
//     });
    
//   });
