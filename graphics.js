
let initializeGraphics = function (){
    let canvas = document.createElement("canvas")
    let context = canvas.getContext("2d") 
    let myImage = new Image(100, 100);
    let imageElement = document.createElement ("img")
    imageElement.setAttribute ("src", "/sprites/6.png" )
    imageElement.setAttribute ("width", "100" )
    imageElement.setAttribute ("height", "100" )
    myImage.src = "/sprites/6.png"
    myImage.onload = function (){
        context.drawImage (imageElement, 50, 50, 50, 50)
    }
    
    console.log(context)
    document.body.appendChild(canvas)
    document.body.appendChild(imageElement)
}