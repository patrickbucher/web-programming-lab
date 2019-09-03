"use strict";

let techRadar = {
    "Meta": {
        "generatedAt": new Date()
    },
    "TechRadar": {
        "Techniques": ["Micro Frontends", "Polyglot programming",
            "Secrets as a service", "Chaos Engineering"],
        "Tools": ["Cypress", "Helm", "Traefik", "Humio"],
        "Platforms": ["Contentful", "AWS Fargate", "InfluxD"],
        "Languages & Frameworks": ["TypeScript", "Rust"]
    }
};
render(techRadar, document.body);

function render(techRadar, parentNode) {
    let text = `Generated at ${techRadar.Meta.generatedAt}`;
    let dateP = document.createElement('p');
    dateP.textContent = text;
    parentNode.append(dateP);

    let mainList = document.createElement('ul');
    for (let topic of Object.keys(techRadar.TechRadar)) {
        let subListItem = document.createElement('li');
        subListItem.textContent = topic;
        mainList.append(subListItem);
        let subList = document.createElement('ul');
        for (let subtopic of techRadar.TechRadar[topic]) {
            let subTopicItem = document.createElement('li');
            subTopicItem.textContent = subtopic;
            subList.append(subTopicItem);
        }
        subListItem.append(subList);
    }
    parentNode.append(mainList);
}
