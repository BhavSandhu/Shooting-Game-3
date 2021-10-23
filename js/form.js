class Form {
    constructor() {
        this.input = createInput();
        this.button = createButton('Play');
        this.title = createElement('h2');
        this.greeting = createElement('h2');

    }
    hide(){
this.greeting.hide()
this.button.hide()
this.input.hide()


    }
    display() {
        this.input.position(width / 2, height / 2);
       
        this.button.position(this.input.x + this.input.width + 100, height / 2);
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            this.title.hide()
            playerCount=playerCount+1
            player.name = this.input.value();
            gameState=1
        });
        this.title.html("Shooting Game")
        this.title.position(width / 2, 50)
    }

}