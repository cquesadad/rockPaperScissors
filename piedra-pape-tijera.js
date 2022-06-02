var sel1 = "Piedra";
var sel2 = "Papel";
var sel3 = "Tijera";

var user;

// declarar opciones en un Array
const option = ["Piedra", "Papel", "Tijera"];

// Proceso para seleccionar una opción random
const mac = Math.floor(Math.random() * option.length);

console.log(mac, option[mac]);

console.log("Optión 3 " + option[0]);

//document.div.innerHTML = (mac, option[mac]); //optener valor Mac
const getValueInput = () =>{
    let inputValue = document.getElementById("domTextElement").value; 
    document.getElementById("valueInput").innerHTML = inputValue; 

    user = inputValue;
    cpu = option[mac];

    console.log("el usuario es " + user);

    if (cpu != user) {
        if (cpu === option[0] && user === option[2]){
            console.log("El Mac ha ganado con " + option[0]);
            document.getElementById("result").innerHTML = "El Mac ha ganado con " + option[0];
        } else if (cpu === option[1] && user === option[0]) {
            console.log("El Mac ha ganado con " + option[1]);
            document.getElementById("result").innerHTML = "El Mac ha ganado con " + option[1];
        }  else if (cpu === option[2] && user === option[1]){
            console.log("El Mac ha ganado con " + option[2]);  
            document.getElementById("result").innerHTML = "El Mac ha ganado con " + option[2];
        }  else {
            console.log("¡Has ganado con " + user + " !");  
            document.getElementById("result").innerHTML = "¡Has ganado con " + user + " !";
        }
    } else {
        console.log("Se ha quedado en tablas con " + user);
        document.getElementById("result").innerHTML = "Se ha quedado en tablas con" + user;
    }
}











/*
if resultado = function(user, cpu){
    if (user != cpu){
        if (user === sel1 && cpu === sel)
    }
}*/
