import Cl_padre from "./Cl_padre.js";
export default class Cl_hijo2 extends Cl_padre {
    constructor(atribA,atrib2) {
        super(atribA);
        this.atribA = atribA;
        this.atrib2 = atrib2;
    }
    setAtrib2(atrib2) {
        this.atrib2 = atrib2;
    }
    getAtrib2() {
        return this.atrib2;
    }
    metodo2() {
        return this.atribA + this.atrib2;
    }
}