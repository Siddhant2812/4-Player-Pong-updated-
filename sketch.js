var database,position,ballPosition;
var gameState =0;
var playerCount,allPlayers;
var form,player,game;
var paddle1,paddle2,paddle3,paddle4;
var paddles = [];
var ball1,ball2,ball3,ball4;
var score;
var HighestScore;
var pad1,pad2,pad3,pad4;
var edges;
var y1,y2,x3,x4;
var index

function setup(){

    database = firebase.database();

    createCanvas(500,500);

    pad1 = 250;
    pad2 = 250;
    pad3 = 250;
    pad4 = 250;

    score = 0; 
    game = new Game();
    game.getState();
    game.start();

    edges = createEdgeSprites();
}

function draw(){
    //background("white");

    //fetches x and y value
    /*database.ref('players/player1/y').on("value",(data)=>{
      y1 = data.val();
    })
 
    database.ref('players/player2/y').on("value",(data)=>{
     y2 = data.val();
   })
 
   database.ref('players/player3/x').on("value",(data)=>{
     x3 = data.val();
   })
 
   database.ref('players/player4/x').on("value",(data)=>{
     x4 = data.val();
   })*/

    if(HighestScore<score){
        HighestScore= score; 
      } 



      //updates positions
      if(index === 1){
        if(keyDown(UP_ARROW)){
            player.updatePos(-5);           
        }
        if(keyDown(DOWN_ARROW)){
            player.updatePos(5);
        }
    }

    if(index === 2){
        if(keyDown(UP_ARROW)){
            player.updatePos(-5);
            
        }
        if(keyDown(DOWN_ARROW)){
            player.updatePos(5);
            
        }
    }

    if(index === 3){
        if(keyDown(RIGHT_ARROW)){
            player.updatePos(5);
            //player3.update();
        }
        if(keyDown(LEFT_ARROW)){
            player.updatePos(-5);
            //player3.update();
        }
    }

    if(index === 4){
        if(keyDown(RIGHT_ARROW)){
            player.updatePos(5);
            //player.update();
        }
        if(keyDown(LEFT_ARROW)){
            player.updatePos(-5);
            //player.update();
        }
    }


      //console.log(score);

    if(playerCount === 4){
        game.update(1);
      }
    if(gameState === 1){
        clear();
        game.play();
        score = score + Math.round(World.frameRate%60);
      }
      
      //yellow lines
      stroke("yellow");
      line(490,10,490,250);
      line(490,10,250,10);
      
      //red lines
      stroke("red");
      line(10,10,10,250);
      line(10,10,250,10);

      //green lines
      stroke("green");
      line(10,490,10,250);
      line(10,490,250,490);

      //blue lines
      stroke("blue");
      line(490,490,490,250); 
      line(490,490,250,490); 

     drawSprites();
    } 