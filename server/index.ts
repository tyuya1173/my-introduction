import express, { Request, Response } from "express"; // 型を追加

const app = express();
const PORT = 9000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});