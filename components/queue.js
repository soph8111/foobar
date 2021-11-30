"use strict";

export function showOrders(foobarData) {
  document.querySelector(".queue").textContent = `In queue: ${foobarData.length}`;
  const ordersHolder = document.querySelector("#orders_wrapper");
  const template = document.querySelector(".orders_content").content;
  ordersHolder.textContent = "";
  foobarData.forEach((order) => {
    const klon = template.cloneNode(true);
    klon.querySelector(".order_no").textContent = order.id;
    const list = createBeerList(order.order);
    klon.querySelector(".order_beers").append(list);

    ordersHolder.appendChild(klon);
  });
}

function createBeerList(beersOnOrder) {
  let list = document.createElement("ul");

  beersOnOrder.forEach((beer) => {
    const li = document.createElement("li");
    li.append(beer);
    list.appendChild(li);
  });

  return list;
}

// Vise order på en liste li

// Sætte 1x, 2x osv foran ordren alt efter antal af samme slags øl
