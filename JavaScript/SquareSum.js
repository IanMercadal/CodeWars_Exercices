/*
    Ejercicio que consiste en retornar la suma de los números del array al cuadrado.
*/

function squareSum(numbers){
    for (let index = 0; index < numbers.length; index++) {
        numbers[index] = Math.pow(numbers[index],2)
    }
    const suma = numbers.reduce((valorAnterior, valorActual) => valorAnterior + valorActual, 0);
    return suma;
}
squareSum([1,2]);
squareSum([0, 3, 4, 5]);
squareSum([]);