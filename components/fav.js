// Caroline
"use strict";

//Tomt array til at lægge alle "nye" ordre i, så vi kan tjekke om de har været kørt før
const orderArray = [];

//Array til at tælle op på hvor mange gang den enkelte slags øl er bestilt
const beerCount = [
  { name: "GitHop", amount: 0 },
  { name: "Steampunk", amount: 0 },
  { name: "El Hefe", amount: 0 },
  { name: "Fairy Tale Ale", amount: 0 },
  { name: "Row 26", amount: 0 },
  { name: "Sleighride", amount: 0 },
  { name: "Hollaback Lager", amount: 0 },
  { name: "Hoppily Ever After", amount: 0 },
  { name: "Mowintime", amount: 0 },
  { name: "Ruined Childhood", amount: 0 },
];

// Nyt array af beerCount, som vi kan sortere på (vi laver et nyt, så vi ikke piller ved rækkefølgen i det oprindelige, og dermed får pushet de øl de forkerte steder hen)
const sorted = beerCount.slice();

//Udskriver det relevante data
export function showFav(foobarData) {
  calculateBeers(foobarData);
  document.querySelector("#number1").textContent = sorted[0].name;
  document.querySelector("#img1").setAttribute("src", `./images/${changeName(sorted[0].name)}.webp`);
  document.querySelector("#number2").textContent = sorted[1].name;
  document.querySelector("#img2").setAttribute("src", `./images/${changeName(sorted[1].name)}.webp`);
  document.querySelector("#number3").textContent = sorted[2].name;
  document.querySelector("#img3").setAttribute("src", `./images/${changeName(sorted[2].name)}.webp`);
}

//Her udregnes hvor mange forskellige slags øl der er bestilt
function calculateBeers(foobarData) {
  foobarData.forEach((order) => {
    //Sørger for kun at tælle customer 1 gang - hvis samme kunde stadig bliver serviceret når det fetches igen
    if (!orderArray.includes(order.id)) {
      // Pusher customer id'et til arrayet, hvis det ikke allerede findes i arrayet
      orderArray.push(order.id);
      // Kun hvis den ikke har været kørt før tjekker vi hvilke øl ordren indeholder
      if (order.order.includes("GitHop")) {
        // Sætter tælleren på øllen til at være lig tallet før + længden af array med samme øl i
        beerCount[0].amount += order.order.filter((order) => order == "GitHop").length;
      }
      if (order.order.includes("Steampunk")) {
        beerCount[1].amount += order.order.filter((order) => order == "Steampunk").length;
      }
      if (order.order.includes("El Hefe")) {
        beerCount[2].amount += order.order.filter((order) => order == "El Hefe").length;
      }
      if (order.order.includes("Fairy Tale Ale")) {
        beerCount[3].amount += order.order.filter((order) => order == "Fairy Tale Ale").length;
      }
      if (order.order.includes("Row 26")) {
        beerCount[4].amount += order.order.filter((order) => order == "Row 26").length;
      }
      if (order.order.includes("Sleighride")) {
        beerCount[5].amount += order.order.filter((order) => order == "Sleighride").length;
      }
      if (order.order.includes("Hollaback Lager")) {
        beerCount[6].amount += order.order.filter((order) => order == "Hollaback Lager").length;
      }
      if (order.order.includes("Hoppily Ever After")) {
        beerCount[7].amount += order.order.filter((order) => order == "Hoppily Ever After").length;
      }
      if (order.order.includes("Mowintime")) {
        beerCount[8].amount += order.order.filter((order) => order == "Mowintime").length;
      }
      if (order.order.includes("Ruined Childhood")) {
        beerCount[9].amount += order.order.filter((order) => order == "Ruined Childhood").length;
      }
    }
    // Kalder functionen sort by
    sortBy();
  });
}

// Sorterer efter amount, så den med flest ligger øverst i arrayet
function sortBy() {
  sorted.sort((a, b) => {
    return b.amount - a.amount;
  });
}

//Her ændrer vi ordrens navn til ikke at indeholde mellemrum, sådan at vi kan bruge det til at finde det matchende billede
function changeName(name) {
  let newName = name.split(" ");
  newName = newName.join("");
  return newName.toLowerCase();
}

