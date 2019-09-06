"use strict";
const url = 'https://github-trending-api.now.sh/';
fetch(url).then((resp) => {
    return resp.json();
}).then((data) => {
    let table = document.getElementById('trends');
    let titleRow = document.createElement('tr');
    let avatarTitle = document.createElement('th');
    avatarTitle.textContent = 'Avatar';
    titleRow.append(avatarTitle);
    let authorTitle = document.createElement('th');
    authorTitle.textContent = 'Author';
    titleRow.append(authorTitle);
    let nameTitle = document.createElement('th');
    nameTitle.textContent = 'Repo';
    titleRow.append(nameTitle);
    let langTitle = document.createElement('th');
    langTitle.textContent = 'Language';
    titleRow.append(langTitle);
    let miscTitle = document.createElement('th');
    miscTitle.textContent = 'Trending';
    titleRow.append(miscTitle);
    table.append(titleRow);
    for (let trend of data) {
        let row = document.createElement('tr');
        let avatar = document.createElement('td');
        let avatarImg = document.createElement('img');
        avatarImg.setAttribute('height', 32);
        avatarImg.setAttribute('width', 32);
        avatarImg.setAttribute('src', trend.avatar);
        avatar.append(avatarImg);
        row.append(avatar);
        let author = document.createElement('td');
        author.textContent = trend.author;
        row.append(author);
        let repo = document.createElement('td');
        let repoLink = document.createElement('a');
        repoLink.setAttribute('href', trend.url);
        repoLink.textContent = trend.name;
        repo.append(repoLink);
        row.append(repo);
        let lang = document.createElement('td');
        let langSpan = document.createElement('span');
        if (trend.language) {
            langSpan.textContent = trend.language;
            langSpan.style.backgroundColor = trend.languageColor;
            langSpan.classList.add('language');
        }
        lang.append(langSpan);
        row.append(lang);
        let misc = document.createElement('td');
        misc.textContent = `✡ ${trend.stars}  ♆ ${trend.forks} ☺ ${trend.builtBy.length}`;
        row.append(misc);
        table.append(row);
        console.log(trend);
    }
});
