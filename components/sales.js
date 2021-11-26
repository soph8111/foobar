"use strict";

export function showSales(amount, foobarData){
    // console.log(foobarData);

    document.querySelector("#customer_amount").textContent = calculateCustomer(amount, foobarData);
    document.querySelector("#beers_amount").textContent = calculateBeers(amount, foobarData);
    document.querySelector("#beers_amount").textContent = calculateMoney(amount, foobarData);
}

// HELP
function calculateCustomer(amount, customers){
    // console.log(customers);
    amount.push(customers);
    // const totalCustomers = amount.concat(customers);
        const totalCustomers = amount.concat(customers);
    // amount = totalCustomers;
    // const test = amount.concat(customers)
    // console.log(totalCustomers);
    return totalCustomers.length;
}

function calculateBeers(amount, customers){}

function calculateMoney(amount, customers){}


// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
