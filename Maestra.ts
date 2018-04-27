//Variables

let edad : number = 43

let arreglo : number[] = [1,2,3,4]

let arreglo1 : string[] = ["Javascript","Typescript"]



//Funciones

function suma(n1, n2) {

    return n1+n2
}

let resultado = suma(8, 9)



function suma1(n1: number, n2: number): number{

    return n1 + n2
}

let resultado1 = suma1(5, 6)

//Todos los argumentos son obligatorios




function suma2(n1: number, n2?: number): number{

    return n1 + n2
}

let resultado2 = suma2(5)

//Tenemos argumentos opcionales. Los argumentos opcionales siempre se especifican 
//después de los obligatorios. Se especifica mediante un interrogante.




function crearUsuaurio (nombre: string, apellido:string):void{


}

//Funciones que no retornan ningun valor. 


//POO

class Persona {

    name: string;
    age: number;
    
    constructor(name: string, age: number) {

        this.name = name;
        this.age = age;
    }

    getAge() {

        return this.age;
    }

    getName() {

        return this.name;
    }

    setAge(age) {

        this.age = age;
    }

    setName (name){

        this.name = name;
    }

}

let persona = new Persona('Ludorico', 47);

console.log(persona.name);
console.log(persona.age);

persona.setName("Leovigildo");
persona.setAge(45);

console.log(persona.getName());
console.log(persona.getAge());

// Mismo código en Javascript sería de la siguiente manera:

var Persona = (function () {
    function Persona(name, age) {
        this.name = name;
        this.age = age;
    }
    Persona.prototype.getAge = function () {
        return this.age;
    };
    Persona.prototype.getName = function () {
        return this.name;
    };
    Persona.prototype.setAge = function (age) {
        this.age = age;
    };
    Persona.prototype.setName = function (name) {
        this.name = name;
    };
    return Persona;
}());
var persona = new Persona('Fedelicol', 47);
console.log(persona.name);
console.log(persona.age);
persona.setName("Escolastica");
persona.setAge(45);
console.log(persona.getName());
console.log(persona.getAge());





// TIPADO DE VARIABLES

let number1: number;
let number2: number;

number1 = 8;
number2 = 9;

let suma = function(numero1: number, numero2: number) : number { //Indicamos 
	//que tipo de dato retrona la función

    return numero1 + numero2;
}

console.log(suma(number1, number2));

let myString: string;

myString = "Hola que ase";

var deletrea = function (myString: string) {

    let i = 0;

    while (i < myString.length) {

        console.log(myString.charAt(i));
        i++;
    }
}

deletrea(myString);





//MODIFICADORES DE ACCESO


class Persona  {

    private _name: string;
    private _age: number;

    constructor(name,age) {

        this._name = name;
        this._age = age;
    }

    get name() {

        return this._name;
    }

    set name(name) {

        this._name = name;
    }
}

let persona = new Persona('Fedelicol', 47);

console.log(persona.name);

persona.name = 'Fedelicol';


Han cambiado algunas cosas. Primero hemos definido las propiedades como "private"

Ya no podemos acceder a ellas fuera de la clase.

Para acceder lo vamos a a hacer mediante getters y setters


Cambia la manera en como lo hubieramos definido.



Por otra parte cambia también la sintáxis.

persona.name como getters

persona.name = "Fedelicol"


Todavía hay una manera de ahorrar bastante código:


class Persona  {

   

    constructor(private _name:string , private _age : number) {

       
    }

    get name() {

        return this._name;
    }

    set name(name) {

        this._name = name;
    }
}

let persona = new Persona('Fedelicol', 32);

console.log(persona.name);

persona.name = 'Fedelicol';




PROPIEDADES Y MÉTODOS ESTÁTICOS

Son los métodos que se ejecutan directamente de la clase.

Los métodos estáticos se llaman desde la clase a diferencia de los otros que se 
llaman desde el objeto.

Un ejemplo sería este:

Hacemos un metodo estático que devuelve el núsmero de personas que hemos creado

class Persona {

