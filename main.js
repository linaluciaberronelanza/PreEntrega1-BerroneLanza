//En este simulador se interactua con el usuario para saber que tipo de subscripcion al sitio quiere

let nombre = prompt("Ingresa tu nombre");

document.write("Hola " + nombre + ",¿Como estas?; <br/> ");

let rta = "";

function iva(dinero) {
    return dinero * 0.21;
}

function si(dinero) {
    if (dinero <= 100) {
        alert("Has accedido a la suscripcion basica, se adiciona IVA" + "\n" + "TOTAL: " + (dinero + iva(dinero)));
    } else if ((dinero > 100) && (dinero <= 200)) {
        alert("Has accedido a la suscripcion media, no se adiciona IVA" + "\n" + "TOTAL: " + dinero);
    } else {
        alert("Has accedido a la suscripcion premium, no se adiciona IVA, tiene un descuento del 50%" + "\n" + "TOTAL: " + (dinero * 0.5));
    }
}

do {
    let dinero = Number(prompt("¿Cuanto dinero quieres gastar? (Ingresa el monto de dinero)"));
    si(dinero);

    console.log(dinero);
    document.write("<br/>" + "Primero colocaste $" + dinero + "<br/>");

    let extra = Number(prompt("¿Si desea acceder a otra suscripcion, coloque el monto a adicionar? (Ingrese el monto de dinero a sumar)"));
    let resultado = dinero + extra;

    document.write("Segundo colocaste $" + extra + "<br/>");

    si(resultado);

    console.log(resultado),
        document.write("En total colocaste $" + resultado + "<br/>");

    if (resultado <= 100) {
        document.write("<br/>" + "SUSCRIPCION BASICA, el monto total de tu suscripcion es $" + (resultado + iva(resultado)) + "<br/>");
    } else if ((resultado > 100) && (resultado <= 200)) {
        document.write("<br/>" + "SUSCRIPCION MEDIA, el monto total de tu suscripcion es $" + resultado + "<br/>");
    } else {
        document.write("<br/>" + "SUSCRIPCION PREMIUM, el monto total de tu suscripcion es $" + (resultado * 0.5) + "<br/>");
    };

    rta = prompt("Desea salir?" + "\n" + "(ingrese salir para salir)").toLocaleLowerCase();

} while (rta != "salir")

console.log(rta);
