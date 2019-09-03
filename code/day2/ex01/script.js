"use strict";

let h1 = document.getElementsByTagName('h1');
for (let header of h1) {
    console.log('hi:', header.textContent);
}

let students = document.getElementsByTagName('li');
for (let student of students) {
    console.log('Student:', student.textContent);
}

let brunoNode = getChildWithContent(document, 'Bruno');
console.log(brunoNode);

function getChildWithContent(parentNode, content) {
    for (let childNode of parentNode.childNodes) {
        if (childNode.textContent === content) {
            return childNode;
        }
        let found = selectWithContent(childNode, content);
        if (found != null) {
            return found;
        }
    }
    return null;
}
