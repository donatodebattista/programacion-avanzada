let nombres = new Array()

nombres[0] = "Nacho"
nombres[1] = "Arek"
nombres[2] = "Laura"
nombres[3] = "Sonia"
nombres[4] = "Gonzalo"
nombres[5] = "Eva"
nombres[6] = "Pedro"
nombres[7] = "Manuel" 

document.write(nombres[0] + "<br>")
document.write(nombres[1] + "<br>")
document.write(nombres[2] + "<br>")
document.write(nombres[3] + "<br>")
document.write(nombres[4] + "<br>")
document.write(nombres[5] + "<br>")
document.write(nombres[6] + "<br>")
document.write(nombres[7] + "<br>")



const buscarNombre = (nombre) => {
    if(nombres.includes(nombre)){
        alert('El nombre se encuentra en la lista ✅')

    }else{
        alert("El nombre no se encuentra en la lista ❌")
    }
}


// Prueba
for (let i = 1; i <= 3; i++){
    let buscado = prompt("Ingrese el nombre a buscar: ")
    buscarNombre(buscado)
}