    constructor(private _name: string, private _age: number) {

        Persona.numeroPersonas++;
    }

    static numeroPersonas: number = 0;

    get name () {

        return this._name;
    }

    set name(name) {

        this._name = name; 
    }

    static personasExistentes() {

        return Persona.numeroPersonas;
    }

}

var persona = new Persona('Fedelicol', 47);

console.log(persona.name);

persona.name = "Fedelicol";

var persona1 = new Persona('Leovigildo', 44);

console.log(Persona.personasExistentes());



Vemos como el msétodo estático se llama directamente desde la clase 





//HERENCIA

//Ejemplo muy sencillo de herencia

class Vehiculo {

    numeroRuedas: number

    constructor(numeroRuedas: number) {

        this.numeroRuedas = numeroRuedas
    }

    start() {

        console.log("Vehiculo arrancando")
    }
}

class Avion extends Vehiculo {


}

let avion = new Avion(16)

console.log(avion.start())


//Sobreescritura de Métodos

//Puede ser utilizado para extender las funcionalidades de la clase padre


/*El constructor también puede ser sobreescrito. Si lo sobreescribimos iempre habrá 
que llamar al constructor del padre*/

class Vehiculo {

    numeroRuedas: number

    constructor(numeroRuedas: number) {

        this.numeroRuedas = numeroRuedas
    }

    start() {

        console.log("Vehiculo arrancando")
    }
}

class Avion extends Vehiculo {

    numeroPasajeros : number

    constructor(numeroRuedas: number, numeroPasajeros:number){

        super(numeroRuedas)

        this.numeroPasajeros = numeroPasajeros
    }

    start() {

        super.start()
        console.log("Avion Despegando")
    }
}

let avion = new Avion(16,32)

console.log(avion.start())



//Modificadores de acceso

/*Hasta ahora implicitamente el modificador de acceso que estabamos utilizando 
era public

Esto quiere decir básicamente que podemos acceder a las propiedades desde las 
clases heredadas o incluso desde fuera de la clase 

Con protected podemos acceder desde las clases heredadas pero no fuera de la clase 

Con private solo se puede acceder a ese atributo desde la clase pero no desde las 
clases heredadas ni por supuesto fuera de la clase*/


/*En programación modular, y más específicamente en programación orientada a objetos,
se denomina ENCAPSULAMIENTO al ocultamiento del estado, es decir, de los datos 
miembro de un objeto de manera que solo se pueda cambiar mediante las operaciones 
definidas para ese objeto.

Cada objeto está aislado del exterior, es un módulo natural, y la aplicación 
entera se reduce a un agregado o rompecabezas de objetos. El aislamiento protege 
a los datos asociados de un objeto contra su modificación por quien no tenga 
derecho a acceder a ellos, eliminando efectos secundarios e interacciones.

De esta forma el usuario de la clase puede obviar la implementación de los 
métodos y propiedades para concentrarse solo en cómo usarlos. Por otro lado se 
evita que el usuario pueda cambiar su estado de maneras imprevistas e incontroladas.*/


class Vehiculo {

    protected numeroRuedas: number

    constructor(numeroRuedas: number) {

        this.numeroRuedas = numeroRuedas
    }

    start() {

        console.log("Vehiculo arrancando")
    }
}

class Avion extends Vehiculo {

    start() {

        console.log(this.numeroRuedas)
    }
}

let avion = new Avion(16)

console.log(avion.start())

console.log(avion.numeroRuedas) //Error La propiedad es protected solo accesible
//desde la clase "Vehículo" y las subclases


class Vehiculo {

    private numeroRuedas: number

    constructor(numeroRuedas: number) {

        this.numeroRuedas = numeroRuedas
    }

    start() {

        console.log("Vehiculo arrancando")
    }
}

class Avion extends Vehiculo {

    start() {

        console.log(this.numeroRuedas)// Error Solo accesible desde la clase 
        //"Vehiculo"
    }
}

let avion = new Avion(16)

console.log(avion.start())

