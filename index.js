<<<<<<< HEAD
require('dotenv').config() // חיבור קובץ ENV
const express = require('express');//קורא לספרייה אקספרס
const 

const app = express();// קורא לפונקציית ברירת מחדל באקספרס ושם אותה בAPP

const PORT = process.env.PORT || 3625;

require("./DL/db").connect(); // קריאה וחיבור לבסיס נתונים

//CORS

const cors = require("cors"); // להריץ npm i cors -  פקודות אלה ממירים את הבקשות והתשובות לגייסון כדי שיוכלו לקרוא אותן.
app.use(cors());
app.use(express.json());


app.get('/somepage', (req, res) => {     // פה אמרנו שאם מבצעים בקשה מסוג GET לכתובת הזאת - הפונקציה תתבצע.
        console.log(req);
        res.send("ok");
})

// , זו הפקודה שמריצה את השרת ואומרת לו להתחיל להקשיב , יש פורטים ששמורים
app.listen(PORT, ()=>{
    console.log('CONNECTION SUCCESSFUL: server is listening!!!');
});
=======
require('dotenv').config()

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3625
require("./DL/db").connect();

const cors = require("cors")

app.use(cors())
app.use(express.json())

const users = []
let user = {
    id: 123,
    fName : "aviad",
    age : 31,
    address : "Kfar Adumim"
}
users.push(user)

app.get('/user', (req, res) => {
    res.send(users)
})
app.post('/user', (req, res) => {
    
    users.push(req.body)
    res.sendStatus(201)
})
app.get('/user/:id', (req, res) => {
    let user = users.find(u=>u.id==req.params.id)
    if(user) res.send(user)

    res.status(400).send("user is not exist")
})

const productService= require('./BL/product.service')
app.post('/product',async (req,res)=>{
    let p = await productService.createNewProduct(req.body)
    res.send(p)
})

app.listen(PORT, () => {
    console.log('Server is running : listening to port ' + PORT);
})
>>>>>>> c590f65f07a2dda7b3658fa8b006164fc6eaddd6
