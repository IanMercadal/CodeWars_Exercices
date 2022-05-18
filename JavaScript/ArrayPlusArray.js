/*
    Ejercicio que consiste en retornar la suma de 2 arrays.
*/
function arrayPlusArray(arr1, arr2) {
    resultado = 0;

    for (let index = 0; index < arr1.length; index++) {
        const numero = arr1[index];
        resultado += numero;
    }
    for (let index = 0; index < arr2.length; index++) {
        const numero = arr2[index];
        resultado += numero;
    }
    return resultado;
}
arrayPlusArray([1, 2, 3], [4, 5, 6]);
arrayPlusArray([-1, -2, -3], [-4, -5, -6]);
arrayPlusArray([0, 0, 0], [4, 5, 6]);
arrayPlusArray([100, 200, 300], [400, 500, 600]);