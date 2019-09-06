const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

const credentials = {
    'Bruno': '$2a$10$B7OZUPXIYK1Qd7iGFuJsuO5CUfG7WIKf8LoBuYXg2o5JyqOBa3ovC',
    'Zoltan': '$2a$10$4tdZE7/P4EGF3z8VG5h9Cuc5R38jEuoT5e2JDDtgNq8y/LCHXhqka',
    'Captain': '$2a$10$ia/4LvuLcBziJI3s0hmPpOQH5.idoVuKF28hqGPFoRiXtH6OgQdVW'
};

const SECRET_KEY = 'geheim';

function main () {
    const server = express();
    server.use(bodyParser.json());
    const port = process.env.PORT || 8000;
    server.listen(port, () => console.log(`Server is listening on port: ${port}`));

    server.get('/time', (req, res) => {
        const auth = req.headers.authorization;
        if (auth == undefined) {
            res.status(401).send('fuck off');
        }
        const token = auth.substr(auth.indexOf(' ')).trim();
        if (token == '') {
            res.status(401).send('fuck off');
        }
        try {
            const result = jwt.verify(token, SECRET_KEY);
            if (result) {
                res.status(200).send(new Date());
            }
        } catch (error) {
            res.status(401).send('fuck off');
        }
    });

    server.post('/login', (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        const result = bcrypt.compareSync(password, credentials[username]);
        if (result) {
            const accessToken = jwt.sign({ id: username }, SECRET_KEY, {
                expiresIn: 5 * 60
            });
            res.status(200).send({'user': username, 'access_token': accessToken});
        } else {
            res.status(401).send('fuck off');
        }
    });
}

main();
