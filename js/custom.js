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
    } else if (iconSelected.classList.contains("bi-cart")) {
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
