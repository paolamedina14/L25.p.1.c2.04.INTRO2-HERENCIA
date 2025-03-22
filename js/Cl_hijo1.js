import Cl_padre from "./Cl_padre.js";
export default class Cl_hijo1 extends Cl_padre {
    constructor(atrib1,atribA) {
        super(atribA);
        this.atribA = atribA;
        this.atrib1 = atrib1;
    }
    setAtrib1(atrib1) {
        this.atrib1 = atrib1;
    }
    getAtrib1() {
        return this.atrib1;
    }
    metodo1() {
        returnthis.atribA * this.atrib1;
    }
}