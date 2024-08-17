import express, { Express, Request, Response } from "express";
import path from "path";

const app: Express = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "../project/dist")));

app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../project/dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
