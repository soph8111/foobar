"use strict";
// import "./style.scss";
import { showStaff } from "./components/staff.js";
import { showOrders } from "./components/queue.js";
import { showStorage } from "./components/storage.js";
import { showSales } from "./components/sales.js";
import { showTaps } from "./components/taps.js";
import { showFav } from "./components/fav.js";

window.addEventListener("DOMContentLoaded", start);

// let beertypesUrl = "https://the-three-must-get-beers.herokuapp.com/beertypes";

function start() {
  // console.log("start");
  loadJSON();
  //setInterval(loadJSON, 10000);
}

// let foobarUrl = "https://the-three-must-get-beers.herokuapp.com/";
// async function loadJSON() {
//   //   console.log("laodJSON");
//   const response = await fetch(foobarUrl);
//   const foobarData = await response.json();
//   // console.log("foobarData", foobarData);

//   showOrders(foobarData.queue);
//   // showFav(foobarData.serving);
//   showStaff(foobarData.bartenders);
//   showTaps(foobarData.taps);
//   showStorage(foobarData.storage);
//   showSales(foobarData.serving);
// }

async function loadJSON() {
  await Promise.all([fetch("https://the-three-must-get-beers.herokuapp.com/").then((res) => res.json()), fetch("https://the-three-must-get-beers.herokuapp.com/beertypes").then((res) => res.json())]).then((foobarData) => {
    // When loaded, prepare data objects
    showOrders(foobarData[0].queue);
    showFav(foobarData[0].serving);
    showStaff(foobarData[0].bartenders);
    showTaps(foobarData[0].taps, foobarData[1]);
    showStorage(foobarData[0].storage);
    showSales(foobarData[0].serving);
  });
}
