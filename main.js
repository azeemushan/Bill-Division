'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

function bonAppetit(bill, k, b) {
//3 10 2 9
//4 1
//7
//bill: an array of integers representing the cost of each item ordered
//k: an integer representing the zero-based index of the item Anna doesn't eat
//b: the amount of money that Anna contributed to the bill
    let x=bill[1];
    let tb=0;
    for(let i=0; i<bill.length; i++){
        tb+=bill[i];
    }
    let ab=tb-bill[k];
    let toPay=ab/2;
    let bon="Bon Appetit";
    let pay=b-toPay;
    if(toPay==b){
        return bon;
    }
    else{
        return pay;
    }
}

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const bill = readLine().replace(/\s+$/g, '').split(' ').map(billTemp => parseInt(billTemp, 10));

    const b = parseInt(readLine().trim(), 10);

   let c= bonAppetit(bill, k, b);
   console.log(c);
}
