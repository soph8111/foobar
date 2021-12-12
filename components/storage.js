// Caroline
"use strict";

export function showStorage(foobarData){
    //  console.log(foobarData);
     const storageHolder = document.querySelector("#storage_wrapper");
     const template = document.querySelector(".storage_content").content;
    storageHolder.textContent = "";
     foobarData.forEach((storage) => {
       const klon = template.cloneNode(true);
       klon.querySelector(".storage_name").textContent = storage.name;
       klon.querySelector(".storage_img").src = `./images/${changeName(storage.name)}.png`;
       klon.querySelector(".storage_amount").textContent = storage.amount;
       storageHolder.appendChild(klon);
     });
}

//Funktion der ændrer navnet til ikke at indeholde mellemrum, så det kan bruges til at finde det matchende billede
function changeName(name){
  let newName = name.split(" ");
  newName = newName.join("");
  return newName.toLowerCase();
}