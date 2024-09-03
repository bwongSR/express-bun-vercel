// import express from "express";

// const app = express();
// const port = 4200;

// app.get("/ping", (req, res) => {
// 	res.send("pong");
// });

// app.listen(port, () => {
// 	console.log(`Listening on port ${port}...`);
// });

// export default app;

// src/main.ts
import { type Server } from "bun";

export default {
	async fetch(request: Request, server: Server) {
		return new Response("Hello from Bun on Vercel", {
			status: 200,
			headers: { "Content-Type": "text/plain" },
		});
	},
};
