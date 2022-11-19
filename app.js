function calcular(){
    let numero1 = document.getElementById('numero1').value;
    let numero2 = document.getElementById('numero2').value;

    let suma = parseFloat(numero1) + parseFloat(numero2);

    document.getElementById('resultado').value = suma;       
}