console.log(avion.numeroRuedas) //Error La propiedad es private solo accesible
//desde la clase "Vehículo" 




//Métodos Accesores

class User{

    private _name: string
    private _email: string

    constructor(name:string,email:string) {

        this._name = name
        this._email = email
    }

    get name(): string{ return this._name }

    set name(name:string) {this._name = name}

}

let user = new User("Evaristo", 'evaristo@gmail.com')

console.log(user.name)

user.name = "Escolastico"

console.log(user.name)

//Parece que estemos accediendo directamente a los atributos de la clase
//Estamos usando los métodos accesores que encapsulan la funcionalidad interna









class Persona {

    constructor(private _name: string, private _age: number) {

        Persona.numeroPersonas++;
    }

    private ganancias: number = 20000;

    private _impuestos: number = 30;

    static numeroPersonas: number = 0;

    get name () {

        return this._name;
    }

    set name(name) {

        this._name = name; 
    }

    static personasExistentes() {

        return Persona.numeroPersonas;
    }

    impuestos() {

        return this.ganancias * 0.1;
    }

}

class Trabajador extends Persona {

    constructor(_name:string,_age:number,private _numeroTrabajos:number ) {

        super(_name,_age);
        
        
    }

    private gananciasTrabajador :number = 60000

    impuestos() {

        return this.gananciasTrabajador * 0.3;
    }

    get numeroTrabajos() {

        return this._numeroTrabajos;
   } 
}

var persona = new Persona('Fedelicol', 47);

var persona1 = new Persona('Leovigildo', 44);

var trabajador = new Trabajador('Estratunio', 45,2);

console.log(persona.impuestos());

console.log(trabajador.impuestos());

console.log(trabajador.name);




console.log(Persona.personasExistentes());


Lo primero que podemos observar es la manera de extender la clase que se hace 
mediante el keyword extends

Creamos un nuevo método en la clase Persona "impuestos"

Vemos como en una clase heredada se puede realizar la sobreescritura de un método.


Por otra parte hay que tener en cuenta que en la clase que hereda podemos definir un

nuevo constructor de esta manera.

	constructor(_name:string,_age:number,private _numeroTrabajos:number ) {

        super(_name,_age);
        
        
    }





INTERFACES


interface Iperro{

    readonly name: string,
    raza: string
}


class Persona {

    constructor(private _name: string, private _age: number) {

        Persona.numeroPersonas++;
    }

    private ganancias: number = 20000;

    private _impuestos: number = 30;

    static numeroPersonas: number = 0;

    get name () {

        return this._name;
    }

    set name(name) {

        this._name = name; 
    }

    static personasExistentes() {

        return Persona.numeroPersonas;
    }

    impuestos() {

        return this.ganancias * 0.1;
    }

}

class Trabajador extends Persona {

    constructor( _name: string, _age: number, private numeroEmpleos:number) {

        super(_name,_age)
    }

    private gananciasTrabajador: number = 60000;

    impuestos() {

        return this.gananciasTrabajador * 0.2;
    }

    agregarPerro(perro:Iperro) {

        console.log(perro);
    }
    
}



var persona = new Persona('fedelicol', 47);

var persona1 = new Persona('Leovigildo', 44);

var trabajador = new Trabajador('Estratonio', 45,2);

let Toby : Iperro = { name: "Toby", raza: "San Bernardo" }

trabajador.agregarPerro(Toby);

Toby.name = "Toby2"

console.log(Toby); //Provoca un error. Hemos definido readonly


console.log(Persona.personasExistentes());




Definimos nuestra interfaz:


interface Iperro{

    readonly name: string,
    raza: string
}

Definimos name de tipo readonly luego veremos su aplicación.

Dentro de la clase trabajador agregamos un nuevo método

	agregarPerro(perro:Iperro) {

        console.log(perro);
    }


Abajo definimos lo siguiente:

let Toby : Iperro = { name: "Toby", raza: "San Bernardo" }

trabajador.agregarPerro(Toby);


Si intentamos cambiar el nombre que lo hemos definido readonly nos dará un error






