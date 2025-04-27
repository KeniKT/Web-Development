
import express from 'express';
const app = express();
const port = 3000;

app.get("/",(req, res) => {
    res.send("<h1>Hello</h1>");
})

app.get("/about",(req, res) => {
    res.send("<h1>About</h1> <p> hello i am  kebede belete </p>");
})

app.get("/contact",(req, res) => {
    res.send("<h1>Contact</h1><p> my phone number is +123456789</p>");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})