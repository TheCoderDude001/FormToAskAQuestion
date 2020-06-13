class Form {

    constructor(){

        this.input = createInput("Name");
        this.button = createButton('Enter');
        this.greeting = createElement('h2');
        this.title = createElement('h2');
        this.subtitle = createElement('h3');
    }

    hide(){

        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }


    display(){

        this.title.html("An Important Question");
        this.subtitle.html("Do you think coding is awesome? If you agree, then type your name and click enter!");
        this.title.position(displayWidth/2, 0);
        this.subtitle.position(displayWidth/2, displayHeight/2-250);
        this.input.position(displayWidth/2, displayHeight/2 -80);
        this.button.position(displayWidth/2, displayHeight/2);
        
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            player.update();
            this.greeting.html("Thank you for helping us out, " + player.name + "!")
            this.greeting.position(displayWidth/2, displayHeight/4);
          });

    }

}