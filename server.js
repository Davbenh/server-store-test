require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3625;

require("./DL/db").connect();

const userRouter = require("./routes/userRouter");
const orderRouter = require("./routes/orderRouter");
const productRouter = require("./routes/productRouter");

app.use(cors());
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/order", orderRouter);

app.listen(PORT, () => {
  console.log("SERVER IS RUNNING!!! : listening to port " + PORT);
});
