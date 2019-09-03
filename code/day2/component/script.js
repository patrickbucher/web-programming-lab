"use strict";

const githubApi = 'https://api.github.com';
const authorizationHeader = {
    headers: {'Authorization': 'removed'}
};

class GithubUserSearch extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
<form name="searchForm" onsubmit="search(event, username.value)">
    <input name="username" type="text" placeholder="username">
    <button type="submit">search</button>
</form>
<img id="userImage">
<p id="username"></p>
<ul id="follower"></ul>
        `;
        window.search = this.search;
    }

    search(event, username) {
        event.preventDefault();

        let getUser = function(username) {
            let resp = fetch(`${githubApi}/users/${username}`, authorizationHeader);
            return resp.then(data => data.json());
        };

        let getFollowers = function(username) {
            let resp = fetch(`${githubApi}/users/${username}/followers`, authorizationHeader);
            return resp.then(data => data.json());
        };

        getUser(username).then(data => {
            let img = document.getElementById('userImage');
            img.src = data.avatar_url;
            let p = document.getElementById('username');
            p.textContent = username;
        });
        getFollowers(username).then(data => {
            let ul = document.getElementById('follower');
            ul.innerHTML = '';
            for (let follower of data) {
                let li = document.createElement('li');
                li.textContent = follower.login;
                ul.append(li);
            }
        });
    }
}

window.customElements.define('github-user-search', GithubUserSearch);





