var canvas = document.getElementById("canvas")   //store canvas eleemnt as a js object
var ctx = canvas.getContext("2d")                //set up the context object relative to canvas

var tracing = new Image()
tracing.src = "images/shapes.png"           //<img> src= "filepath/filename.ext"

tracing.onload = function() {


    ctx.drawImage(tracing, 0, 0, 800, 800)

    //set up styling (fill color, stroke color, line width of stroke) before actually drawing
    ctx.fillStyle = "yellow"
    ctx.strokeStyle = "black"
    ctx.lineWidth = "5"

    //DRAWING THE RECTANGLE
    //contextObject.fillRect(x, y, width, height)
    ctx.fillRect(85, 302, 100, 100)
    ctx.strokeRect(85, 302, 100, 100)

    //DRAW THE LINE
    ctx.strokeStyle = "rgb(255,0,0)"
    ctx.lineWidth = "5"
    
    ctx.moveTo(85, 682)
       ctx.lineTo(278, 549)
       ctx.stroke()

    //DRAWING THE PENTAGON
    ctx.fillStyle = "#ff00ff"
    ctx.strokeStyle = "#00ffff"
    ctx.lineWidth = "5"


    ctx.moveTo(557,308)
    ctx.lineTo(667, 284)
    ctx.lineTo(724, 380)
    ctx.lineTo(650, 464)
    ctx.lineTo(548, 420)
    ctx.closePath()
    ctx.stroke()
    ctx.fill()

    //DRAWING THE STAR  
    ctx.fillStyle = "#ffff00"
    ctx.strokeStyle = "rgb(32,32,32)"
    ctx.lineWidth = "5"

    ctx.moveTo(635, 496)
    ctx.lineTo(669,554)
    ctx.lineTo(734, 567)
    ctx.lineTo(690, 615)
    ctx.lineTo(697,682)
    ctx.lineTo(635, 654)
    ctx.lineTo(575, 682)
    ctx.lineTo(583, 615)
    ctx.lineTo(538,567)
    ctx.lineTo(603, 554)
    ctx.closePath()
    ctx.stroke()
    ctx.fill()

    //DRAWING THE CIRCLE
    ctx.fillStyle = "#ffff00"
    ctx.strokeStyle = "red"
    ctx.lineWidth = "5"
   

    ctx.beginPath()
    ctx.arc(385.5, 441.5, 67, 0, (2 * Math.PI), false)
    ctx.closePath()
    ctx.stroke()
    ctx.fill()

    
      

   
}