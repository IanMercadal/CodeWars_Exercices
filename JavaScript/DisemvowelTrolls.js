/*
    Ejercicio que consiste en quitar las vocales del string pasado por parámetro.
*/
function disemvowel(str) {

    let vocales = ["a","A","e","E","i","I","o","O","u","U"];
    let arraySinVocales = [];

    str = str.split("");
    for (let index = 0; index < str.length; index++) {

        if(vocales.indexOf(str[index]) === -1) {
            let consonante = str[index];
            arraySinVocales.push(consonante);
        }
    }
    arraySinVocales = arraySinVocales.join("");
    return arraySinVocales;
}

disemvowel("This website is for losers LOL!")
disemvowel("No offense but,\nYour writing is among the worst I've ever read")
disemvowel("What are you, a communist?")