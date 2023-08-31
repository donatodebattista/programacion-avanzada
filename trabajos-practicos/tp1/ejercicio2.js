// 2. Utilice los elementos de valores numéricos para: Sumar, Restar, Dividir, multiplicar, dividir dos números.

// SUMA
function sumar(n1, n2){
    return n1 + n2
}


// RESTA
let restar = (minuendo, sustraendo) => {return minuendo - sustraendo}


// MULTIPLICACION
let multiplicar = (n1, n2) => {return n1 * n2}


// DIVISION
let dividir = (dividendo, divisor) => {
    try{
        if(divisor != 0){
            return dividendo / divisor
        } 
        
        throw new Error('Error: division por 0')
    }
    catch (e) {return e.message}
}


console.log(sumar(3, 6))
console.log(restar(10, 2))
console.log(multiplicar(7, 8))
console.log(dividir(20, 0))
console.log(dividir(20, 5))
