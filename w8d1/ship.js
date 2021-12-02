//JS file to create a ship in the HTML canvas
function Ship() {

    //the 'this' keyword references the current object you are inside of (in the code block) EVERYTHING in javascript is an object. So when we say 'this' we are talking about the Ship()
    this.x = 100 //x-axis coord start position
    this.y = 100 //y-acis coord start position
    this.color = "black" //outine color
    this.fillStyle = "white" //interior color

    //velocity variable for the x and y axis
    this.vx = 0
    this.vy = 0

    //acceleration variables for the x and y axis
    this.ax = 1
    this.ay = 1

    //function "move" that will add velocity to the position of the ship
    this.move = function() {
        this.x += this.vx //adds the velocity value to x coord point
        this.y += this.vy //adds the velocity value to y coord point

    }

    this.draw = function() {

        /*
        DRAWING THE SHIP TO THE CANVAS (TRIANGLE)
        --------------------------------------------
        //save the current state of the cavas
        context.save()

        //move the point of origin 0,0 to the ship's x and y  coords
        context.translate(this.x, this.y)

        //draw the ship
        context.lineStyle = this.color
        context.fillStyle = this.fillStyle

        //start point at the current spot designaed on line 32 (around that)
        context.beginPath()

        //draw the triangle (ship)
        context.moveTo(25,0) //relative to 100,100 and not 0,0
        context.lineTo(-25, 25)
        context.lineTo(-25, -25)

        context.closePath()

        context.stroke()
        context.fill()
        context.restore()

        */

       //IMAGE AS THE SHIP
       
       var imageObj = new Image()
       imageObj.src = "images/xwing.png" //PNG FOR TRANSPARENTCY!

       //save the current state of the canvas
       context.save()

       //move the point of origin 0,0 to the ship's starting x and y coords
        context.translate(this.x, this.y)

        //draw the image to the canvas context
        //drawImage(image, x coord of the top left corner, y coord of the top left corner, width of image, height of image)
        context.drawImage(imageObj, -100, -50, 200, 100)
        context.restore()

    }//Ship.draw()



}//Ship()