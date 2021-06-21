var SERVE = 1
var PLAY1 = 2;
var PLAY2 = 3;
var PLAY3 = 4;
var PLAY4 = 5;
var PLAY5 = 6;
var END = 0;
var END2= 7;
var gameState = 1;

var time = 200
var time2 = 200
var time3 = 200
var time4 = 200
var time5 = 200



function preload() {
 
  
  bg= loadImage("hulk.jpg")
  //load image for the treasure background
  bg2= loadImage("Deadpool.jpg")
  bg3= loadImage("doctorstrange.jpg")
  bg4= loadImage("spidey.jpg")
  bg5= loadImage("thor.jpg")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
 
button1 = createButton('START')
  button1.position(width/2-50,height/2);
  button1.style('background', 'lightgrey'); 
  button1.size(100)
  

  button2 = createButton('HULK')
  button2.position(width/2-600,height/2+200);
  button2.style('background', 'lightgrey'); 
  button2.size(100)
  button2.visible=false
  
  button3 = createButton('THOR')
  button3.position(width/2-300,height/2+200);
  button3.style('background', 'lightgrey'); 
  button3.size(100)
  button3.visible=false

  button4 = createButton('DR.STRANGE')
  button4.position(width/2,height/2+200);
  button4.style('background', 'lightgrey'); 
  button4.size(100)
  button4.visible=false

  button5 = createButton('DEADPOOL')
  button5.position(width/2+250,height/2+200);
  button5.style('background', 'lightgrey'); 
  button5.size(100)
  button5.visible=false

  button6 = createButton('SPIDEY')
  button6.position(width/2+500,height/2+200);
  button6.style('background', 'lightgrey'); 
  button6.size(100)
  button6.visible=false

}

function draw() {
   
 

 if(gameState === SERVE){
    background("black")
    fill("white")
  textSize(50)
  text("Guess the Marvel character",width/2-300,height/2-100)
  button1.visible=true

  button1.mousePressed(() => {
    {
       
  this.button1.hide();
   gameState = PLAY1
        
    }
});

  }

 if(gameState === PLAY1){
   clear()
   
   background(bg)
   
   fill("white")
   textSize(40)
   text("Time :"+time,width/2+200,height/2-250)
time = time-1

if(time === 0){
  gameState = END2
  this.button2.hide();
    this.button3.hide();
    this.button4.hide();
    this.button5.hide();
    this.button6.hide();
}

  button2.mousePressed(() => {
    {
        this.button2.hide();
   gameState = PLAY2
        
    }
})
button3.mousePressed(() => {
  {
    this.button2.hide();
    this.button3.hide();
    this.button4.hide();
    this.button5.hide();
    this.button6.hide();
      
 gameState = END2
      
  }
})
button4.mousePressed(() => {
  {
    this.button2.hide();
    this.button3.hide();
    this.button4.hide();
    this.button5.hide();
    this.button6.hide();
      
 gameState = END2
      
  }
})
button5.mousePressed(() => {
  {
    this.button2.hide();
    this.button3.hide();
    this.button4.hide();
    this.button5.hide();
    this.button6.hide();
      
 gameState = END2
      
  }
})
button6.mousePressed(() => {
  {
    this.button2.hide();
    this.button3.hide();
    this.button4.hide();
    this.button5.hide();
    this.button6.hide();
      
 gameState = END2
      
  }
});
 }

 if(gameState === PLAY2){
  clear()
  
  background(bg2)
  fill("white")
   textSize(40)
   text("Time :"+time2,width/2+200,height/2-250)
time2 = time2-1

if(time2 === 0){
  gameState = END2
  this.button2.hide();
    this.button3.hide();
    this.button4.hide();
    this.button5.hide();
    this.button6.hide();
}
button5.mousePressed(() => {
   {
       this.button5.hide();
  gameState = PLAY3
       
   }
})
button3.mousePressed(() => {
  {
      this.button2.hide();
      this.button3.hide();
      this.button4.hide();
      this.button5.hide();
      this.button6.hide();
      
 gameState = END2
     
  }
})
  
  button6.mousePressed(() => {
    {
      this.button2.hide();
      this.button3.hide();
      this.button4.hide();
      this.button5.hide();
      this.button6.hide();
        
   gameState = END2
        
    }
  })
;
}

if(gameState === PLAY3){
  clear()
  
  background(bg3)
 fill("white")
   textSize(40)
   text("Time :"+time3,width/2+200,height/2-250)
time3 = time3-1

if(time3 === 0){
  gameState = END2
  this.button2.hide();
    this.button3.hide();
    this.button4.hide();
    this.button5.hide();
    this.button6.hide();
} 
button4.mousePressed(() => {
   {
       this.button4.hide();
  gameState = PLAY4
  button5.mousePressed(() => {
    {
      
      this.button4.hide();
      this.button5.hide();
      this.button6.hide();
        
   gameState = END2
        
    }
  })
  button6.mousePressed(() => {
    {
      
      this.button4.hide();
      this.button5.hide();
      this.button6.hide();
        
   gameState = END2
        
    }
  })
   }
});
}

if(gameState === PLAY4){
  clear()
 
  background(bg4)
   fill("white")
   textSize(40)
   text("Time :"+time4,width/2+200,height/2-250)
time4 = time4-1

if(time4 === 0){
  gameState = END2
  this.button2.hide();
    this.button3.hide();
    this.button4.hide();
    this.button5.hide();
    this.button6.hide();
}
button6.mousePressed(() => {
   {
       this.button6.hide();
  gameState = PLAY5
       
   }

})
button5.mousePressed(() => {
  {
    
    this.button5.hide();
    this.button6.hide();
      
 gameState = END2
      
  }
});
}

if(gameState === PLAY5){
  clear()
  
  background(bg5)
  fill("white")
   textSize(40)
   text("Time :"+time5,width/2+200,height/2-250)
time5 = time5-1

if(time5 === 0){
  gameState = END2
  this.button2.hide();
    this.button3.hide();
    this.button4.hide();
    this.button5.hide();
    this.button6.hide();
}
button3.mousePressed(() => {
   {
       this.button3.hide();
       
  gameState = END
       
   }
})

}


if(gameState === END){
  background("black")
  fill("white")
  textSize(50)
  text("YOU WON !!",width/2-100,height/2)

}
if(gameState === END2){
  background("black")
  fill("white")
  textSize(50)
  text("YOU LOSE !!",width/2-100,height/2)

}


  
  drawSprites();
}