//define a varibale to access canvas properties by ID name from HTML
var canvas = document.getElementById("canvas")

//define the drawing context, you will always need this to draw on the canvas
var ctx = canvas.getContext("2d") //canvas var is the object! | ctx is specifically the canvas element in 2d

//craete a new image to eventually add to the canvas (instead of using an image tag in HTML (<img>))
var galaxy = new Image()

//galaxy is now an image object and we can access any of the imahes attributes (properties) that we might need
galaxy.src = "images/galaxy.jpeg" //we can access .src becuase galaxy is an image object

//now, "write" the image to the canvas page! an event must occur for this to heppen...
galaxy.onload = function() {

    //DRAWING AN IMAGE TO THE CANVAS    
    //CONTECT.DRAWINGIMAGE(ImgObject, x, y, width, height)
    ctx.drawImage(galaxy,0, 0, 800, 600)

    //DRAW A RECTANLGE
    //start with styling coices
    ctx.fillStyle = "rgb(0,0,255)" //the soild filll of this shape
    ctx.strokeStyle = "white"      //the outline of an object
    ctx.lineWidth = "5"             //width, in pixles, of the stroke

    //use .fillRect and .strokeRect once styles have been specified
    ctx.fillRect(30, 30, 100, 100) //context.fillRect(x, y, width, height)
    ctx.strokeRect(30, 30, 100, 100) //cpntext.strokeRect(x, y, width, height)
                                      //GOTTA MATCH fillRect if appyling to same rectangles!

    //DRAW A LINE

    //first need to move the "drawing cursor" to the starting point (x, y) of the line
    ctx.moveTo(0, 0)      //start position
    //next, draw a line to the ending point (x, y) of the line
    ctx.lineTo(800,600)

    /*
    ctx.strokeStyle = "black"        //chaging the stokeStylr and lineWidth before drawing will make sure it doesn't retain previous shapes info/styling
    ctx.lineWidth = "1"
    ctx.lineTo(800,600)  //end position of the line
*/

    ctx.stroke()         //draw the line!

    //DRAW SN OPPODITE LINE [Making an 'x' across the canvas]
    ctx.moveTo(800, 0)
    ctx.lineTo(0, 600)

    ctx.stroke()


    //DRAW A CIRCLE
    //requires a context.beingPath(), then context.arc(x, y, radius, startAngle, endAngle, isCounterClockwise)
    //starting x y is the CENTER of the circle; radius is half of the diameter
    //isCounterClockwise is a BOOLEAN --> TRUE or FALSE
    ctx.beginPath()
    ctx.arc(400, 300, 50, 0, (2 * Math.PI), false)
    ctx.lineTo(450, 250)
    ctx.closePath()
    ctx.fill()          //fills the above shape (the circle)
    


    //DRAW AN IRREGULAR SHAPE!
    //set up the styling first
    ctx.fillStyle = "#55ddef"
    ctx.strokeStyle = "yellow"
    ctx.lineWidth = "2"

    ctx.beginPath()     //begin for new shape
    ctx.moveTo(650, 100)        //starting point of the shape
    ctx.lineTo(700, 140)         //draws a line to the next point
    ctx.lineTo(675, 200)
    ctx.lineTo(625, 200)
    ctx.lineTo(600, 140)
    ctx.closePath()            //reunites previous end point (600, 140) with starting point
    ctx.fill()
    ctx.stroke()

    //DRAW ANOTHER IMAGE TO THE CANVAS
    //creates an instance of the image
    var mario = new Image()
    //links to the source of the image file
    mario.src = "images/mario.png"

    //callbak function loads the image and draws it to the canvas each time the page loads
    mario.onload = function () {

        ctx.drawImage(mario, 625, 120, 40, 80)

    }
}