const express = require("express");
const data = require("./data");
const cors = require("cors");
const app = express();

app.use(
    cors({
        origin: "*"
    })
)





app.get("/api/category", (req, res) =>{

   // res.send(data.categories)

    res.json(data.categories)

    console.log(data.categories)
})


app.get("/api/data", (req, res) =>{

    res.json(data.data)
})






app.listen(3001, () =>{
    console.log(`Listen at port 3001`)
})