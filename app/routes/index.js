const book = require("../routes/bookRouter");
const userAut= require("./userAutRouter");
const user=require("./userRouter");
module.exports = router => {
    book(router),
    userAut(router),
    user(router);
}