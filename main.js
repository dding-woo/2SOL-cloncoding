'use strict';

const slider = document.querySelector(".slider");

const slidList = document.querySelectorAll(".slide__list");

const nextBtn = document.querySelector(".next__btn");

const prev__btn = document.querySelector(".prev__btn");
let currentindex = 0;

let slideCount = slidList.length

// Slide item List
nextBtn.addEventListener("click", () => {
    if (currentindex < slideCount - 5) {
        slidemove(currentindex + 1);
        console.log(currentindex);
    }
    else {
        slidemove(0);
    }
});

prev__btn.addEventListener("click", () => {
    if (currentindex > 0) {
        slidemove(currentindex - 1);
    }
    else {
        slidemove(currentindex + 5);
    }


});

function slidemove(num) {
    slider.style.left = -num * 216 + "px";
    currentindex = num;
}
