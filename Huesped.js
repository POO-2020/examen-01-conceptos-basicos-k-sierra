export default class Huesped{
    /**
     * 
     * @param {string} nombre 
     * @param {string} genero 
     */
    constructor(nombre,genero){
        this.nombre = nombre;
        this.genero = genero;
    }
    getDescripcion(){
        return(`${this.nombre} (${this.genero})`);
    }
}
/*let h1 = new Huesped("Karla Sierra", "Femenino");
console.log(h1.getDescripcion());*/