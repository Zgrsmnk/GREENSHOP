'use strict'

const menuBtn = document.querySelector(".js-burger");
const menuList = document.querySelector(".menu_box");

menuBtn.addEventListener('click', function () {
    menuList.classList.toggle("active")
});