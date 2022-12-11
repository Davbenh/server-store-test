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


// app.use('/api',(req,res,next)=>{
//   console.log(req);
//   res.send(req.body);
// });

app.use('/api/user',userRouter)

// const productService = require("./BL/product.service");
// app.post("/product", async (req, res) => {
//   let p = await productService.createNewProduct(req.body);
//   res.send(p);
// });

app.listen(PORT, () => {
  console.log("Server is running : listening to port " + PORT);
});
