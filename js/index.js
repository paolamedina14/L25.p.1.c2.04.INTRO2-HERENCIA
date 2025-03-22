/**
 * INTRO2-HERENCIA 
 * Tomando la Cl_padre del ejercicio anterior, crea la clase Cl_hijo1, que herede de Cl_padre, 
 * con el atributo atrib1, y la clase Cl_hijo2, que herede de Cl_padre, con el atributo atrib2. 
 * Cl_hijo1 tiene el método calculo() que multiplica atribA con atrib1; Cl_hijo2 tiene el método 
 * calculo() que suma atribA con atrib2. 
 */

import Cl_hijo1 from "./Cl_hijo1.js";
import Cl_hijo2 from "./Cl_hijo2.js";


const padre = new Cl_padre();
const hijo1 = new Cl_hijo1();
const hijo2 = new Cl_hijo2();

padre.procesarhijo1(atrib1);
padre.procesarhijo2(atrib2);

alert(`metodo 1 : ${hijo1.metodo1()}`);
alert(`metodo 2 : ${hijo2.metodo2()}`);




    