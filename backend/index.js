var express = require("express")
var cors = require("cors")
var app = express()
var path = require("path")


app.use(cors())
app.use(express.json())

const _dirname = path.dirname("")
const buildPath = path.join(_dirname, "../frontend/build")
app.use(express.static(buildPath))

app.get("/api/test", (req, res)=>{
    res.send("Hello fromt test")
    console.log("Hello from frontend")
})

app.get('*', (req, res) => {
    res.sendFile(
        path.join(__dirname, "../frontend/build/index.html"),
        function (err) {
            if(err) {
                res.status(500).send(err)
            }
        }
    )
    console.log("Something")
  });




app.listen(5001, ()=>console.log("Backend is running"))