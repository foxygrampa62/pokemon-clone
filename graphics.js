
let initializeGraphics = function (){
    let canvas = document.createElement("canvas")
    canvas.setAttribute ("width", "400")
    canvas.setAttribute ("height", "400")
    let ctx = canvas.getContext ("2d")
    ctx.beginPath();
    ctx.rect(0, 0, 400, 400);
    ctx.fillStyle = "white";
    ctx.fill();
    document.body.appendChild(canvas)
}
let renderEnemySprite = function(pokemonID){
    let myImage = new Image(100, 100);
    
    myImage.src = "/sprites/" + pokemonID + ".png"
    myImage.onload = function (){
        let canvas = document.querySelector ("canvas")
        let context = canvas.getContext("2d") 
        context.drawImage (myImage, 200, 25, 200, 200)
    }
}
let renderPlayerSprite = function(pokemonID){
    let myImage = new Image(100, 100);
    
    myImage.src = "/sprites/back/" + pokemonID + ".png"
    myImage.onload = function (){
        let canvas = document.querySelector ("canvas")
        let context = canvas.getContext("2d") 
        context.drawImage (myImage, 0, 125, 200, 200)
    }
}