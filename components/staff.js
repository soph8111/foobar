"use strict";
export function showStaff(foobarData) {
    // console.log(foobarData);
    const staffHolder = document.querySelector("#staff_wrapper");
    const template = document.querySelector(".staff_content").content;
    staffHolder.textContent = "";
    foobarData.forEach((bartenders) => {
      const klon = template.cloneNode(true);
      klon.querySelector(".name").textContent = bartenders.name;
      klon.querySelector(".staff_img").src = `./bartenders/${bartenders.name}.png`;
      klon.querySelector(".ready").style.fill = readyOrNot(bartenders.status);
      klon.querySelector(".status").textContent = getStatus(bartenders.statusDetail);
      klon.querySelector(".serving_no").textContent = getOrderNo(bartenders.servingCustomer);
      staffHolder.appendChild(klon);
    });
  }

  // Ændre farven til grøn hvis bartender er READY
  function readyOrNot(status){
    // console.log(status);
    if(status === "READY"){
        status = "green";
    } 
    return status;
  }

  // Udskriver status.detail som rigtig tekst
  function getStatus(status){
    if(status === "pourBeer"){
      return "Pouring beer";
    }
    else if(status === "waiting"){
      return "Available"
    }
    else if(status === "replaceKeg"){
      return "Replacing keg"
    }
    else if(status === "releaseTap"){
      return "Releasing tap"
    }
    else if(status === "reserveTap"){
      return "Reserving tap"
    }
    else if(status === "startServing"){
      return "Starting to serve"
    }
    else if(status === "startServing"){
      return "Starting to serve"
    }
    else if(status === "receivePayment"){
      return "Receiving payment"
    }
  }

  //Sørger for der ikke bliver udskrevet ordrer nummer når der ikke er en kunde (så der ikke står #null)
  function getOrderNo(id){
    if (id != null){
      return `#${id}`;
    }
  }