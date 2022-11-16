"use strict";
let cantProductos;

function checkIcon(idIcon) {
    let iconSelected = document.getElementById(idIcon);

    if (iconSelected.classList.contains("bi-suit-heart")){
        iconSelected.classList.remove("bi-suit-heart");
        iconSelected.classList.add("bi-suit-heart-fill");
    } else if (iconSelected.classList.contains("bi-suit-heart-fill")){
        iconSelected.classList.remove("bi-suit-heart-fill");
        iconSelected.classList.add("bi-suit-heart");
    }
    

    if (iconSelected.classList.contains("bi-cart")){
        iconSelected.classList.remove("bi-cart");
        iconSelected.classList.add("bi-cart-fill");

        addProduct();
    } else if (iconSelected.classList.contains("bi-cart-fill")){
        iconSelected.classList.remove("bi-cart-fill");
        iconSelected.classList.add("bi-cart");

        remProduct();
    }

}

function addProduct() {
    let badge = document.getElementById("badge-cart");

    if (cantProductos === undefined) {
        badge.removeAttribute("hidden");
        cantProductos = 1;
    } else {
        cantProductos++;
        badge.innerHTML = String(cantProductos);
    }
}

function remProduct() {
    let badge = document.getElementById("badge-cart");

    if (cantProductos > 1) {
        cantProductos--;
        badge.innerHTML = String(cantProductos);
    } else {
        badge.setAttribute("hidden", "true");
        cantProductos = undefined;
    }
}