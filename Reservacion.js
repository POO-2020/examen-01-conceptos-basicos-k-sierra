import Huesped from "./Huesped.js"
export default class Reservacion{
    /**
     * 
     * @param {number} numeroHabitacion 
     * @param {Date} fechaLlegada 
     * @param {number} noches 
     */
    constructor(numeroHabitacion, fechaLlegada, noches){
        this.numeroHabitacion = numeroHabitacion;
        this.fechaLlegada = new Date;
        this.noches = noches;
        this.huespedes = new Array();
    }
    getFechaFormatoCorto(){
        return (`${this.fechaLlegada.getDate()}/${this.fechaLlegada.getMonth()}/${this.fechaLlegada.getFullYear()}`);
    }
    addHuesped(huesped){
        this.huespedes.push(huesped);
    }
    getNumHuespedes(){
        return (this.huespedes.length);
    }
    print(){
        return (`Habitacion ${this.numeroHabitacion}\n Fecha de llegada ${this.fechaLlegada.getFechaFormatoCorto()}\n Noches reservadas ${this.noches}`);
    }
}