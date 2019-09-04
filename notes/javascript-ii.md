# JavaScript Sprachkonzepte II
- Best practice: Immer `"use strict";` verwenden!

## Functions
```JavaScript
let newMessage = 'test'; // globale Variable

function printSth() { // function declaration
    let myMessage = 'hello'; // lokale Variable
    console.log(myMessage);
    console.log(newMessage);
};

printSth();
console.log(myMessage); // error, da lokale Variable
console.log(newMessage); // Kein Fehler, da globale Variable
```

Eine Funktion kann auf eine Variable ausserhalb der Funktion
zugreifen.
- Die äussere Variable (= globale Variable) kann verwendet werden,
wenn es keine Variable innerhalb des Blocks gibt. 

### (default) Parameter
```JavaScript
function printSth(message, sender='Patrick') {
    console.log(`${message} ${sender}`);
};

printSth('hallo');
printSth('hallo', 'Andreas'); 
```

### Function Expressions
```JavaScript
let myConsolePrint = function printSth(message) {
    console.log(message);
};

console.log(myConsolePrint("this is a message"));
```

Diese Art von Deklaration myConsolePrint nennt man `function expression`.

### Callback Functions
```JavaScript
function ask(question, yes, no) {
    if (confirm(question)) 
        yes(); 
    else 
        no();
}

function showOk() {
    alert( 'Ok');
}

function showCancel() {
    alert( 'Abbrechen');
}

ask('Jetzt starten?', showOk, showCancel);
```

### Arrow Functions
```JavaScript
let sum = (a, b) => a + b;

// let sum = function(a, b) {
//     return a + b;
//}
console.log(sum(1,2));
```

## Zusammenfassung
Functions sind Werte. Sie können überall im Code zugeweisen, kopiert oder deklariert werden.

Es gibt drei verschiedene Arten functions zu schreiben:
- `Function Declaration` (separates Statement) kann vor der Deklaration im Code angesprochen werden.
- `Function Expression` & `Arrow Functions` wird erstellt wenn, wenn die Ausführung die Expression erreicht.

**Best Practices:** Verwende (sofern möglich) `Function Declarations`; gibt mehr Freiheiten um den Code zu organisieren; diese Functions können
bereits vor der Deklaration verwendet werden.

## Error Handling mit try…catch
```JavaScript
try {
// code
} catch(error) {
// error handling
}
```

- `try…catch` funktioniert lediglich für Laufzeitfehler (z.B. funktioniert nicht für Syntaxfehler)
- `try..catch` funktioniert nur in einem synchronen Kontext (z.B. funktioniert das `try..catch` um ein `setTimeout()` nicht)

### das Error Objekt
```JavaScript
try {
// code
} catch(error) {
// error handling
}
```

Das `Error` Objekt besteht aus folgenden zwei Properties:
- `name`: Name / Typ des Fehlers
- `message`: Textuelle Beschreibung des Fehlers

### eigene Fehler werfen
```JavaScript
try {
// code
throw new Error(‘Das ist ist ein Fehler’);
} catch(error) {
// error handling
}
```

Es gibt verschiedene Konstruktoren für standard Fehler:
- `Error`
- `SyntaxError`
- `ReferenceError`
- `TypeError`
- Weitere & Verwendung: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

### finally
```JavaScript
try {
// code
} catch(error) {
// error handling
} finally {
// execute always
}
```

Der `finally`-Block wird immer ausgeführt.

### Error Handling – Zusammenfassung
Der try…catch…finally Mechnismus erlaubt es Laufzeitfehler zu
behandeln.
- Folgende Properties gibt es im Fehlerfall typischwreise
    - message
    - name
    - (stack à nicht standard)
- In einem Catch-Block muss nicht unbedingt das Fehlerobjekt verwendet warden (-> catch ohne Error Objekt)

## Intro OOP

### «this» – Verwendung in Objekten
```JavaScript
let car = {
    name: 'my car',
    age: 10,
    start() {
        console.log(`start ${this.name}`);
    }
}
```

Um den Zugriff auf das Objekt zu erhalten, kann man das `this` Keyword
verwenden.
Im Gegensatz zu anderen Programmiersprachen ist das `this` Keyword
nicht gebunden, d.h. this wird während der Laufzeit auf Basis des
entsprechenden Kontext aufgebaut. Es kann alles sein.

