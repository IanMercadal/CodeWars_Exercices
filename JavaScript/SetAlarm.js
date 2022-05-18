/*
    Ejercicio que consiste en retornar true en caso de que esté trabando y no de vacaciones,
    ya que no es posible trabajar y estar de vacaciones de forma simultánea, o no trabajar(contratado) y estar de vacaciones.
*/
function setAlarm(employed, vacation){
    if(employed && !vacation) {
        console.log("Está trabajando y no vacation")
        return true;
    }
    else {
        console.log("Nada de nada")
        return false;
    }
}

setAlarm(true, true);
setAlarm(false,true);
setAlarm(true, false);