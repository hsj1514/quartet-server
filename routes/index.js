var express = require('express');
var router = express.Router();
var Performer={
  isPlaying: false,
  broadcast: ""
}
const actions = {
	NOTHING: 0,
	HEART: 1,
	JUMP: 2,
	GLOW: 3,
    CLAP: 4,
    GROUPJUMP: 5
}
var Player1={
  id: 0,
  currentAction: actions.NOTHING
}
var Player2={
  id: 0,
  currentAction: actions.NOTHING
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
    isPlaying: Performer.isPlaying,
    action: Player1.currentAction,
    broadcast: Performer.broadcast
  });
});

router.get('/play', function(req, res, next) {
  if(!req.query.isAuidence){
    Performer.isPlaying=req.query.isPlaying;
  }
  else{
    res.send('Not a Performer');
  }
});

router.get('/broadcast', function(req, res, next) {
  if(!req.query.isAuidence){
    Performer.broadcast=req.query.broadcast;
  }
  else{
    res.send('Not a Performer');
  }
});
module.exports = router;
