const express = require("express")
const app = express();
const port = 3000;

const route = require("./routers/clients/index.router")

// cấu hình pug
app.set("views","./views")
app.set("view engine","pug")
//router

route(app);

app.listen(port,()=>{
    console.log("app listening on port "+port)
})