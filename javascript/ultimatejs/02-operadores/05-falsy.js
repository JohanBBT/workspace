let nombre = '';
let username = nombre || 'Anonimo';
console.log(username); //resultado: Anonimo

nombre = 'Johan';
username = nombre || 'Anonimo';
console.log(username); //resultado: Johan

function fn1() {
    console.log('Soy funcion 1');
    return false;
}

function fn2(){
    console.log('Soy funcion 2');
    return true;
}

let x = fn1() && fn2();