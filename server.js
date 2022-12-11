require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3625;

require("./DL/db").connect();
const cors = require("cors");

const userRouter = require("./routes/userRouter");
const orderRouter = require("./routes/orderRouter");
const productRouter = require("./routes/productRouter");

app.use(cors());
app.use(express.json());

const users = [];
let user = {
  id: 123,
  fName: "aviad",
  age: 31,
  address: "Kfar Adumim",
};
users.push(user);

app.get("/user", (req, res) => {
  res.send(users);
});
app.use(userRouter);


// const productService = require("./BL/product.service");
// app.post("/product", async (req, res) => {
//   let p = await productService.createNewProduct(req.body);
//   res.send(p);
// });

app.listen(PORT, () => {
  console.log("Server is running : listening to port " + PORT);
});
