let salaries = {
    patrick: 100000,
    andreas: 110000,
    gwendloin: 91000,
    nayoona: 45000
};

function sum(obj) {
    let sum = 0;
    for (let prop in obj) {
        if (typeof obj[prop] == "number") {
            sum += obj[prop]
        }
    }
    return sum;
}

console.log(sum(salaries));
