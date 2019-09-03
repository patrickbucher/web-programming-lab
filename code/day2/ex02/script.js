"use strict";

let divs = document.querySelectorAll('div');
for (let div of divs) {
    console.log(div);
    if (div.getAttribute('data-hslu-module') === 'internet topics') {
        div.setAttribute('data-hslu-module', 'web programming lab');
    }
}
