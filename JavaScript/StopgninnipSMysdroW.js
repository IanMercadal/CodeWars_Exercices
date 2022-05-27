function spinWords(frase){
    let fraseCortada = frase.split(" ");
    let fraseFinal = "";
    let palabraFinal = "";
    
    fraseCortada.forEach(palabra => {
        if(palabra.length < 5) {
            fraseFinal += palabra + " "; 
            return;
        } else {
            let palabraCortada = palabra.split("");
            let palabraReverse = palabraCortada.reverse();
            let palabraConcatenada = palabraReverse.join();
            palabraFinal = palabraConcatenada.replace(/,/g, '');
            fraseFinal += palabraFinal + " "; 
        }
    });
    fraseFinal = fraseFinal.trim()
    return fraseFinal;
}

spinWords("Welcome");
spinWords("Hey fellow warriors");
spinWords("This is a test");
spinWords("This is another test");
spinWords("You are almost to the last test");
spinWords("Just kidding there is still one more");
spinWords("Seriously this is the last one");