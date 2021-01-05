class Form {
    cunstructor(){
        this.input= createInput ('')
        this.button = createButton ('play')
        this.greeting= createElement("h1");
        this.input.position(200,200);
        this.button.position(250,255)


    }

    display(){
this.button.mousePressed(()=> {


    this.input.hide();
    this.button.hide();
    player.name= this.input.value();
    playercount= playercount+1
    player.index= playercount 
    player.playerInfo()
    player.updatePlayerCount(playercount)
    this.greeting.html("hello"+player.name)
    this.greeting.position(250,250)
})

}


} 
