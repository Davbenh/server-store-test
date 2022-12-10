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