"use strict";

export function showMobile() {
  console.log("hello");
  const content = document.querySelectorAll(".content");
  const onClick = document.querySelectorAll(".click_content");
  content.forEach((each) => each.classList.add("hide"));

  onClick.forEach((button) => button.addEventListener("click", clickedDashboard));
}

function clickedDashboard() {
  // console.log("jeg er klikkede");
  this.querySelector(".content").classList.toggle("hide");
}