```JavaScript
let car1 = {name: 'car1'};
let car2 = {name: 'car2'};

function start() {
    console.log(`start ${this.name}`);
}

car1.start = start;
car2.start = start;

car1.start(); // Output: start car1
car2.start(); // Output: start car2
```

### «new» & constructor functions
```JavaScript
function Student(name) {
    // this = {}; -> implizit
    this.name = name;
    // return this; -> implizit
}

let student = new Student('Patrick');
console.log(student.name);
```

1. Es wird ein neues leeres Objekt erstellt und zu `this` zugewisen.
2. Der function Body wird ausgeführt. Modifiziert `this` indem das
entsprechende Property angehängt wird.
3. Der Wert von `this` wird zurückgegeben.

### Zusammenfassung I
Der Wert von `this` wird **zur Laufzeit definiert**.
- Wenn eine function deklariert wird und das `this` Keyword verwendet,
hat `this` **solange keinen Wert bis die entsprechende function aufgerufen wird**.
- **Arrow functions haben kein `this`**. Wenn `this` innerhalb einer Arrow Function aufgerufen wird, wird das `this` von aussen verwendet.

```JavaScript
let startAsArrow = () => console.log(`start ${this.name}`);
car1.start = startAsArrow;
car1.start(); // Output start undefined
```

### Zusammenfassung II
- Constructor functions sind “normale” functions (typischerweise
grossgeschrieben)
- Constructor functions sollte nur mit dem new Operator geschrieben
werden. Dies impliziert die Erstellung eines leeren `this` und der
Rückgabewert `this`.

## Übungsaufgabe I - Erstelle einen Calculator
- Erstelle ein Calculator mit folgenden drei Methoden:
    - read() -> einlesen von 2 Werten und speichere diese als Objekt Properties
    - sum() -> Summierung 2 gespeicherten Werte
    - mul() -> multipliziere 2 gespeicherten Werte
- Erweitere den Rechner so, dass nicht nur 2 Werte eingelesen werden können sowie er mit ungültigen Werten umgehen kann.
- Branch: calculator

```JavaScript
let calculator = {
// ... your code ...
};
calculator.read(1, 2);
console.log( calculator.sum() );
console.log( calculator.mul() );
```

## Übungsaufgabe II - «Chaining»
- Modifiziere den Leiter Code, dass er ”chainable” ist.
- Branch: Ladder

```JavaScript
ladder.up().up().up().down().currentStep(); // 2
```

## Zusatz: Übungsaufgabe
Schreibe eine Funktion min(a,b) 
- Branch: min

```JavaScript
min(2, 5) === 2
min(3, -1) === -1
min(1, 1) === 1
```

Schreibe eine Funktion pow(x, n)
- Branch: pow (ohne Math.pow()!)

```JavaScript
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
```


## Closure & Lexical Scope - Intro

### Lexical Scope
In JavaScript hat jede lauffähige `function` resp. Code-Block `{}` einen
**lexikalen Scope**.  
Der Scope besteht aus zwei Aspekten:
- Environment Record, ein Objekt, welche alle lokalen Variabeln und seine Properties speichert.
- Eine Referenz auf den äusseren lexikalen Scope.
D.h. eine Variable ist lediglich ein Property von diesem Environment Record.

```JavaScript
//                      LexicalEnvironment
//execution start       <empty>  --outer-->  null

let phrase;             // phrase: undefined

phrase = "Hello";       // phrase: "Hello"

phrase = "Bye";         // phrase: "Bye"
```

Function Declarations werden sobald der Lexical Scope erstellt wird, entsprechend innerhalb des Scopes erstellt (nicht wie die let Variabeln).

```JavaScript
//                      LexicalEnvironment
//execution start       <empty>, say:function  --outer-->  null

let phrase = "Hello";   // phrase: "Hello", say: function

function say(name) {                
    alert( `${phrase}, ${name}`);
}
```

- Zwei lexical scopes: Der Innere (function call) und der äussere (global)
- Sobald der Code den Zugriff auf eine Variable sucht, prüft er den inneren lexikalen Scope zuerst und erst dann den Äusseren (bis zum Globalen).

