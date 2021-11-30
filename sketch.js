var background,player,tree,woodcutter
var play,home,sound,nosound,about,bgstart,newsound,newnosound
var playimg,homeimg,soundimg,nosoundimg,aboutimg,bgstartimg
var gamestate="wait"

function preload() {
    bgimg=loadImage("buttons/backgroundright.gif")
    woodcutterimg=loadImage("buttons/woodcutterleft.gif")
    
    playimg=loadImage("buttons/gplay.PNG")
    homeimg=loadImage("buttons/ghome.PNG")
    soundimg=loadImage("buttons/gsound.PNG")
    nosoundimg=loadImage("buttons/gnosound.PNG")
    aboutimg=loadImage("buttons/gabout.PNG")
    logoimg=loadImage("buttons/logo1n.png")
    bgstartimg=loadImage("buttons/cuttingtree.gif")

}

function setup() {
    createCanvas(windowWidth,windowHeight)


    woodcutter=createSprite(windowWidth-100,windowHeight-200,50,50)
    woodcutter.addImage(woodcutterimg)
    woodcutter.scale=0.8
   

    logo=createSprite(windowWidth/2,windowHeight/2)
    logo.addImage(logoimg)

    play=createSprite((windowWidth/2-windowWidth/6),(windowHeight/2-windowHeight/4))
    play.addImage(playimg)
    play.scale=.8


    home=createSprite((windowWidth/2+windowWidth/6),(windowHeight/2-windowHeight/4))
    home.addImage(homeimg)
    home.scale=.75

    sound=createSprite((windowWidth/2-windowWidth/3),(windowHeight/2))
    sound.addImage(soundimg)
    sound.scale=.8

    nosound=createSprite((windowWidth/2+windowWidth/3),(windowHeight/2))
    nosound.addImage(nosoundimg)
    nosound.scale=0.7


    about=createSprite((windowWidth/2),50)
    about.addImage(aboutimg)
    about.scale=0.75

    newsound=createSprite(100,50)
    newsound.addImage(soundimg)
    newsound.scale=0.4

    newnosound=createSprite(windowWidth-100,50)
    newnosound.addImage(nosoundimg)
    newnosound.scale=0.35

    newhome=createSprite(windowWidth/2,100)
    newhome.addImage(homeimg)
    newhome.scale=0.35

    newhome.visible=false
    newsound.visible=false
    newnosound.visible=false  

  



}


function draw() {

   


    if (gamestate==="wait"){
    background(bgstartimg)
    woodcutter.visible=false
    play.visible=true
        about.visible=true
        sound.visible=true
        nosound.visible=true
        logo.visible=true
    }

    //play button functionality
    if (mousePressedOver(play)){
gamestate="playgame"
        
    }


    //about button functionality
    if (mousePressedOver(about)){
        gamestate="about"
               
            }

  
    //home button functionality
     if (mousePressedOver(home)){
        gamestate="wait"
                sound.visible=false
                nosound.visible=false
                logo.visible=true
            }       


    //newhome button functionality
    if(mousePressedOver(newhome)){
        gamestate="wait" 
        logo.visible=true  
            }
        

if (gamestate==="playgame"){

    background(bgimg)
    play.visible=false
    //play.destroy()
    logo.visible=false
        //about.destroy()
    about.visible=false
    sound.visible=false
    home.visible=false
    nosound.visible=false
    woodcutter.visible=true

   
    newsound.visible=true
    newnosound.visible=true  
    newhome.visible=true


}

if(gamestate==="wait"){

          

    play.visible=true
    about.visible=true
    sound.visible=true
    nosound.visible=true
    newsound.visible=false
    newnosound.visible=false
    home.visible=true 
    newhome.visible=false 
    logo.visible=true

} 

if(gamestate==="about"){
    background("red")
    sound.visible=false
    nosound.visible=false
    play.visible=false
    about.visible=false
    home.visible=true

    if (mousePressedOver(home)){
        gamestate="wait"
                  }}



   
        
    drawSprites()
}
