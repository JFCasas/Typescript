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



//Métodos y atributos estáticos

class Vehiculo{

    static material: string = "acero"

    private tipoAcero : string

    fabricaTipo(tipoAcero: string) {

        this.tipoAcero = tipoAcero

        console.log(`Construido vehiculo ${Vehiculo.material} de tipo ${this.tipoAcero}`)
    }
    
}

let vehiculo = new Vehiculo()

let vehiculo1 = new Vehiculo()

vehiculo.fabricaTipo("rapido")

vehiculo.fabricaTipo("polimetalurgico")


/*
En este ejemplo nuestro vehiculos están construidos de aceros de diferentes tipos pero 
siempre de acero

Por lo tanto el "material" siempre va a ser el mismo para todos los objetos. 

Es una información compartida por todos los objetos

Sino utilizamos un atributo esstático, cada vez que creamos un objeto se creará una 
variable repetida para todas las instancias que ocupará espacio innececesario en memoria


Una manera eficiente de trabajar es hacerlas estáticas. Se les llama también atributos 
de clase porque pertenecen más bien a la clase que al objeto


Para acceder a la variable tal como se ve en el ejemplo se accede a ella mediante el 
nombre de la clase en vez de "this"*/


//También existen los métodos estáticos

class Vehiculo{

    static material: string = "acero"

    static _numeroVehiculosConstruidos : number = 0

    private tipoAcero: string

    constructor() {

        Vehiculo._numeroVehiculosConstruidos++
    }

    fabricaTipo(tipoAcero: string) {

        this.tipoAcero = tipoAcero

        console.log(`Construido vehiculo ${Vehiculo.material} de tipo ${this.tipoAcero}`)
    }

    static numeroVehiculosConstruidos() {

        return Vehiculo._numeroVehiculosConstruidos
    }
    
}

let vehiculo = new Vehiculo()

let vehiculo1 = new Vehiculo()

vehiculo.fabricaTipo("rapido")

vehiculo.fabricaTipo("polimetalurgico")

console.log(Vehiculo.numeroVehiculosConstruidos())


//Otro ejemplo:

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



//Interfaces


/*La interfaz provoca que sea necesario declarar todas las propiedades e 
implementar todos los métodos a la hora de definir la clase. En resumen, 
es como un contrato.

Pero además, TypeScript nos ofrece una aplicación adicional de las interfaces: 
la creación de un nuevo tipo que podemos usar a lo largo de nuestro código.

La interfaz se convierte en un nuevo tipo de dato.*/


interface ObjetoJuego {

    x: number
    y: number
    height: number
    width: number
    
}

class Hero implements ObjetoJuego {

    x: number 
    y: number
    height: number
    width: number
    

}

class Bullet implements ObjetoJuego {

    x: number 
    y: number
    height: number
    width: number
    
}

class Vilian implements ObjetoJuego {

    x: number 
    y: number
    height: number
    width: number
    
}



class Collision {

    check(obj1: ObjetoJuego, obj2: ObjetoJuego) {

        //Logica que checkea si ha habido una colisión

        console.log("Ha habido una colision")
    }
    
}

let hero : ObjetoJuego  = new Hero()
let bullet : ObjetoJuego = new Bullet()
let collision = new Collision()

collision.check(hero, bullet)


//Otro ejemplo en el que vemos claramente que la interfaz se ha convertido en un nuevo
//tipo de dato

interface Iperro{

    name: string
    raza:string
}

class Persona{

    nombre: string
    perro:Iperro
}

let perro: Iperro = { name: "Toby", raza: "San Bernardo" }

let persona = new Persona()

persona.perro = perro

console.log(persona.perro)


/*Salida es la siguiente:


Object
    name:"Toby"
    raza:"San Bernardo"
    __proto__*/






//Clases Abstractas


//Namespaces


//Tipos avanzados de datos


//Union types

/*Solventamos el problema de que en determinadas ocasiones una variable pueda contener 
diferentes tipos de datos según nuestra conveniencia

Esto puede ser útil en funciones en cuyos argumentos a veces queramos recibir un tipo 
de dato u otro*/

let age: number | string | boolean

age = "Hola que ase"

age = 43

age = true

console.log(age)



//Type Guards

function printAge(age: number | string) {

    if (typeof age === 'number') {

        console.log("Es un numero")
    } else {

        console.log("Es una cadena")
    }
}


printAge(8)

printAge("2")





//Decoradores

