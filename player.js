class Player {

    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }

   

    
    
    update(){
        var playerIndex = "users/User";
        database.ref(playerIndex).set({
          name:this.name,
        });
      }

  



}