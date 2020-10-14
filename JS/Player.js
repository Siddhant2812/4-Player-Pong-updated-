class Player{
    constructor(){
        this.index = null;
        this.name = null;
    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
          playerCount = data.val();
        })
      }
    
      updateCount(count){
        database.ref('/').update({
          playerCount: count
        });
      }

      update(){
        if(this.index===3){
          var playerIndex = "players/player" + this.index;
          database.ref(playerIndex).update({
            name:this.name,
            x:pad3
          });
        }
        else if(this.index===4){
          var playerIndex = "players/player" + this.index;
          database.ref(playerIndex).update({
            name:this.name,
            x:pad3
          });
        }
        else if(this.index===1){
          var playerIndex = "players/player" + this.index;
          database.ref(playerIndex).update({
            name:this.name,
            y:pad1
          });
        }
        else if(this.index===2){
          var playerIndex = "players/player" + this.index;
          database.ref(playerIndex).update({
            name:this.name,
            y:pad2
          });
        }
      }

      updatePos(dist){
        if(this.index===1){
          var playerRef = 'players/player'+this.index
          database.ref(playerRef).update({
            y:pad1+dist
          })
        }
        else if(this.index===2){
          var playerRef = 'players/player'+this.index
          database.ref(playerRef).update({
            y:pad2+dist
          })
        }
        else if(this.index===3){
          var playerRef = 'players/player'+this.index
          database.ref(playerRef).update({
            x:pad3+dist
          })
        }
        else if(this.index===4){
          var playerRef = 'players/player'+this.index
          database.ref(playerRef).update({
            x:pad4+dist
          })
        }
      }

      static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
         playerInfoRef.on("value",(data)=>{
           allPlayers = data.val();
         })
       }

}