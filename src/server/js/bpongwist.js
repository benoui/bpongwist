import express from "@feathersjs/express";
import feathers from "@feathersjs/feathers";

const app = express(feathers());

app.use(express.static("public"));

app.get("/", (_req, res) => res.sendFile("index.html", { root: "./public/" }));

const port = 3000;
const server = app.listen(port);

server.on("listening", () => console.log(`Listening on port ${port}`));
