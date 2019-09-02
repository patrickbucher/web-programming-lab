# Übungsfragen JavaScript I

## Auf welchen Plattformen wird JavaScript verwendet resp. kann verwendet werden?
- Nativ in Webbrowsern
- Auf Datenbanken
- In Desktopapplikationen
- In Backend Applikationen
- In Mobilen Applikationen

## Nenne mindestens drei Eigenschaften von JavaScript und erkläre diese.
- Schwache Typisierung (Eine Variable kann auf Objekte verschiedener Typen verweisen)
- Keine Vorgabe des Paradigmas
- Wird interpretiert zur Laufzeit

## Finde heraus, welche Firmen die ECMAScript Spezifikation massgäblich mitprägen.
- Google
- Hitachi
- PayPal
- Microsoft
- Mozilla Foundation

# JavaScript Sprachkonzepte I

## let vs. var
- Keyword `const` für Konstanten -> muss definiert werden!
- Keyword `var` ist function-scoped
- Keyword `let` ist block-scoped -> immer `let` verwenden, wo möglich!

## Datentypen

### number
- Typ `number` kann sowohl Integer, wie auch Floating Point Werte annehmen
- Es können neben regulären Werten auch "spezielle" numerische Werte vergeben werden wie  `Infinity`, `-Infinity` und `NaN`
- `NaN` repräsentiert einen Berechnungsfehler

### string
```JavaScript
let myString = 'hallo';
let myString2 = 'Hallo2';
let myStringWithBackTicks = `embed a string ${myString}`;
console.log(myStringWithBackTicks);
```

### boolean
```JavaScript
let myBoolean = true;
let myBoolean2 = false;
let isGreater = 5 > 2;
console.log(isGreater); // true
```

### «null» Wert
```JavaScript
let myNullValue = null;
```

- `null` für "leer oder unbekannt" verwenden

### «undefined» Wert
```JavaScript
let myUndefinedValue = undefined;
console.log(myUndefinedValue);
```
- “undefined” bedeutet “Wert wurde nicht zugewiesen”
- Wenn eine Variable deklariert wurde, aber noch kein Wert zugewiesen
wurde, ist der Wert ”undefined”

**Best Practice:**
- `undefined` in Checks für "noch keinen Wert zugewiesen" verwenden

## Object I - Erstellung
```JavaScript
let myObject = {}; // object literal syntax
let myObject2 = new Object(); // Object constructor syntax
```

- Sämtliche Datentypen die bisher gezeigt wurden, waren primitive
Datentypen, weil sie nur einen einzelnen Wert annehmen können
(String, Nummer, etc.).
- Objekte werden verwendet um “komplexere” Entitäten zu speichern.

## Object II - Properties
```JavaScript
let user = {
name: 'patrick',
age: 32
}
```

User Object mit zwei Properties
- `name` mit dem Wert 'Patrick'
- `age` mit dem Wert 32 

## Object III – Zugriff auf Properties
```JavaScript
let user = {
name: 'patrick',
age: 32
};
console.log(user['name']); // Patrick
console.log(user.name); // Patrick
// Computed Properties
let fruit = prompt('Which fruit?', 'apple');
let bag = {
[fruit] : 5
};
console.log(bag.apple); // 5
```

## Object IV – Properties prüfen
```JavaScript
let user = {};
console.log(user.mysuperduperproperty === undefined);
let myUser = {
name: "Patrick", age: 32
}
// Properties prüfen
console.log('name' in myUser);
console.log('key' in myUser);
```

## Object V – Properties durchgehen
```JavaScript
let myUser = {
name: "Patrick", age: 32
}
// Properties durchgehen
for (let key in myUser) {
console.log(key);
}
```

## Object VI - Referenzen
Ein grosser Unterschied zwischen Primitives und Objects:
- Bei Primitives (wie z.B. number, string, etc.) wird der komplette Wert zugewiesen.
- Bei Non-Primitives werden die Referenzen zugewiesen.

```JavaScript
let myUser = {
name: "Patrick", age: 32
}
let myUser2 = myUser; // Zuweisen der Referenz
myUser2.name = 'Andreas';
console.log(myUser.name); // Andreas
```

## Object VII - Klonen
```JavaScript
let myUser = {
name: 'Patrick', age: 32
}
let clone = {};
for (let key in myUser) {
clone[key] = myUser[key];
}
clone.name = 'Andreas'
// Bevorzugte Alternative zum Loop
let clone2 = Object.assign({}, clone);
```

## Object VIII - Array
```JavaScript
let myArray = [1, 2, 3, 4];
myArray.push(5);
myArray.push(6);
myArray.push(7);
myArray[2] = 10;
console.log(myArray);
console.log(typeof(myArray));
```

## Loops - Überblick
- `While`
- `Do-While`
- `For-Loop`
- `For-In` -> Loopt durch die **Properties** von einem Objekt
- `For-Of` -> Mit dem for...of statement können sogenannte **iterable objects** durchlaufen werden (Array, Map, Set, das arguments Objekt und weitere eingeschlossen)

```JavaScript
let arr = [3, 5, 7];
arr.foo = "hallo";
for (let i in arr) {
console.log(i); // logs "0", "1", "2", "foo"
}
for (let i of arr) {
console.log(i); // logs "3", "5", "7"
}
```

## typeof() Operator
Mittels `typeof` Operator können Typen von bestimmten Operanden beschrieben werden.
```JavaScript
console.log(typeof(1)); // number
console.log(typeof(true)); // boolean
console.log(typeof('hallo')); // string
console.log(typeof(function(){})); // function
console.log(typeof({})); // object
console.log(typeof(null)); // object
console.log(typeof(undefined)); // undefined
console.log(typeof(NaN)); // number
console.log(typeof([])); // object
```

## Type conversions
```JavaScript
// Boolean to string
let value = true;
value = String(value);
console.log(typeof(value));
// String to number
console.log('8' / '4'/); // Output? -> 2
let myString = '123';
let myNumber = Number(myString);
console.log(typeof(myNumber)); // Number
```

## Operatoren – Gleicheitsoperator == / ===

```JavaScript
let var1 = 1;
let var2 = ‘1’;
console.log(var1 == var2); //Output? -> true
let var3 = 1;
let var4 = 1;
console.log(var3 === var4); //Output? -> true
console.log(var3 === var2); //Output? -> false
```

## Zusammenfassung
- `number` für integer oder floating-point Werte
- `string` für Strings
- `boolean` für true/false (primitive type)
- `null` für unbekannte Werte
- `undefined` für nicht zugewiesene Werte
- `objects` für komplexe Datenstrukturen (ß Reference Type)

- **Objekte** sind als `Key-Value Paare` aufgebaut.
- Für den Zugriff auf die `Properties` wird die **Punktnotation** verwendet.
- Über `[]` können wird via Key auf den **Wert des Properties** zugreifen.
- **Löschen** eines Properties via `delete`.
- Prüfen, ob ein Property mit einem entsprechenden Key existiert via `in`
- Iterieren über die Keys von einem object `for (let key in obj)`
- Es gibt verschiedene Arten von Objekten, wie z.B. Array, Date, Error, etc.