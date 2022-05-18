/*
    Ejercicio que consiste en sustituir los caracteres repetidos de un string por ")", 
    en caso contraio, por "("
*/
function duplicateEncode(word){
    let letras = [...word.toLowerCase()];
    let listaRepetidos = letras.filter((letra,index,letras)=>letras.indexOf(letra)!==index);
    let objetoDuplicados = new Set(listaRepetidos); 
    let listaDuplicados = [...objetoDuplicados];
    let resultString = "";

    for (let i=0, n=letras.length; i < n; ++i ) {
        if(listaDuplicados.includes(letras[i])) {
            resultString += ")";
        } else {
            resultString += "(";
        }
    }
    console.log("resultString",resultString)
    return resultString;
}
duplicateEncode("din");
duplicateEncode("recede");
duplicateEncode("Success");
duplicateEncode("(( @");