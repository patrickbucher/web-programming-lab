let menu = { width: 200, height: 300, title: "Titel" };
multiplyNumeric(menu);
console.log(menu.width, menu.height, menu.title);

function multiplyNumeric(object) {
    for (let prop in object) {
        if (typeof object[prop] == "number") {
            object[prop] *= 2;
        }
    }
}
