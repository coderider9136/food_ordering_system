let { register_me, login_me, update_me, change_pass, forget_me, reset_me, get_me, add_profile, update_profile } = require("../controller/user")
let { viewDish } = require("../controller/product")
let { categoryView } = require("../controller/category")
let errorHandler = require("../middleware.js/errorhandler")
require("express-async-errors");

let auth = require("../middleware.js/auth")
let express = require("express");

let app = express();

app.post("/forget_password", forget_me);
app.post("/reset_password", reset_me);

app.post("/register", register_me)
app.post("/login", login_me)

app.put("/update_me", auth("User"), update_me);
app.get("/about_me", auth("User"), get_me)
app.post("/change_password", auth("User"), change_pass)


app.post("/upload_profile_pic", auth("User"), add_profile);
app.post("/update_profile_pic", auth("User"), update_profile)

app.get("/view_dish", viewDish);
app.get("/view_category", categoryView);


app.use(errorHandler)
module.exports = app