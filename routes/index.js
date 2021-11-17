var express = require('express');
var router = express.Router();
var Performer={
  isPlaying: false,
  broadcast: ""
}
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
  if(req.query.isAuidence){
    Performer.isPlaying=req.query.isPlaying;
    if(req.query.isPlaying){
      res.send('playing');
    }
    else{
      res.send('paused');
    }
  }
  else{
    res.send('Not a Performer');
  }
});
module.exports = router;
