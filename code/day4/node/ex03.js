let counter = 0;
let last = Date.now();
while (counter < 5) {
    let now = Date.now();
    let millis = now - last;
    if (millis >= 1000) {
        console.log("Hello Web-Programming-Lab");
        last = now;
        counter++;
    }
}
console.log("Done");