```JavaScript
//                      LexicalEnvironment
//execution start       <empty>, say:function  --outer-->  null

let phrase = "Hello";   // phrase: "Hello", say: function

function say(name) {                
    alert( `${phrase}, ${name}`);   // name: "John" --outer--> // say:function, phrase: "Hello" --outer--> null
}

say("John"); // Hello, John
```

### Closure
Eine Closure ist eine function, welche sich an äussere Variabeln erinnert und auf diese entsprechend zugreifen kann.
- Deshalb können in JavaScript alle Functions Closures sein.
- Exemplarische Closure als “self-invoking function”:

```JavaScript
let add = (function () {
    let counter = 0;
    return function () {counter += 1; return counter}
})();

add();
add();
add();
```

- Mit diesem Beispiel kann die Counter Variable private gemacht werden.

### Zusammenfassung
- Zwei Arten von lexical scopes: Die Inneren (function call) und der Äussere (global). Der innere Scope zeigt auf einen Äusseren.
- Sobald der Code den Zugriff auf eine Variable sucht, prüft er den inneren lexikalen Scope zuerst und erst dann der Äussere (bis zum Globalen).
- Pro ausgeführte Funktion wird ein lexikaler Scope erstellt. 
- Der lexikale Scope ist ein Spezifikationsobjekt und kann nicht direkt manipuliert werden. JavaScript Engines optimieren diese (entfernen von nicht benutzten Variabeln, um Memory zu optimieren, etc.)

## Prototype Inheritance
- Bei der Programmierung wollen wir oft bestimmte Dinge erweitern und wiederverwenden.
- Prototypische Vererbung ist ein JavaScript Language Feature, welches uns dies ermöglicht.

```JavaScript
let vehicle = {
    hasEngine: true
};

let car = {
    hasFourWheels: true
};

car = Object.setPrototypeOf(car, vehicle);
console.log(car.hasEngine); //Output: true
console.dir(car);
```

- Wenn wir ein Property von einem Objekt lesen möchten und dieses nicht vorhanden ist, wird es vom Prototype Objekt gelesen. 
Dieses Pattern nennt man **“prototypal inheritance”**.
- Das Property [[Prototype]] ist intern, aber kann via `Object.get|setPrototypeOf / __proto__` gesetzt werden. [siehe](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)
- `this` wird in jedem Fall vom Objekt verwendet und nicht vom
Prototype.

## Übungsaufgabe I
```JavaScript
let user = {
    doSth() {
        if (!this.isPausing) {
            console.log('I am doing sth.');
        }
    },
    
    pause() {
        this.isPausing = true;
    }
};

let admin = {
    name: 'Admin User',
    __proto__: user
};

admin.pause();
console.log(admin.isPausing); // true -> Auf admin object wurde pause() aufgerufen und die pause() function wird von user vererbt. 
console.log(user.isPausing); // undefined -> Auf dem user object wurde pause() nicht aufgerufen, daher ist this.isPausing nicht definiert.
```

## Übungsaufgabe II
```JavaScript
let hamster = {
    stomach: [],
    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = { __proto__: hamster };
let lazy = { __proto__: hamster };

speedy.eat('apple');
console.log( speedy.stomach ); // apple
// Lazy hat ebenfalls einen Apfel im Magen – wieso? Fixe es.
// Branch: hamster
console.log( lazy.stomach ); // apple
```

## Zusatz: Übungsaufgabe
Zeichne den Umgang mit den lexikalen Scopes vom folgenden Code auf:
```JavaScript
function makeCounter() {
    let count = 0;
    return function() {
        return count++;
    }
}

let counter = makeCounter();
alert(counter());
alert(counter());
```


## Promises
### Problem 
- Viele Aktionen in JavaScript sind asynchron.
- Für die Behandlung können Callback-Funktionen verwendet werden.

```JavaScript
loadScript('myScript1.js', function(error, script) {
    loadScript('myScript2.js', function(error, script) {
        loadScript('myScript3.js', function(err, sc){
            //do sth.
        }
    }
}
```

### Intro
- Typischerweise haben wir einen Code der Inhalte produziert und Code, der Inhalte konsumiert.
- Das Promise Konstrukt bringt die beiden Aspekte zusammen.
- Der produzierende Code braucht für die Produktion entsprechend Zeit und die Promise stellt den Output entsprechend dem konsumierenden Code zur Verfügung.

[Promise](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)