/*Extender la funcionalidad de un componente sin modificarlo permanentemente
En esencia vienen a ser una serie de metadatos adicionales que se pueden 
añadir a clases, métodos, propiedades y parámetros para modificar su comportamiento.*/


//Decoradores de Clase

/*En las clases los decorators solo reciben un parámetro, la clase sobre la que están 
actuando, que tiparemos comoFunction o any.

Un decorador de clase va a ser una función que recibe un solo parámetro. La clase que 
está decorando*/


function Decorador(target: Function) {

    console.log("Decorador se está ejecutando")

    target.prototype.className = target.name
    
    Object.defineProperty(target.prototype, 'course', {value: () => "Angular 2"})

}




@Decorador
class Persona{

    name: string
    age: number

    constructor(name, age) {

        this.name = name
        this.age = age
    }
    
}

let persona = new Persona("Federico",43)

console.log(persona.course())

console.log(persona.className)




/*Añadimos una propiedad className que es el nombre de la clase. 

Añadimos dinámicamente una función a nuestra clase Persona por medio de la función
Object.defineProperty function,*/





//Decoradores de Propiedades

/*Esta vez se van a recibir dos parámetros en la función

El segundo argumento siempre es una propiedad y es una cadena

El primer argumento pasa  a ser el prototipo de la clase*/ 



function Decorador(target: any,propertyName:string) {

    console.log("Decorador se está ejecutando")
    console.log(`Decorador se está aplicando en propiedad ${propertyName}`)

    

}

class Persona{
    @Decorador
    name: string

    age: number

    constructor(name, age) {

        this.name = name
        this.age = age
    }
    
}



//Decoradores para métodos

/*Reciben tres argumentos:

Primer argumento es el prototipo de la clase, segundo argumento es el nombre del 
método y el tercer argumento es el PropertyDescriptor

Tomemos el siguiente ejemplo para intentar explicar PropertyDescriptor*/

//https://www.javascripture.com/PropertyDescriptor

var x = { foo: 1 };
Object.defineProperty(x, 'bar', { value: 2, 
                                  writable: true,
                                  enumerable: false,
                                  configurable: true } );

// 'foo' is enumerable. 'bar' in not enumerable
for (var propertyName in x) {
  console.log(propertyName + ' is ' + x[propertyName]);
}

//foo is 1

//Mismo código pero en este caso enumerable true

var x = { foo: 1 };
Object.defineProperty(x, 'bar', { value: 2, 
                                  writable: true,
                                  enumerable: true,
                                  configurable: true } );

// 'foo' is enumerable. 'bar' in not enumerable
for (var propertyName in x) {
  console.log(propertyName + ' is ' + x[propertyName]);
}

//foo is 1
//bar is 1


/*Vamos a usar un decorador para lanzar un mensaje cada vez que el método se manda a 
llamar


Básicamente lo que vamos a hacer es lo siguiente:


Obtenemos la función. Creamos la nueva función. Reemplazamos el método en la clase*/ 


function AuditDecorador(target: any,methodName:string, descriptor?:any ) {

    console.log("Decorador se está ejecutando")

    let originalFunction = target[methodName] //Obtenemos el método
    let decoratedFunction = function () {

        originalFunction() //Ejecutamos la función origimal
        console.log(`El metodo ${methodName} ha sido ejecutado`)
    }

    //Reemplazamos el método

    descriptor.value = decoratedFunction

    return descriptor

}

class Auditable{
    
    @AuditDecorador unMetodo() {

        console.log("Soy un método a auditar")
    }
}

let auditable = new Auditable()

auditable.unMetodo()


/*Salida en consola 

Decorador se está ejecutando
Soy un método a auditar
El metodo unMetodo ha sido ejecutado*/


//Entorno de trabajo

//https://www.typescriptlang.org/docs/handbook/compiler-options.html

/*Configuramos como queremos que se compilen nuestros archivos de Typescript

tsconfig.json



Colocamos todos nuestro archivos en una carpeta src 



removeComments: Cualquier comentario es eliminado cuando pasamos a Javscript

outDir: Directorio de salida

noImplicitAny: Evita el declarar variables sin tipo

sourceMap: Sirve para que navegador nos de mensajes de error más explícitos

watch: El compilador se ejecuta pendiente de cualquier cambio y recompila

rootDir: Se conserva la misma estructura de directorios en dist y src

experimentalDecorators: Permite que existan decoradores en nuestra aplicación


Compilación:

Instalamos de manera global

npm install tsc -g 


#tsc*/
