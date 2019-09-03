# TypeScript

- super set of JavaScript (ES5, ES6, ES7)
    - compile down to ES5 wit Babel, if wanted
- optional static typing

## Type Annotation

    let isDone: boolean = false;
    let goodNumber: number = 6;
    let color: string = "blue";

    let whatever: any = 4;
    whatever = "foo"; // ok

    function add(a: number, b: number): number {
        return a + b;
    }

## Enums

    enum Color { Red, Green, Blue };
    let c: Color = Color.Green;

## Interface

    interface Named {
        name: string;
    }

    function print(object: Named) {
        console.log(object.name);
    }

    print({ name: "Dilbert", position: "Employee" }); // ok
    print({ text: "Hello", recipient: "World" });     // wrong: no name

Read only properties:

    interface Named {
        readonly name: string;
    }

## Visibility

    class Module {
        private name: string;
        private instructor: string;
        private description: string;

        public constructor(name: string, instructor: string, description: string) {
            // ...
        }

        public describe(): string {
            // ...
        }
    }

## Generics

    function whatever<T>(arg: T): T {
        // ...
    }
    let foo = whatever<string>("foobar");
