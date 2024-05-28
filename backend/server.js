// backend/server.js
import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import sqlite3 from 'sqlite3';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();  // Load environment variables from .env file

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(bodyParser.json());
app.use(cors());

const dbPath = path.resolve(__dirname, '../identifier.sqlite'); // Path to the SQLite database file
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT, password TEXT)");
});

const SECRET_KEY = process.env.SECRET_KEY;

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);

    db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], function(err) {
        if (err) {
            return res.status(500).send('Error registering user');
        }
        const token = jwt.sign({ id: this.lastID }, SECRET_KEY, { expiresIn: 86400 });
        res.status(200).send({ auth: true, token });
    });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    db.get('SELECT * FROM users WHERE username = ?', [username], (err, user) => {
        if (err || !user) {
            return res.status(404).send('No user found');
        }

        const passwordIsValid = bcrypt.compareSync(password, user.password);
        if (!passwordIsValid) {
            return res.status(401).send({ auth: false, token: null });
        }

        const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: 86400 });
        res.status(200).send({ auth: true, token });
    });
});

function verifyToken(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(403).send({ auth: false, message: 'No token provided' });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token' });
        }

        req.userId = decoded.id;
        next();
    });
}

app.get('/me', verifyToken, (req, res) => {
    db.get('SELECT id, username FROM users WHERE id = ?', [req.userId], (err, user) => {
        if (err || !user) {
            return res.status(404).send('No user found');
        }
        res.status(200).send(user);
    });
});

app.listen(4002, () => {
    console.log('Server is running on port 4002');
});
