var express = require('express');
var router = express.Router();
var isPlaying=false;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  res.send('quartet server test');
});

router.get('/update', function(req, res, next) {
  res.send({
    isPlaying: isPlaying
  });
});
router.get('/play', function(req, res, next) {
  isPlaying=req.isPlaying;
  if(isPlaying){
  res.send('success');
  }
  else{
  res.send('fail');
  }
});
module.exports = router;
