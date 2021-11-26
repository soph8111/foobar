"use strict";
export function showOrders(foobarData){
    // console.log(foobarData);
    document.querySelector(".queue").textContent = `In queue: ${foobarData.length}`;
    const ordersHolder = document.querySelector("#orders_wrapper");
    const template = document.querySelector(".orders_content").content;
    ordersHolder.textContent = "";
    foobarData.forEach((order) => {
      const klon = template.cloneNode(true);
      // console.log(order);
      klon.querySelector(".order_no").textContent = order.id;
      klon.querySelector(".order_beers").textContent = order.order
      ordersHolder.appendChild(klon);
    });
}


// Vise order på en liste li

// Sætte 1x, 2x osv foran ordren alt efter antal af samme slags øl

