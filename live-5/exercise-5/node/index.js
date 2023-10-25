const express = require('express');
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'pfa'
});

conn.connect((err) => {
    if (err) {
        console.error("mysql connection error: ", err);
        return;
    }
    console.log('mysql connection successful');
});

const app = express();

app.get('/', (_, res) => {
    res.send('Hello world');
    conn.query(express.query, (err, results) => {
        if (err) {
            console.error(err);
            res.json({
                success: false,
                message: 'An error ocurred'
            });
            return;
        }
        res.json({
            success: true,
            results
        })
    })
})

app.listen(3000, () => {
    console.log('express listen on 3000');
})