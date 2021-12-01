"use strict";

export function showOrders(foobarData) {
  document.querySelector(".queue").textContent = `In queue: ${foobarData.length}`;
  const ordersHolder = document.querySelector("#orders_wrapper");
  const template = document.querySelector(".orders_content").content;
  ordersHolder.textContent = "";
  foobarData.forEach((order) => {
    const klon = template.cloneNode(true);
    klon.querySelector(".order_no").textContent =`#${order.id}`;
    console.log(order.id);
    const list = createBeerList(order.order);
    klon.querySelector(".order_beers").append(list);

    ordersHolder.appendChild(klon);
  });
}

/* function createBeerList(beersOnOrder) {
  let list = document.createElement("ul");

  const counts = {};

  beersOnOrder.forEach((beer) => {
    counts[beer] = (counts[beer] || 0) + 1;
  });

  beersOnOrder.forEach((beer) => {
    const li = document.createElement("li");

    //console.log(beer);

    beer = `${counts[beer]}x ${beer}`;

    // beer = `${countNumbersOfBeers(beersOnOrder, beer)}x ${beer}`;

    li.append(beer);

    list.appendChild(li);
  });

  return list;
} */

function createBeerList(beersOnOrder) {
  let list = document.createElement("ul");

  console.log(beersOnOrder);
  const moreThanOne = [];

  beersOnOrder.forEach((beer) => {
    const li = document.createElement("li");

    const numbersOfBeers = countNumbersOfBeers(beersOnOrder, beer);

    //console.log(numbersOfBeers);

    if (numbersOfBeers > 1) {
      moreThanOne.push(beer);
    }

    if (moreThanOne.length > 1) {
      // console.log("vi er her");
      const ost = moreThanOne[moreThanOne.length - 1];
      // console.log(ost);
    }

    beer = `${numbersOfBeers}x ${beer}`;

    li.append(beer);
    list.append(li);
  });

  return list;
}

function countNumbersOfBeers(array, whatBeer) {
  let count = 0;
  const hej = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === whatBeer) {
      count++;
    }
  }

  return count;
}

// Sætte 1x, 2x osv foran ordren alt efter antal af samme slags øl
