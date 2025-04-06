import express, { Request, Response } from "express";

const app = express();

app.post("/user/:count", (req: Request, res: Response) => {
  console.log(req.params.count);
  console.log(req.params);
  res.send({
    name: "John Doe",
    age: 30,
  });
});

app.post("/topic", (req: Request, res: Response) => {
  console.log(req.query);
  res.send({
    name: "John Doe",
    age: 30,
  });
});

app.use("/kitty", (req: Request, res: Response) => {
  res.send("Hello from the server");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
