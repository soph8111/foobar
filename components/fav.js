"use strict";

const orderArray = [];

const beerCount = [
    { name: "GitHop", amount: 0 },
    { name: "Steampunk" , amount: 0 },
    { name: "El Hefe", amount: 0 },
    { name: "Fairy Tale Ale", amount: 0 },
    { name: "Row 26", amount: 0 },
    { name: "Sleighride", amount: 0 },
    { name: "Hollaback Lager", amount: 0 },
    { name: "Hoppily Ever After", amount: 0 },
    { name: "Mowintime", amount: 0 },
    { name: "Ruined Childhood", amount: 0 }
 ];

 const sorted = beerCount.slice();

export function showFav(foobarData){

    calculateBeers(foobarData);
    document.querySelector("#number1").textContent = sorted[0].name;
    document.querySelector("#number2").textContent = sorted[1].name;
    document.querySelector("#number3").textContent = sorted[2].name;
}

function calculateBeers(foobarData){
    
    foobarData.forEach((order) => {
            
        //Sørger for kun at tælle customer 1 gang - hvis samme kunde stadig bliver serviceret når det fetches igen
        if(!orderArray.includes(order.id)){
            // Pusher customer id'et til arrayet, så vi kan tjekke at ordren ikke har været kørt før
            orderArray.push(order.id);
            // Sætter tælleren på øllen til at være lig tallet før + længden af array med samme øl i
            // console.log(order.order);
            if(order.order.includes("GitHop")){
                beerCount[0].amount+= order.order.filter(order => order == "GitHop").length;
            };
            if(order.order.includes("Steampunk")){
                beerCount[1].amount+= order.order.filter(order => order == "Steampunk").length;
            };
            if(order.order.includes("El Hefe")){
                beerCount[2].amount+= order.order.filter(order => order == "El Hefe").length;
            };
            if(order.order.includes("Fairy Tale Ale")){
                beerCount[3].amount+= order.order.filter(order => order == "Fairy Tale Ale").length;
            };
            if(order.order.includes("Row 26")){
                beerCount[4].amount+= order.order.filter(order => order == "Row 26").length;
            };
            if(order.order.includes("Sleighride")){
                beerCount[5].amount+= order.order.filter(order => order == "Sleighride").length;
            };
            if(order.order.includes("Hollaback Lager")){
                beerCount[6].amount+= order.order.filter(order => order == "Hollaback Lager").length;
            };
            if(order.order.includes("Hoppily Ever After")){
                beerCount[7].amount+= order.order.filter(order => order == "Hoppily Ever After").length;
            };
            if(order.order.includes("Mowintime")){
                beerCount[8].amount+= order.order.filter(order => order == "Mowintime").length;
            };
            if(order.order.includes("Ruined Childhood")){
                beerCount[9].amount+= order.order.filter(order => order == "Ruined Childhood").length;
            };
        }
        // console.log(beerCount);
        // console.log(sorted);
        // Kalder functionen sort by
        sortBy();

    });


}

// Sorterer efter amount, så den med flest ligger øverst i arrayet
function sortBy(){
    sorted.sort((a, b) => {
        return b.amount - a.amount;
    });
}





    // CODE - https://www.tutorialspoint.com/find-n-highest-values-in-an-object-javascript
//     const pickHighest = (obj, num = 1) => {
//         const requiredObj = {};
//         if(num > Object.keys(obj).length){
//            return false;
//         };
//         Object.keys(obj).sort((a, b) => obj[b] - obj[a]).forEach((key, ind) =>
//         {
//            if(ind < num){
//               requiredObj[key] = obj[key];
//            }
//         });
//         return requiredObj;
//      };
//      console.log(pickHighest(beerCount, 3));
//      console.log(beerCount[0]); //returns 'someV