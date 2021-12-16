//Helena
"use strict";

export function showMobile() {
  // console.log("hello");
  const content = document.querySelectorAll(".content");
  const fieldset = document.querySelectorAll(".click_content");

  //sætter classen "hide" på vores content (indhold)
  content.forEach((each) => each.classList.add("hide"));

  //kalder funktionen clickedDashboard() Når der klikkes på et fieldset
  fieldset.forEach((button) => button.addEventListener("click", clickedDashboard));
}

function clickedDashboard() {
  // console.log("jeg er klikkede");
  //refferer til vores foreach sætning og ber om at toggle på indholdet
  this.querySelector(".content").classList.toggle("hide");
}
