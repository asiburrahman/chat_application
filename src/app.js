//external export
const express = require('express');
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const hbs = require("hbs")
const path = require("path");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 3000;

//internal export
const {notFoundHandler, errorHandler} = require("../middlewares/common/errorHandler")
const loginRouter = require("../router/loginRouter");
const usersRouter = require("../router/usersRouter");
 const inboxRouter = require("../router/inboxRouter");
const app =express();
dotenv.config()

// path join
views_path = path.join(__dirname, "../templetes/views")
partials = path.join(__dirname, "../templetes/partials")


//database connection
mongoose.connect("mongodb://localhost:27017/chatapplication", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log("connetion successfull")).catch((err)=>console.log(err))

//request perser
// app.use(express.json());
// app.use(express.urlencoded({extended:false}));


//set engine
app.set("view engine", "hbs");

//set views path
app.set("views", views_path);

// hbs register, set partials path
hbs.registerPartials(partials);

//set static path
app.use(express.static(path.join(__dirname, "../public")));

//parse cookies
app.use(cookieParser());

// get home
app.use("/", loginRouter)
app.use("/users", usersRouter)
 app.use("/inbox", inboxRouter)

//error handaling

//404 not found error handaller
app.use(notFoundHandler);

//common error handler
app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`server is running on port num ${port}`);
})