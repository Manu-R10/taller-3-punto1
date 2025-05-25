let x =1; //declara una variable y asigna valor
let total = 0; //declara otra variable para total
let pares = 0; //declara una variable para pares
let impares = 0; //declara una variable para impares

 do {
     total += x; //operación de suma acumulativa
 if (x % 2 === 0) { // verifica si x es un número par
    total -= 1; //resta 1 al valor de total
    pares++; //incrementa el valor de pares en 1
    } 
else { 
    impares++; //incrementa el valor de impares en 1
    }
 if  (total > 15) { // verifica si el total es mayor que 15
    console.log("Límite superado"); //imprime el texto "Límite superado", "alert" dara en pantalla si esta definido
    break; // Detiene el ciclo
    }

     x++; //aumenta x en 1

    } 
 while (x <=6)  // verifica que x llegue hasta el 6

console.log("Total:",total); // imprime el valor de la variable de total
console.log("Pares:",pares); // imprime el valor de la variable de pares
console.log("Impares:",impares); // imprime el valor de la variable de impares