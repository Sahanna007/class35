class Game {
    constructor(){
        
    }

    getGameState(){
        database.ref ('/gamestate').on("value", function(data){
           gameState= data.val()
        })
    }

    updateGameState(state){
        database.ref ('/').update({gamestate:state})
    }
    
    
}
