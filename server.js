import Express from "express";
import dotenv from "dotenv";

dotenv.config()
import fs from "fs"

const App = Express()
App.use(Express.static("./public"))

import main from "./src/main.js"

const index = fs.readFileSync("./public/index.html","utf-8").replace('<div id="root"></div>',main())
App.get("/",(req,res)=>{
    res.send(index)
})

const port= process.env.PORT
App.listen(port,()=>{
    console.log("server is running on port: "+port)
})