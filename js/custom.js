"use strict";
let cantProductosCart;
let cantProductosLove;

function checkIcon(idIcon) {
    let iconSelected = document.getElementById(idIcon);

    let numProduct = idIcon.slice(-1);

    console.log(numProduct);

    if (iconSelected.classList.contains("bi-suit-heart")) {
        iconSelected.classList.remove("bi-suit-heart");
        iconSelected.classList.add("bi-suit-heart-fill");

        cantProductosLove = addProduct("badge-love", cantProductosLove);
    } else if (iconSelected.classList.contains("bi-suit-heart-fill")) {
        iconSelected.classList.remove("bi-suit-heart-fill");
        iconSelected.classList.add("bi-suit-heart");

        cantProductosLove = remProduct("badge-love", cantProductosLove);
    } else if (iconSelected.classList.contains("bi-cart")) {
        iconSelected.classList.remove("bi-cart");
        iconSelected.classList.add("bi-cart-fill");

        cantProductosCart = addProduct("badge-cart", cantProductosCart, numProduct);
    } else if (iconSelected.classList.contains("bi-cart-fill")) {
        iconSelected.classList.remove("bi-cart-fill");
        iconSelected.classList.add("bi-cart");

        cantProductosCart = remProduct("badge-cart", cantProductosCart, numProduct);
    }
}

function addProduct(id, contador, numProduct) {
    let badge = document.getElementById(id);
    let emptyCart = document.getElementById("empty-cart");
    
    // Si es el carrito mostramos el producto
    if (id == "badge-cart") {
        let product = document.getElementById("cart-product-" + numProduct);
        product.removeAttribute("hidden");
    } 

    if (contador === undefined) {
        badge.removeAttribute("hidden");
        contador = 1;

        if (id == "badge-cart") emptyCart.setAttribute("hidden", "true");

    } else {
        contador++;
        badge.innerHTML = String(contador);
    }

    return contador;
}

function remProduct(id, contador, numProduct) {
    let badge = document.getElementById(id);
    let emptyCart = document.getElementById("empty-cart");

    // Si es el carrito quitamos el producto
    if (id == "badge-cart") {
        let product = document.getElementById("cart-product-" + numProduct);
        product.setAttribute("hidden", "true");
    } 

    if (contador > 1) {
        contador--;
        badge.innerHTML = String(contador);

    } else {
        badge.setAttribute("hidden", "true");
        contador = undefined;

        if (id == "badge-cart") emptyCart.removeAttribute("hidden");
        
    }

    return contador;
}

function popupImage(url) {
    let imgPopup = document.getElementById("insert-img");
    let divPopup = document.getElementById("div-popup");

    imgPopup.setAttribute("src", url);
    divPopup.classList.add("opened");

    let headerPc = document.getElementById("header-pc");
    headerPc.classList.remove("sticky-lg-top");
}

function closePopup() {
    let imgPopup = document.getElementById("insert-img");
    let divPopup = document.getElementById("div-popup");

    imgPopup.removeAttribute("src");
    divPopup.classList.remove("opened");

    let headerPc = document.getElementById("header-pc");
    headerPc.classList.add("sticky-lg-top");
}
