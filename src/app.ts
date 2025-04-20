import express, { Request, Response, NextFunction } from "express";

const app = express();

// app.get("/sachin", (req: Request, res: Response, next: NextFunction) => {
//   console.log("Sachin handler 1");
//   next();
// });

// app.get("/", (req: Request, res: Response, next: NextFunction) => {
//   console.log("Sachin handler 2");
//   res.send("Response from Sachin handler 2");
// });

// app.use("/diji", (req, res, next) => {
//   console.log("App.use");
//   res.send("Response from Diji handler 1");
// });

app.use("/diji", (req: Request, res: Response, next: NextFunction) => {
  console.log("authenticated");
  next();
});

app.use("/diji", (req: Request, res: Response, next: NextFunction) => {
  console.log("request handler ");
  res.send("Response from Diji handler 2");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
