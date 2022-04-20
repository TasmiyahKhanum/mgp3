class Form{

  constructor(){
   this.input = createInput("").attribute("placeholder", "Enter your username");
   this.playButton = createButton("Play");
   this.titleImg = createImg("assets/logo.png","gamelogo");
   this.greeting = createElement("h3");
  }

  setElementsPosition() {
   this.titleImg.position(10,760);
   this.input.position(width / 2 - 110, height / 2 - 40);
   this.playButton.position(width / 2 - 90, height / 2 + 20);
   this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }
  
  handleMousePressed(){
    this.playButton.mousePressed(()=>{
     this.input.hide();
     this.playButton.hide();
     this.titleImg.hide();
     var msg = `Welcome ${this.input.value()}
     </br> waiting for other players to join...`;
     this.greeting.html(msg);
     playerCount +=1;
     player.name = this.input.value();
     player.index = playerCount;
     player.addPlayer();
     player.updateCount(playerCount);
    });
  }

  display(){
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }

}