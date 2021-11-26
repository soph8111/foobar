"use strict";
// import "./style.scss";
import { showStaff } from "./components/staff.js"
import { showOrders } from "./components/queue.js"

window.addEventListener("DOMContentLoaded", start);

// let beertypesUrl = "https://the-three-must-get-beers.herokuapp.com/beertypes";

function start() {
  // console.log("start");
  laodJSON();
}

let foobarUrl = "https://the-three-must-get-beers.herokuapp.com/";
async function laodJSON() {
  //   console.log("laodJSON");
  const response = await fetch(foobarUrl);
  const foobarData = await response.json();
  // console.log("foobarData", foobarData);

  showStaff(foobarData.bartenders);
  showOrders(foobarData.queue);
}


