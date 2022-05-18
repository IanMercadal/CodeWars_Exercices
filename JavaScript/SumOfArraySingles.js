/*
    Ejercicio que consiste en sumar los números que no estén repetidos en el array
*/
function repeats(arr){
    let suma = 0;
    
    for(let i = 0; i < arr.length; i += 1) {
        const filtrarArray = arr.filter((elemento, index) => elemento === arr[i]);
        filtrarArray.length === 1 ? suma += filtrarArray[0] : 0
    }
    return suma;
};
repeats([4,5,7,5,4,8]);
repeats([9, 10, 19, 13, 19, 13]);
repeats([16, 0, 11, 4, 8, 16, 0, 11]);
repeats([5, 17, 18, 11, 13, 18, 11, 13]);
repeats([5, 10, 19, 13, 10, 13]);