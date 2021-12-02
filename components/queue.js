"use strict";

export function showOrders(foobarData) {
  document.querySelector(".queue").textContent = `In queue: ${foobarData.length}`;
  const ordersHolder = document.querySelector("#orders_wrapper");
  const template = document.querySelector(".orders_content").content;
  ordersHolder.textContent = "";
  foobarData.forEach((order) => {
    const klon = template.cloneNode(true);
    klon.querySelector(".order_no").textContent = `#${order.id}`;
    // console.log(order.id);
    const list = createBeerList(order.order);
    klon.querySelector(".order_beers").append(list);

    ordersHolder.appendChild(klon);
  });
}

function createBeerList(beersOnOrder) {
  let list = document.createElement("ul");

  console.log(beersOnOrder);

  const newArray = [];
  const moreThanOne = [];

  beersOnOrder.forEach((beer) => {
    const numbersOfBeers = countNumbersOfBeers(beersOnOrder, beer);
    // console.log(numbersOfBeers);
    if (numbersOfBeers.includes("1")) {
      // console.log(numbersOfBeers);
      newArray.push(numbersOfBeers);
    } else if (!numbersOfBeers.includes("1")) {
      // console.log(numbersOfBeers);
      moreThanOne.push(numbersOfBeers);
    }
  });

  if (moreThanOne.length > 0) {
    //console.log(moreThanOne[moreThanOne.length - 1]);
    newArray.push(moreThanOne[moreThanOne.length - 1]);
  }

  newArray.forEach((beer) => {
    //console.log(beer)
    const li = document.createElement("li");

    li.append(beer);
    list.append(li);
  });

  return list;
}

function countNumbersOfBeers(array, whatBeer) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === whatBeer) {
      count++;
    }
  }

  return `${count}x ${whatBeer}`;
}
