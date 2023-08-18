let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/es', function(req,res,next){
  res.render('index-es')
})


module.exports = router;
