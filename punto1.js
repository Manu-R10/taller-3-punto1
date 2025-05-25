let x =1; 
let total = 0; 
let pares = 0; 
let impares = 0; 

 do {
     total += x;
 if (x % 2 === 0) {
    total -= 1; 
    pares++; 
    } 
else { 
    impares++; 
    }

     x++;

    } 
 while (x <=6)  

console.log("Total:",total); 
console.log("Pares:",pares); 
console.log("Impares:",impares); 