import Reservacion from "./Reservacion.js"
export default class Hotel{
    /**
     * 
     * @param {string} nombre 
     */
    constructor(nombre){
        this.nombre = nombre;
        this.reservaciones = new Array;
    }
    getNumHuespedes(){
        var HuespedesTotal=0;
        this.reservaciones.forEach(reservacion=>{
            HuespedesTotal = reservacion.huespedes.length + HuespedesTotal;  
        });
        return HuespedesTotal;
    }
    print(){
        this.reservaciones.forEach(reservacion=>{
            reservacion.print();
        })
    }
}