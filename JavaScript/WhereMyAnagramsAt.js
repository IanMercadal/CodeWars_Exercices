/*
    Ejercicio que consiste retornar las palabras que ordenadas alfabéticamente, sean iguales a la palabra que queremos comprobar.
*/
function anagrams(word, words) {
    word = word.split("");
    word.sort();
    let respuesta = [];

    for (let index = 0; index < words.length; index++) {
        let palabrasCortada = words[index].split("");
        palabrasCortada = palabrasCortada.sort()
        
        let palabraComprobar = palabrasCortada.join("");
        let palabraOriginal = word.join("");

        if(palabraComprobar == palabraOriginal) {
            respuesta.push(words[index])
        }
    }
    return respuesta;
}

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])
anagrams('laser', ['lazing', 'lazy',  'lacer'])