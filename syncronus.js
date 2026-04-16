//SYNCRONUS
//

console.log(1);
console.log(2);
console.log(3);


//ASYNCRONUS
console.log(1);
setTimeout(() => {
    console.log(2);
}, 10000);

console.log(3);
console.log("abar ngapa");