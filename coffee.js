import express from "express";
import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config()

const sql = postgres(process.env.DATABASE_URL);

const app = express();

app.use(express.json())

app.use(express.static("./client"));


app.get("/api/coffee", (req, res) => {
    console.log(req.query)
    sql`SELECT * FROM coffee`.then((result) => {
        console.log(result)
        res.json(result);
    });
});
app.get("/api/coffee/:id", (req, res) => {
    const id = req.params.id;
    sql`SELECT * FROM coffee WHERE id = ${id}` .then((result) => {
        if(result.length === 0){
            res.set("Content-type", "text/plain");
            res.status(404);
            res.end("Not Found");
        }else {
            res.json(result[0]);
        }
    });
});

app.post("/api/coffee", (req, res, next) => {
    const coffee = req.body;
    const info = ["name", "caffein", "flavor"]
    const errors = []
    const {name, caffein, flavor } = coffee;
    for(let data of info){
        if(coffee[data]=== undefined){
            errors.push(`Missing Coffee ${data}`);
        };
    }
    if (coffee.caffein === undefined) {
        errors.push("Missing caffein level");
    }
    if (errors.length > 0) {
        res.status(422);
        res.send(errors.join(" "));

    } else {
    sql`INSERT INTO coffee (name, caffein, flavor) VALUES(${name}, ${caffein}, ${flavor}) RETURNING *`
    .then((result) => {
        res.send(result[0]);
    }).catch(next)
    } 
});

app.patch("/api/coffee/:id", (req, res, next) =>{
    const {id} = req.params;
    const {name, caffein, flavor} = req.body
sql`UPDATE coffee SET 
name=COALESCE(${name || null}, name ),
caffein=COALESCE(${caffein || null}, caffein),
flavor=COALESCE(${flavor || null}, flavor) 
WHERE id=${id} RETURNING *
`.then((result) => {
    res.send(result[0])

}) .catch(next);
})

app.delete("/api/coffee/:id", (req, res) => {
    const {id} = req.params;
    sql `DELETE FROM coffee WHERE id = ${id} RETURNING *`.then((result) => {
        res.send(result[0]);
    })
});

app.use((err, req, res, next) => {
    res.status(500);
    console.log(err)
    res.send("Internal Server Error");
})



app.listen(process.env.PORT);