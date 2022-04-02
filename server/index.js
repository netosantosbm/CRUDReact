const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "dbcrud"
});

app.use(cors());
app.use(express.json());
app.post("/register", (req, res) => {
    const { name } = req.body;
    const { cost } = req.body;
    const { category } = req.body;

    let SQL =  "INSERT INTO produtos ( name, cost, category ) VALUES ( ?,?,? )";

    db.query(SQL, [name, cost, category], (err, result) => {
        console.log(err);
    });
});

app.listen(3001, () => {
    console.log("Server ON");
});


/*TESTE DE BANCO*/
/* app.get('/', (req, res) => {
    let SQL =
        "INSERT INTO produtos ( name, cost, category ) VALUES ('Item 01','R$120', 'Alimento')";

    db.query(SQL, (err, result) => {
        console.log(err);
    });
}
);
 */