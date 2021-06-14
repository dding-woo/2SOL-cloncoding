'use strict';

const bottmMenuList = document.querySelectorAll(".bottom__menu__list a");

bottmMenuList.forEach((list) => {
    list.addEventListener("mouseover", () => {
        list.classList.add("underline");
    });
});