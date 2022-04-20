class Game {

    constructor(){
        this.resetTitle = createElement("h2");
        this.resetButton = createButton("");
        this.instruction = createElement("h2");
        this.leadeboardTitle = createElement("h2");
        this.p1 = createElement("h2");
        this.p2 = createElement("h2");
        this.p3 = createElement("h2");
    }

    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){
         gameState = data.val();
        });
    }

    update(state){
        database.ref("/").update({
            gameState:state
        });
    }

    start(){
      player = new Player();
        playerCount = player.getCount();

        form = new Form();
        form.display();

        gon1 = createSprite(90,90);
        gon1.addAnimation('flap',dragon);
        gon1.changeAnimation('flap');
        gon1.scale = 0.7 ;
        //gon1.x=mouseX;
        //gon1.y=mouseY;
        //butterfly.frameDelay=10;
        //gon1.x = mouseX;
       // gon1.y=mouseY;
        
        gon2 = createSprite(620, 280);
        gon2.addAnimation('flaps', dragon2);
        gon2.changeAnimation('flaps');
        gon2.scale = 0.9 ;
        //gon2.x=mouseX;
        //gon2.y=mouseY;

        gon3 = createSprite(1100, height - 100);
        gon3.addAnimation('flaps', dragon3);
        gon3.changeAnimation('flaps');
       // gon3.scale = 0.9 ;
        //gon3.x=mouseX;
        //gon3.y=mouseY;

        
      // demo=createSprite(250,100);
       //demo.velocityY+=4

        dragons = [gon1,gon2,gon3];

        fireBalls = new Group();
    }

    createFireball(){
      if(frameCount%60==0){
        fireBall = createSprite(Math.round(random(50,2000)),30);
        fireBall.velocityX+=7; 
        fireBall.addAnimation('glow',fireBallImg);
        //fireBall.lifetime=300;
        fireBall.scale=1.4;
        fireBalls.add(fireBall);
      }
    }

    handleElements(){
        form.hide();

        this.instruction.html("Press arrow keys to move the dragon")
        this.instruction.position(10,860);
        this.instruction.class("gameTitleAfterEffect");
        

        this.resetTitle.html("Reset Game");
        this.resetTitle.class("resetText");
        this.resetTitle.position(1750,10);

        this.resetButton.class("resetButton");
        this.resetButton.position(1720,20);

        this.leadeboardTitle.html("Scoreboard");
        this.leadeboardTitle.class("resetText");
        this.leadeboardTitle.position(70,680);

        //this.p1.html(player.name+ "&emsp;" +ascore);
        this.p1.class("resetText");
        this.p1.position(75,720);

        //this.p2.html("player2"+  "&emsp;" +bscore);
        this.p2.class("resetText");
        this.p2.position(75,760);

       // this.p3.html("player3"+  "&emsp;" +cscore);
        this.p3.class("resetText");
        this.p3.position(75,800);
    }

    play(){
        this.createFireball();
        this.handleElements();
        this.handleResetButton();
        //this.showScoreboard();
        Player.getPlayersInfo();
       


        if(allPlayers !== undefined){
        var index = 0;
        for(var plr in allPlayers){
            index = index+1;

            var x = allPlayers[plr].positionX;
            var y = allPlayers[plr].positionY;
            
            dragons[index-1].position.x = x;
            dragons[index-1].position.y = y;
           
            if(index == player.index){
             stroke(500);
             fill("white")
             ellipse(x,y,60,60);
           }
        }
       this.handlePlayerControls();
       drawSprites();
      }
    }

    handleResetButton() {
      this.resetButton.mousePressed(() => {
        database.ref("/").set({
          playerCount: 0,
          gameState: 0,
          players: {},
        });
        window.location.reload();
      });
  }

    showScoreboard() {
      var p1, p2, p3;
      var players = Object.values(allPlayers);

      if (
        (players[0].rank === 0 && players[1].rank === 0 && players[2].rank === 0) ||
        players[0].rank === 1) {
          
         p1 =
         players[0].rank +
         "&emsp;" +
         players[0].name +
         "&emsp;" +
         players[0].score;

         p2 =
        players[1].rank +
        "&emsp;" +
        players[1].name +
        "&emsp;" +
        players[1].score;

       p3 =
        players[2].rank +
        "&emsp;" +
        players[2].name +
        "&emsp;" +
        players[2].score;
      }

      if (players[1].rank === 1) {
        p1 =
          players[1].rank +
          "&emsp;" +
          players[1].name +
          "&emsp;" +
          players[1].score;
  
        p2 =
          players[0].rank +
          "&emsp;" +
          players[0].name +
          "&emsp;" +
          players[0].score;

          p3 =
          players[2].rank +
          "&emsp;" +
          players[2].name +
          "&emsp;" +
          players[2].score;
      }

      if (players[2].rank === 1) {

        p1 =
          players[2].rank +
          "&emsp;" +
          players[2].name +
          "&emsp;" +
          players[2].score;
  
        p2 =
          players[0].rank +
          "&emsp;" +
          players[0].name +
          "&emsp;" +
          players[0].score;

          p3 =
          players[1].rank +
          "&emsp;" +
          players[1].name +
          "&emsp;" +
          players[1].score;
      }

      this.p1.html(player1);
      this.p2.html(player2);
      this.p3.html(player3);
    }

    handlePlayerControls(){
        if (keyIsDown(UP_ARROW)) {
            player.positionY -= 5;
            player.update();
          }

          if (keyIsDown(DOWN_ARROW)) {
            player.positionY += 5;
            player.update();
          }
      
          if (keyIsDown(LEFT_ARROW) ) {
            player.positionX -= 5;
            player.update();
          }
      
          if (keyIsDown(RIGHT_ARROW)){
            player.positionX += 5;
            player.update();
          }
    }
}