const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.urlencoded({extended:true}));

const items =[];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { ejes : items });
});
router.post("/", (req,res)=>{
  const item = req.body.em1;
  items.push(item);
  res.redirect('/');
})
module.exports = router;
