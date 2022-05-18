function even_or_odd(number) {
    if(number % 2 === 0 && number !== "") {
        return "Even";
    }
    else if(number == "") {
        return "";
    }
    else {
        return "Odd";
    }
}
/*
Respuesta más sencilla:

function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
}
*/

even_or_odd(123);
even_or_odd(42);
even_or_odd(-42);
even_or_odd(1);
even_or_odd(0);
even_or_odd('');