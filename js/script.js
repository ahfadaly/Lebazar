"use strict";

// start offcanvas ----------------

let SideCollapse = document.querySelector("#navbarSideCollapse");
let offcanvas = document.querySelector(".offcanvas-collapse");

SideCollapse.addEventListener(`click`, function () {
  offcanvas.classList.toggle("open");
});

let scorllIcrement = document.querySelector(".increment-body");
let fixed = document.querySelector(".add-check");
let fixedproduct = document.querySelector(".add-product");

scorllIcrement.addEventListener(`scroll`, function () {
  if (this.scrollTop > 100) {
    fixed.classList.add("scroll-up");
  } else {
    fixed.classList.remove("scroll-up");
  }
});

// End offcanvas ----------------
