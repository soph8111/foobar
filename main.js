"use strict";
// import "./style.scss";
import { showStaff } from "./components/staff.js";
import { showOrders } from "./components/queue.js";
import { showStorage } from "./components/storage.js";
import { showSales } from "./components/sales.js";

window.addEventListener("DOMContentLoaded", start);

// let beertypesUrl = "https://the-three-must-get-beers.herokuapp.com/beertypes";

function start() {
  // console.log("start");
  loadJSON();
  setInterval(loadJSON, 5000);
}

let foobarUrl = "https://the-three-must-get-beers.herokuapp.com/";
async function loadJSON() {
  //   console.log("laodJSON");
  const response = await fetch(foobarUrl);
  const foobarData = await response.json();
  // console.log("foobarData", foobarData);

  showOrders(foobarData.queue);
  // showFav(foobarData.serving);
  showStaff(foobarData.bartenders);
  // showTaps(foobarData.taps);
  showStorage(foobarData.storage);
  showSales(foobarData.serving);
}
