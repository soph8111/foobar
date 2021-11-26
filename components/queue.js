export function showOrders(foobarData){
    const ordersHolder = document.querySelector("#orders_wrapper");
    const template = document.querySelector(".orders_content").content;
    //   staffHolder.textContent = "";
    foobarData.forEach((order) => {
      const klon = template.cloneNode(true);
      klon.querySelector(".order_no").textContent = order.id;
      klon.querySelector(".order_beers").textContent = order.order;
    //   klon.querySelector(".serving_no").textContent = bartenders.servingCustomer;
      ordersHolder.appendChild(klon);
    });
}