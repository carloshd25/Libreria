const book = require("../routes/bookRouter");
const userAut= require("./userAutRouter")
module.exports = router => {
    book(router),
    userAut(router);
}