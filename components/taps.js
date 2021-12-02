"use strict";

export function showTaps(foobarData, beerData) {
  const tapsHolder = document.querySelector("#taps_wrapper");
  const template = document.querySelector(".taps_content").content;
  tapsHolder.textContent = "";
  foobarData.forEach((tap) => {
    const klon = template.cloneNode(true);
    const percentage = getPercentage(tap);
    klon.querySelector(".tap_no").textContent = `Tap ${tap.id + 1}`;
    klon.querySelector(".beer_name").textContent = tap.beer;
    klon.querySelector(".level").textContent = `${percentage}%`;
    klon.querySelector(".alcohol").textContent = `${getAlcohol(beerData, tap)}%`;
    klon.querySelector(".beer_type").textContent = getType(beerData, tap);
    klon.querySelector(".donut-segment").setAttribute("stroke-dasharray", setStrokeDash(percentage, tap));
    klon.querySelector(".donut-segment").setAttribute("stroke", setColor(percentage));
    tapsHolder.appendChild(klon);
  });
}

function getAlcohol(beerData, tap) {
  let alcohol;
  beerData.forEach((beer) => {
    if (tap.beer === beer.name) {
      alcohol = beer.alc;
    }
  });

  return alcohol;
}

function getType(beerData, tap) {
  let type;
  beerData.forEach((beer) => {
    if (tap.beer === beer.name) {
      type = beer.category;
    }
  });

  return type;
}

/* DONUT CHART */
// Inspired by: https://codepen.io/janverstr/pen/PvPoaV

function getPercentage(tap) {
  const percentage = (100 * tap.level) / tap.capacity;

  return percentage;
}

function setStrokeDash(percentage, tap) {
  const colored = percentage;
  const notColored = 100 - percentage;

  return `${colored} ${notColored}`;
}

function setColor(percentage) {
  let color = "green";
  if (percentage > 20 && percentage < 65) {
    color = "orange";
  } else if (percentage < 20) {
    color = "red";
  }
  return color;
}
