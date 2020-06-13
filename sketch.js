var playerCount;
var database;

var form, player, game;


function setup(){
  canvas = createCanvas(displayWidth - 20 , displayHeight - 30);

  database = firebase.database();

  form = new Form();
  player = new Player();

}



function draw(){
 
  form.display();

  

  
}


