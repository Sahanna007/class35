class Player{

    cunstructor (){
        this.name= null ; 
        this.distance= 0;
        this.index= 0;
        
    }

    getPlayerCount(){
       database.ref('/playercount'). on("value",function(data){ 
           playercount= data.val()

       } )
       

    }

    updatePlayerCount(count) {
        database.ref('/').update({playercount:count})
    

    }

    playerInfo(){
        database.ref('/players/player'+ playercount). set({
            distance: this.distance, name:this.name
    
        }) 
    }

    getAllPlayers(){
        database.ref('players').on ("value" ,function(data){
            allPlayers= data.val()
        })
    }
}

