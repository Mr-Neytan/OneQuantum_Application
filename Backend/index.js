//Requirements. Install before running
require("dotenv").config()
const postgres = require("postgres");
const express = require("express");
const cors = require("cors");

//Setting up Connection. I used Supabase for PostgreSQL. Code may vary.
const connectionString = process.env.DATABASE_URL;
const sql = postgres(connectionString);
const PORT = 8080;


const app = express();
app.use(cors())
app.use(express.json())

app.listen(
    PORT,
    () => console.log(`Running from ${PORT}`)
)


//Specific Routes
app.get("/", (req, res) => {
    res.status(200)
    return res.json("Hello World")
})

//Get articles from a table called QuantumArticles
app.get("/articles", async (req, res) => {
    try {
      const articles = await sql`SELECT * FROM "QuantumArticles"`;
      res.json(articles);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });