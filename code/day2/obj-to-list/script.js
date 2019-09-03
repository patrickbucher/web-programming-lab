"use strict";

let object = {
    "foo": {
        "bar": [
            "baz",
            "qux"
        ],
        "boing": [
            "peng",
            "gong",
            "dong"
        ]
    },
    "bubu": {
        "gaga": {
            "Hans": ["Oberstandartenführer", "Landa"],
            "Hermann": ["Untersturmführer", "Adjutant"]
        },
        "lulu": {
            "Kuh": ["Muh", "Muuuh"],
            "Cat": ["Meow", "Miaaaau"],
            "Igel": {
                "ftftft": ["Ja", "Nein"]
            }
        }
    }
}
document.body.append(list(object));

function list(obj) {
    let ul = document.createElement('ul');
    for (let prop of Object.keys(obj)) {
        let li = document.createElement('li');
        if (typeof obj[prop] === 'string') {
            li.textContent = obj[prop];
        } else {
            li.textContent = prop;
        }
        ul.append(li);
        if (typeof obj[prop] === 'object') {
            li.append(list(obj[prop]));
        }
    }
    return ul;
}
