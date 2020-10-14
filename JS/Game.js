class Game{
    constructor(){
        this.pos = 5;
        this.neg = -5;
    }

    //fetches gamestate from database
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }

    //updates gamestate when needed
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }

    async start(){
    if(gameState === 0){
        player = new Player();
        
        //gets player count
        var playerCountRef = await database.ref('playerCount').once("value");

        //checks if the player count is available and stores it
        if(playerCountRef.exists()){
              playerCount = playerCountRef.val();
              player.getCount();
            }
            form = new Form()
            form.display();
    }
        paddle1 = createSprite(490,250,10,50);

        paddle2 = createSprite(10,250,10,50);
        
        paddle3 = createSprite(250,10,50,10);
       
        paddle4 = createSprite(250,490,50,10);

        paddles = [paddle1, paddle2, paddle3, paddle4];

        ball1 = createSprite(10,490,10,10);
        ball1.shapeColor = "green";

        ball2 = createSprite(490,490,10,10);
        ball2.shapeColor = "blue"

        ball3 = createSprite(490,10,10,10);
        ball3.shapeColor = "yellow";

        ball4 = createSprite(10,10,10,10);
        ball4.shapeColor = "red";

    }

    play(){
        form.hide();

        Player.getPlayerInfo();

        ball1.velocityX = 5;
        ball1.velocityY = -5;

        ball2.velocityX = -5;
        ball2.velocityY = -5;

        ball3.velocityX = -5
        ball3.velocityY = 5;

        ball4.velocityX = 5;
        ball4.velocityY = 5;
    
        ball1.bounceOff(edges);
        ball2.bounceOff(edges);
        ball3.bounceOff(edges);
        ball4.bounceOff(edges);

        paddle1.y = y1;
        paddle2.y = y2;

        paddle3.x = x3;
        paddle4.x = x4;

        if(allPlayers !== undefined){
            
            //index of the array
            index = 0;
      
            //var playerID = player+index;
      
            for(var plr in allPlayers){
              //add 1 to the index for every loop
              index = index + 1 ;
             
              if (index === player.index){
                stroke(10);
                paddles[index - 1].shapeColor = "brown";

                /*if((index === 1||index === 2)&&keyDown(UP_ARROW)){
                    //index = 1;
                    paddles[index-1].y -=5;
                }

                if((index === 1||index === 2)&&keyDown(DOWN_ARROW)){
                    paddles[index-1].y +=5;
                }

                if((index === 3||index === 4)&&keyDown(RIGHT_ARROW)){
                    //index=3;
                    paddles[index-1].x +=5;
                }

                if((index === 3||index === 4)&&keyDown(LEFT_ARROW)){
                    paddles[index-1].x -=5;
                }*/
              }
            }
        }
    }
    
}