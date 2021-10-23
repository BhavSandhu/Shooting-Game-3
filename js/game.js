class Game {
    constructor() {




    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();

            console.log(gameState)
        })


    }

    updateState() {
        database.ref('/').update({
            gameState: state
        });

    }

    start() {
        player=new Player()
        playerCount=player.getCount()
        form = new Form()
        form.display()


    }

    handleElements(){
    form.hide()


    }

    play() {
this.handleElements()


    }

}