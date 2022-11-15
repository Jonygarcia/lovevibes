"use strict";

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
    } else if (iconSelected.classList.contains("bi-cart-fill")){
        iconSelected.classList.remove("bi-cart-fill");
        iconSelected.classList.add("bi-cart");
    }

}