$(document).ready(function(){

//create generate dice button

    var diceArray= [];
    $('<button id= generate></button>').html('Generate Die').appendTo('body');
    $('<button id=reroll></button>').html('ReRoll').appendTo('body');    
    $('<button id=remove></button>').html('Remove').appendTo('body');  
    $('#generate').click(function(){
        let d = new Die();
        diceArray.push(d);
    });

    $('#reroll').click(function(){
        for(i = 0; i< diceArray.length; i++){
            diceArray[i].roll();
        }
    });
    $('#remove').dblclick(function(){
        this.removeDie();
    })

    function Die(){    

        //die.prototype.roll ();
       this.div = $('<div id = "dice"></div');
       this.div.appendTo('body');
        
        //console.log(('Die'));
        this.roll();
        this.div.dblclick(this.removeDie.bind(this))
    // bind.this
        
        //console.log(number);

    }

    Die.prototype.roll = function() {
        this.value = Math.ceil(Math.random() * 6);
        this.div.html(this.value);
        console.log(this.div);
    }

    Die.prototype.reRoll = function() {

    }

    Die.prototype.removeDie = function(){
        this.div.remove();

        var index = diceArray.indexOf(this);
        diceArray.splice(index,1)



    }
})






//let  = function(){

  //  let number = function(){
    //    this.value = Math.ceil(Math.random() * 6);
       
      // return(number);
//}}


   



//create dice
//create dice number



