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