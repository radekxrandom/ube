const article = require("../models/article");
const quotation = require("../models/quotation");
var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "trwaloscteraz@gmail.com",
    pass: "placek123"
  }
});

exports.sendmail = async (req, res) => {
  var mailOptions = {
    from: "ubezpieczenia",
    to: "grazyna@rafrom.com",
    subject: req.body.title,
    text: req.body.mes + req.body.email
  };
  transporter.sendMail(mailOptions, async (e, i) => {
    if (e) {
      return res.status(200).json({ err: "Smth wrong with email sending" });
    } else {
      return res.status(200).json({ err: "Maill sent." });
    }
  });
};

exports.getArticle = async (req, res) => {
  let article = article.findOne({ number: req.params.id });
  if (!article) {
    return res.json({ article: "Article not found!" });
  }
  return res.json({ article: article });
};

exports.postArticle = async (req, res) => {
  try {
    await new article({
      title: req.body.title,
      author: req.body.author,
      place: req.body.place,
      text: req.body.text,
      img: req.body.img,
      number: req.params.id
    }).save();
    res.status(200).json("Ok boomer");
  } catch (err) {
    return res.status(400).json("smrod");
  }
};
