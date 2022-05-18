/*
    Ejercicio que consiste en retornar los múltiplos de 3 y 5 a partir del número máximo
    que se pasa por parámetro. En caso de que sea múltiplo de ámbos, solo se debe contar una vez.
    De otro modo, si el número por parámetro es negativo, debe convertirse en 0.
*/
function solution(number){
    let multiplos3 = [];
    let multiplos5 = [];
    let multiplos3y5 = [];
    let i = 0;

    while (i < number) {

        if(number <= 0) {
            number = 0;
            return;
        }

        if(i % 3 === 0 && i % 5 === 0) {
            multiplos3y5.push(i)
        } else {
            if(i % 3 === 0) {
                multiplos3.push(i)
            } 
            if(i % 5 === 0) {
                multiplos5.push(i)
            }
        }
        i = i + 1;
    }

    multiplos3y5 = multiplos3y5.reduce((sumaParcial, a) => sumaParcial + a,0);
    multiplos3 = multiplos3.reduce((sumaParcial, a) => sumaParcial + a,0);
    multiplos5 = multiplos5.reduce((sumaParcial, a) => sumaParcial + a,0);
    
    sumaTotal = multiplos3y5 + multiplos3 + multiplos5;
    return sumaTotal;
}

solution(10)
solution(23)