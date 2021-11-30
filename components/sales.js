"use strict";

export function showSales(foobarData){
    document.querySelector("#customer_amount").textContent = calculateCustomers(foobarData);
    document.querySelector("#beers_amount").textContent = calculateBeers(foobarData);
    document.querySelector("#money_amount").textContent = calculateMoney();
}

// Tomt array til at tælle kunder
const customerCount = {
    customerArray: [],
};

  function calculateCustomers(customers){
    customers.forEach((customer) => {
        
        //Sørger for kun at tælle customer 1 gang - hvis samme kunde stadig bliver serviceret når det fetches igen)
        if(!customerCount.customerArray.includes(customer.id)){
            // Pusher customer id'et til arrayet, så vi kan tælle længden på arrayet og få antallet af kunder
            customerCount.customerArray.push(customer.id);
        }   
    });
    // Returnerer længden af arrayet, som så bliver udskrevet i showSales
    return customerCount.customerArray.length;
}

// Tomt array til at tælle øl
const beerCount = {
    beerArray: [],
};

function calculateBeers(customers){

    // console.log(customers);
    customers.forEach((customer) => {
        //Sørger for kun at tælle customer 1 gang - hvis samme kunde stadig bliver serviceret når det fetches igen)
        if (!beerCount.beerArray.includes(customer.id)){
            // Pusher ordren til arrayet vha. split operator (så vi ikke får et array i et array)
            beerCount.beerArray.push(...customer.order);
        }
    });
    
    // Returnerer længden af arrayet og udskriver antallet af solgte øl i showSales
    return beerCount.beerArray.length;
}


function calculateMoney(){
    //Ganger arrayets lægde (antallet af øl) med 50 (pris pr øl)
    return beerCount.beerArray.length * 50;
}
