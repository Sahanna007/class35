var ball;
var database;
var playercount= 0;
var gameState= 0;
var allPlayers;
var form, game, player

function setup(){
    createCanvas(500,500);

    database= firebase.database();

    form= new Form ()
    game= new Game()
    player= new Player()
    game.getGameState()
    console.log(gameState)
    if(gameState===0){
        form.display();
        player.getPlayerCount();
    }
    

   
}

function draw(){
    
}



