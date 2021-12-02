"use strict";

export function showSales(foobarData){
    document.querySelector("#customer_amount").textContent = calculateCustomers(foobarData);
    document.querySelector("#beers_amount").textContent = customerCount.beerCount;
    document.querySelector("#money_amount").textContent = `${calculateMoney()},-`;
}

// Tomt array til at tælle kunder og øl
const customerCount = {
    customerArray: [],
    beerCount: 0,
};

  function calculateCustomers(customers){
    customers.forEach((customer) => {
        
        //Sørger for kun at tælle customer 1 gang - hvis samme kunde stadig bliver serviceret når det fetches igen)
        if(!customerCount.customerArray.includes(customer.id)){
            // Pusher customer id'et til arrayet, så vi kan tælle længden på arrayet og få antallet af kunder
            customerCount.customerArray.push(customer.id);
            // Sætter tælleren på øl til at være lig tallet før + længden af ordrerne
            customerCount.beerCount = customerCount.beerCount + customer.order.length;
        }
    });
    // Returnerer længden af arrayet, som så bliver udskrevet i showSales
    return customerCount.customerArray.length;
}

// function calculateBeers(){
//     return customerCount.beerCount;
// }


function calculateMoney(){
    // Ganger antallet af øl med 50 (pris pr øl)
    return customerCount.beerCount * 50;
}
