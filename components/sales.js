"use strict";

export function showSales(foobarData){
    // console.log(foobarData);
    document.querySelector("#customer_amount").textContent = calculateCustomers(foobarData);
    document.querySelector("#beers_amount").textContent = calculateBeers(foobarData);
    document.querySelector("#money_amount").textContent = calculateMoney(foobarData);
}

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
    // Retunerer længden af arrayet, som så bliver udskrevet i showSales
    return customerCount.customerArray.length;
}

const beerCount = {
    beerArray: [],
};

function calculateBeers(customers){

    console.log(customers);
    customers.forEach((customer) => {
        if (!beerCount.beerArray.includes(customer.id)){
            // console.log(customer.order);
        beerCount.beerArray.push(...customer.order);
        // console.log(beerCount.beerArray);
        }
    });
    
    // console.log(beerCount.beerArray.length);
    return beerCount.beerArray.length;
}

function calculateMoney(customers){
    // console.log(beerCount.beerArray);
    return beerCount.beerArray.length * 50;
}
