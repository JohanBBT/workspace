//Crear una funcion en la que se ingresen 2 numero y regrese el numero mas grande
function MaxNum(a, b) {
    let MaxNumber = 0;
    if (a > b) {
        MaxNumber = a;
    } else {
        MaxNumber = b;
    }
    console.log(MaxNumber);
}

MaxNum(4, 10);
