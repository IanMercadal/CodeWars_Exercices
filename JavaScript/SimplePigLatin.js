// Este ejercicio consiste en mover la primera letra de una palabra hacia la última posición de ella misma y concatenarle "ay" respectivamente

function pigIt(frase){
    let fraseCortada = frase.split(" ");
    let fraseFinal = "";
    fraseCortada.forEach(palabra => {
        if(!palabra.match(/^([a-zA-Z])/)) {
            fraseFinal += palabra;
            return;
        } else {
            let palabraCortada = palabra.split("");
            let palabraCopia = [...palabraCortada];
            palabraCopia.push(palabraCopia.shift())
            palabraCopia += "ay";
            fraseFinal += palabraCopia + " ";
        }
    });
    
    fraseFinal = fraseFinal.replace(/,/g, '');
    fraseFinal = fraseFinal.trim();
    return fraseFinal;
}

pigIt('Pig latin is cool') /* igPay atinlay siay oolcay */;
pigIt('This is my string') /*hisTay siay ymay tringsay*/ ;