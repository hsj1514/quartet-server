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
  id: "",
  currentAction: actions.NOTHING,
  score: 0
}
var Player2={
  id: "",
  currentAction: actions.NOTHING,
  score: 0
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  Performer.isPlaying=false;
  Performer.broadcast="";
  res.send('quartet server test');
});

router.get('/update', function(req, res, next) {
  res.send({
    isPlaying: Performer.isPlaying,
    broadcast: Performer.broadcast,
    p1action: Player1.currentAction,
    p1name: Player1.id,
    p1score: Player1.score,
    p2action: Player2.currentAction,
    p2name: Player2.id,
    p2score: Player2.score
  });
});

router.get('/play', function(req, res, next) {
  if(!req.query.isAuidence){
    Performer.isPlaying=req.query.isPlaying;
  }
});

router.get('/broadcast', function(req, res, next) {
  if(!req.query.isAuidence){
    Performer.broadcast=req.query.broadcast;
  }
});

router.get('/name', function(req, res, next) {

  if(req.query.name!=undefined && req.query.name!=Player2.id){
    Player1.currentAction=Player2.currentAction;
    Player1.id=Player2.id;
    Player1.score=Player2.score;
    Player2.id=req.query.name;
    Player2.currentAction=actions.NOTHING;
    Player2.score=0;
    res.send(Player2.id);
  }
  else{
    res.send("problem");
  }
});

router.get('/action', function(req, res, next) {
  console.log(req.query.name);
  console.log(Player1.id);
  console.log(Player2.id);
  if(req.query.token==Player1.id){
    console.log("p1");
    Player1.currentAction=req.query.action;
  }
  else{
    console.log("p2");
    Player2.currentAction=req.query.action;
  }
  // res.send("action received");
});

router.get('/score', function(req, res, next) {
  if(req.query.token==Player1.id){
    Player1.score=req.query.score;
  }
  else{
    Player2.score=req.query.score;
  }
  // res.send("score received");
});
module.exports = router;
