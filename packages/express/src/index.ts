import express from "express";
import {expressGraphQLMiddleware} from "@school-app/graphql";

const app = express();
const port = 4000;

app.use("/graph-ql", expressGraphQLMiddleware)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})