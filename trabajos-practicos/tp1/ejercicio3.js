//3. Utilizando condicionales múltiples, realice un <script> que verifique la edad de Jubilación de una persona.

let comprobarEdad = (edad) => {
    if(typeof(edad) !== "number"){
        throw new Error('Parametro invalido')
    }else{
        if(edad < 65){
            return false
        }else{
            return true
        }
    }
}

console.log(comprobarEdad(45))
console.log(comprobarEdad(65))
console.log(comprobarEdad('setenta'))