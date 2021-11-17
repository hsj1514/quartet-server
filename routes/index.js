var express = require('express');
var router = express.Router();
var Performer={
  isPlaying: false,
  broadcast: ""
}
const actions = {
	NOTHING: 0,
  CLAP: 1,
  GROUPJUMP: 2
}
var Player1={
  currentAction: actions.NOTHING,
  name: ""
}
var Player2={
  currentAction: actions.NOTHING,
  name: ""
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/name', function(req, res, next) {
  if(req.query.name!=Player2.name && req.query.name!=""){
    Player1.currentAction=Player2.currentAction;
    Player1.name=Player2.name;
    Player2.name=req.query.name;
    Player2.currentAction=actions.NOTHING;
  }
});

router.get('/test', function(req, res, next) {
  Performer.isPlaying=false;
  Performer.broadcast="";
  res.send('quartet server test');
});

router.get('/update', function(req, res, next) {
  if(req.query.isAudience){
    if(req.query.name==Player2.name){
      res.send({
        isPlaying: Performer.isPlaying,
        broadcast: Performer.broadcast,
        action: Player1.currentAction,
        name: Player1.name,
      });
    }
    else{
      res.send({
        isPlaying: Performer.isPlaying,
        broadcast: Performer.broadcast,
        action: Player2.currentAction,
        name: Player2.name,
      });
    }
  }
  else{
    res.send({
      p1state: Player1.currentAction,
      p1name: Player1.name,
      p2state: Player2.currentAction,
      p2name: Player2.name,
    });
  }
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
    res.send('Not a Performer');
  }
  else{
    res.send('Not a Performer');
  }
});


module.exports = router;
