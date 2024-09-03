import express from "express";

const app = express();
const port = 4200;

app.get("/ping", (req, res) => {
	res.send("pong");
});

app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});

export default app;