### Syntax
```JavaScript
let promise = new Promise(function(resolve, reject) {
    // der produzierende Code, der sobald ausgeführt
    // wird, wenn die Promise erstellt wird.
    // z.B.
    // setTimeout(() => resolve(‘its done.’), 1000);
    // setTimeout(() => reject(new Error(‘ooops…’)), 2000);
});
```

Was ist der Output vom folgenden Code?
```JavaScript
let myPromise = new Promise(function(resolve, reject) {
    resolve(1);
    setTimeout(() => resolve(2), 1000);
});

myPromise.then(console.log); // 1 -> then() hört auf das erste Resolve
myPromise.then(console.log); // loggt nichts, da then() nur einmal auf einem Promise aufgerufen werden kann.
```

### Chaining 
```JavaScript
new Promise(function(resolve, reject) {
    // producer
    setTimeout(() => resolve(1), 1000);
}).then(function(result) {
    // then 1
    console.log(result);
    return ++result;
}).then(function(result) {
    // then 2
    console.log(result);
});
```

### Chaining – Was passiert hier?
```JavaScript
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
});
promise.then(function(result) {
    console.log(result);
    return ++result;
});
promise.then(function(result) {
    console.log(result);
    return ++result;
});
```

## Classes
In JavaScript ab ES6 gibt es das ‘class’ Konstrukt, das nützlich für die objektorientierte Programmierung ist.

```JavaScript
class MyClass {
    constructor() {}
    method1() {}
    method2() {}
}

let myObj = new MyClass(); // Neues Objekt
```

### Beispiel
```JavaScript
class Person {

    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`hello ${this.name}`);
    }
}

console.log(new Person('Patrick').sayHello()); // "hello Patrick"
```

In JavaScript eine Klasse ist eine spezielle Art einer function.

```JavaScript
class Person {

    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`hello ${this.name}`);
    }
}

console.log(typeof(Person)); // Person : { name : 'Patrick' }, __proto__: Object
console.dir(Person); // class Person
```

### Was ist eine Klasse?
Das class Konstrukt macht die folgenden Dinge:
1. Erstellt eine function namens Person
2. Speichert die Methode sayHello im Person.prototype

```JavaScript
console.log(typeof Person);
console.log(Person === Person.prototype.constructor);
console.log(Person.prototype.sayHello);
console.log(Object.getOwnPropertyNames(Person.prototype));
console.log(Object.getPrototypeOf(new Person()));
```

### getters & setters
```JavaScript
class Person {
    
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}
```

### Vererbung
```JavaScript
class Person {
    
    constructor(name) {this.name = name;}

    sayHello() {
        console.log(`hello ${this.name}`);
    }
}

class Admin extends Person {
    doAdminTasks () {
        console.log(`${this.name} doing admin tasks`);
    }
    sayHello() {
        super.sayHello();
        console.log('hello from admin');
    }
}

let myAdmin = new Admin('Patrick');
myAdmin.doAdminTasks();
```

## Übungsaufgabe I - Promises
Erstelle eine Promise auf Basis des folgenden Codes
- Branch: promise
```JavaScript
delay(2000, 'hallo').then(console.log);
```

## Übungsaufgabe II - Classes
Schreibe die Person Klasse einem mit puren functions und einmal mit dem class Konstrukt.
- Branch: classes

```JavaScript
let person = new Person('Patrick');
person.sayHello();
```

## Zusatz: Übungsaufgabe
- Schreibe eine Uhr die tickt (nach OOP-Prinzipien).
```JavaScript
let clock = new Clock('h:m:s');
clock.start();
```

- Schreibe eine erweiterte Clock, bei welcher die Präzision (Anzahl ms)
mitgegeben werden kann.
```JavaScript
let extendedClock = new ExtendedClock('h:m:s', 2000);
extendedClock.start();
```

## Zusatz: JavaScript Interview Questions
1. Erkläre die Diffferenz zwischen == und ===?
2. Welche zwei grundlegenden Arten von Datentypen gibt es in JavaScript?
3. Für was wird der typeof Operator verwende?
4. Für was ist der ‘strict’ mode in JavaScript und wie kann er aktiviert werden?
5. Was ist eine Closure in JavaScript?
6. Was ist der Unterschied zwischen .call() und .apply()?
7. Erkläre prototypische Vererbung.