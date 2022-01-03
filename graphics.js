
let initializeGraphics = function (){
    let canvas = document.createElement("canvas")
    document.body.appendChild(canvas)
}
let renderEnemySprite = function(pokemonID){
    let myImage = new Image(100, 100);
    
    myImage.src = "/sprites/" + pokemonID + ".png"
    myImage.onload = function (){
        let canvas = document.querySelector ("canvas")
        let context = canvas.getContext("2d") 
        context.drawImage (myImage, 50, 50, 50, 50)
    }
}
