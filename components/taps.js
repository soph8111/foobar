"use strict";

export function showTaps(foobarData, beerData) {
    const tapsHolder = document.querySelector("#taps_wrapper");
    const template = document.querySelector(".taps_content").content;
    tapsHolder.textContent = "";
    foobarData.forEach((tap) => {
      const klon = template.cloneNode(true);
      klon.querySelector(".tap_no").textContent = tap.id+1;
    //   klon.querySelector(".staff_img").src = `./images/${bartenders.name}.png`;
      klon.querySelector(".beer_name").textContent = tap.beer;
      klon.querySelector(".level").textContent = getPercentage(tap);
      klon.querySelector(".alcohol").textContent = getAlcohol(beerData, tap);
      klon.querySelector(".beer_type").textContent = getType(beerData, tap);
      tapsHolder.appendChild(klon);
    });
    
}

function getAlcohol(beerData, tap){
    let alcohol;
    beerData.forEach((beer) => {
        if(tap.beer === beer.name){
            alcohol = beer.alc;    
        }     
    })

    return alcohol;    
}

function getType(beerData, tap){
    let type;
    beerData.forEach((beer) => {
        if(tap.beer === beer.name){
            type = beer.category;    
        }     
    })

    return type;    
}
 
function getPercentage(tap){
    return (100 * tap.level) / tap.capacity;
}