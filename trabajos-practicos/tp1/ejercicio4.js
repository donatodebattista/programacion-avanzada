// 4. Ídem ejercicio anterior, verificando el sexo, siendo que la edad de Jubilación para el Hombre
// es de 65 años y la Mujer a los 60 años.

const verificarSexoYEdad = (sexo, edad) =>{

    if(sexo == 'M'){
        if( edad < 65){
            return false

        }else return true 

    }else if(sexo == 'F'){
        if( edad < 60){
            return false

        }else return true
    }
    
    return ("ERROR: Sexo invalido")

}

console.log(verificarSexoYEdad("M", 65));
console.log(verificarSexoYEdad("M", 60));

console.log(verificarSexoYEdad("F", 60));
console.log(verificarSexoYEdad("F", 50));

console.log(verificarSexoYEdad('A', 25));