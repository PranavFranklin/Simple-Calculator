const express = require("express");
const bodyparser = require("body-parser");
//const users = require("./users");
const fs = require("fs");

const app = express();

// app.use(bodyparser.urlencoded({ extended: true }));
// var urlencodedParser = bodyparser.urlencoded({ extended: false });
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// app.get('', (req,res)=>{
//     res.sendFile(__dirname + "/index.html")

// })

app.post("/save", (req, res) => {
  const a = Number(req.body.first);
  const b = Number(req.body.second);

  fs.writeFileSync("a.txt", `${a}\n${b}`);

  res.status(200).json({
    success: true,
    message: "Saved",
  });
});

app.get("/add", (req, res) => {
  let fileArr = fs.readFileSync("./a.txt", "utf-8").split("\n");

  const a = Number(fileArr[0]);
  const b = Number(fileArr[1]);

  res.status(200).json({
    success: true,
    message: `Numbers ${a} and ${b} are added. Result is ${a + b}`,
  });
});

app.get("/minus", (req, res) => {
  let fileArr = fs.readFileSync("./a.txt", "utf-8").split("\n");

  const a = Number(fileArr[0]);
  const b = Number(fileArr[1]);

  res.status(200).json({
    success: true,
    message: `Numbers ${a} and ${b} are added. Result is ${a - b}`,
  });
});

app.get("/multiply", (req, res) => {
  let fileArr = fs.readFileSync("./a.txt", "utf-8").split("\n");

  const a = Number(fileArr[0]);
  const b = Number(fileArr[1]);

  res.status(200).json({
    success: true,
    message: `Numbers ${a} and ${b} are added. Result is ${a * b}`,
  });
});

app.listen(3000, (res) => {
  console.log("Server is running on port 3000");
});
