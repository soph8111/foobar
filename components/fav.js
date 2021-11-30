"use strict";

export function showFav(foobarData){

    calculateBeers(foobarData);
    
}

// Tomt array til at tælle øl

// const beerArray = [];

// const beerTypes = [
    // {name: githop, amount: 0},
    // {elhefe: 0},
    // {steampunk: 0},
// ]
// const beerTypes = {
//     elHefe: 0,
//     fairyTaleAle: 0,
//     row26: 0,
//     steampunk: 0,
//     gitHop: 0,
//     sleighRide: 0,
//     hollabackLager: 0,
//     hoppilyEverAfter: 0,
//     mowinTime: 0,
//     ruinedChildhood: 0,
// }

// function calculateBeers(beers){

//     beers.forEach((beer) => {
//         console.log(beer.order);
//         //Sørger for kun at tælle customer 1 gang - hvis samme kunde stadig bliver serviceret når det fetches igen)
//         if (!beerArray.includes(beer.id)){
//             // Pusher ordren til arrayet vha. split operator (så vi ikke får et array i et array)
//             beerArray.push(...beer.order);
//         }
//     });
//     console.log(beerArray);
//     const gitHop = beerArray.filter(beer => beer.includes("GitHop"));
//     beerTypes.push(gitHop);
//     const elHefe = beerArray.filter(beer => beer.includes("El Hefe"));
//     beerTypes.push(elHefe);
//     const steampunk = beerArray.filter(beer => beer.includes("Steampunk"));
//     beerTypes.push(steampunk);
//     // console.log(beerTypes.gitHop.length);
//     console.log(beerTypes);
//     // beerTypes.sort(setSort);
// }

// function setSort(a, b){
//     if(a.elements.length > b.elements.length) {
//         return -1;
//     } else {
//         return 1;
//     }
// }


//TEST 2
// const allBeers = [];
// const count = {}

// function calculateFav(foobarData){
// //     foobarData.forEach((order) => {
// //         // console.log(order.order);
// //         //Sørger for kun at tælle customer 1 gang - hvis samme kunde stadig bliver serviceret når det fetches igen)
// //         if (!allBeers.includes(order.id)){
// //             // Pusher ordren til arrayet vha. split operator (så vi ikke får et array i et array)
// //             allBeers.push(order.order);
// //         }
// //         getOccurrence(...allBeers);
// //     });
// //   console.log(allBeers);
// }

// function getOccurrence(allBeers) {

// const gitHop = allBeers.filter(beer1 => beer1.includes("GitHop"));
// //   console.log(gitHop);
// }


// TEST 1

// const allBeers = {
//     elHefe: 0,
//     fairyTaleAle: 0,
//     row26: 0,
//     steampunk: 0,
//     gitHop: 0,
//     sleighRide: 0,
//     hollabackLager: 0,
//     hoppilyEverAfter: 0,
//     mowinTime: 0,
//     ruinedChildhood: 0,
// }
// function calculateFav(data){   
//     if(!data.includes(data.id)){
//         data.forEach((order) => {
//             console.log(order.order);
//             if(order.order.includes("GitHop")){
//                 allBeers.gitHop+= order.order.filter(order => order == "GitHop").length;
//             };
            
//         });
//     }
    
//     console.log(allBeers.gitHop);
// }





// TEST 3

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

function calculateBeers(foobarData){
    
    foobarData.forEach((order) => {
            
        //Sørger for kun at tælle customer 1 gang - hvis samme kunde stadig bliver serviceret når det fetches igen)
        if(!orderArray.includes(order.id)){
            // Pusher customer id'et til arrayet, så vi kan tælle længden på arrayet og få antallet af kunder
            orderArray.push(order.id);
            // Sætter tælleren på øl til at være lig tallet før + længden af ordrerne
            console.log(order.order);
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
        console.log(beerCount);
        console.log(sorted);
        sortBy();
    });


}

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