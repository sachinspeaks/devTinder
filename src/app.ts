import express, { Request, Response } from "express";

const app = express();

app.use("/kitty", (req: Request, res: Response) => {
  res.send("Hello from the server");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
