var express = require("express");
var router = express.Router();
var api = require("../controllers/apiController");

router.post("/sendmail", api.sendmail);
router.get("/article/:id", api.getArticle);
router.post("/article/:id", api.postArticle);

module.exports = router;
