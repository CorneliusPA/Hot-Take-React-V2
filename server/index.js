const { default: App } = require("../hot-take-react/src/App");

const express = require(express);
const app = express();
const mysql = require(mysql);
const cors = require(cors);

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user:"Corn",
    host:"localhost",
    password:"Super000",
    database: "hot_take_db"
});

db.get("/user_profile", (req, res) => {
    "SELECT * FROM user_profile", (err, result) => {
if (err){
    console.log(err);  
}
    else {
        res.send(result)
  
}
    }
});

app.listen(3001, () =>{
    console.log("Your server is ready on port:3001 sir.")
});