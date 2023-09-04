//HELADERIA

// let bandera = prompt("Deseas hacer un nuevo pedido? (ingresa n para salir)");

// while(bandera != "n"){
//     let topping = prompt("Ingrese un topping del helado(oreo - kitkat - kinder)");
//     let helado = 100;
//     let precio = 0;
//     let precioFinal;
//     if (topping.toLowerCase() == "oreo"){
//         precio = 10;
//     }
//     else if(topping.toLowerCase() == "kitkat"){
//         precio = 15;
//     }
//     else if(topping.toLowerCase() == "kinder"){
//         precio = 25;
//     }
//     else{
//         alert("No tenemos ese topping");
//     }
//     if (precio != 0){
//         precioFinal = precio + helado;
//         alert("El precio final del pedido es: " + precioFinal);
//     }
//     bandera = prompt("Deseas hacer un nuevo pedido? (ingresa n para salir)");
// }

//PEDIDO CON SWITCH

// let bandera = prompt("Deseas hacer un nuevo pedido? (ingresa n para salir)");
// while(bandera != "n"){

//     let pedidoCliente = prompt("Elige uno de los productos: (carne - pescado - verdura)").toLowerCase();
//     switch(pedidoCliente){
//         case "carne":
//             alert("Le ofrezco vino tinto");
//             break;
//         case "pescado":
//             alert("Le ofrezco vino blanco");
//             break;
//         case "verdura":
//             alert("Le ofrezco agua"); 
//             break;   
//         default:
//             alert("Carne, pescado o verdura");
//             break;
//     }    
//     bandera = prompt("Deseas hacer un nuevo pedido? (ingresa n para salir)");
// }

//ARRAY DE DATOS

// let v = [1,2,3,4,5];

// alert("Primera vuelta");
// for(let i = 0; i < 5; i++){
//     alert("El numero actual es " + v[i]);
// }
// alert("Segunda vuelta");
// v.push(6);
// for(let i = 0; i < v.length; i++){
//     alert("El numero actual es " + v[i]);
// }

//CONSIGNA CON WHILE

// let num = 0;

// while(num < 11){
//     alert(num + " es mas chico que 11");
//     num++;
// }


