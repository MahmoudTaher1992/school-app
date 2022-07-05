import express from "express";
import {newSchools} from "@school-app/graphql";

const app = express();
const port = 4000;

app.get("/", (req, res) => {
    res.send(newSchools)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})