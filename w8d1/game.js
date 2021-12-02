//JS file that runs the game and connects the functionality of ship.js and controls.js to the HTML

var canvas
var context

//variables for the animation timer
var timer

var ship //the ship

var friction //slows down velocity

//function to ready the canvas and starting position of the ship
$(document).ready(function(e) {

    //assign the canvas element to the canvas var
    canvas = $("#canvas") //JQuery version of the document.getElementById

    context = canvas.get(0).getContext("2d")

    ship = new Ship() //Ship() was defined in ship.js

    //friction and POWER
    friction = 0.95
    ship.power = 1
    timer = setInterval("animate();", 33) //33 millieseconds (1000 would be 1 second)

}) //end of ready()


function animate() {

    context.clearRect(0,0,canvas.width(), canvas.height())

    //check to see if the keyCode values are up or down [connects to the controls.js]
    if(up) { //if the current value of 'up' is TRUE

        //when key is TRUE which means we are pressing the key down) 
        ship.vy -= ship.ax * ship.power
        //line 39 same as: ship.vy = ship.vy = (ship.ax * ship.power)
        //ship's velocity of y axis is LOWERED by its current acceleration and power

    }

    if(down) { //current vlaue of 'down' is TRUE

        ship.vy += ship.ax * ship.power

    }

    if(right) {
        //adding acceleration (moving towards the right)
        ship.vx += ship.ax * ship.power
    }

    if(left) {
        //subtracting acceleration
        ship.vx -= ship.ax * ship.power
    }

    //apply friction to the velocity -- realisic slow down, speed increases are never instant
    ship.vx *= friction
    ship.vy *= friction

    //move and redraw the ship .functions() are from ship.js [Ship()]
    ship.move()
    ship.draw()

    if(ship.x > canvas.width() + 25) {
        //if the current ship x coord is freater than (beyond) the canvas width + 25 (size of the ship)

        ship.x = -25
    }

    if(ship.x < 0 - 25) { //0 is the x cooord of the left margin, 25 is the length of the ship
        //if the current ship x coord is freater than (beyond) the canvas width + 25 (size of the ship)

        ship.x = 825 //800 is the x corrd of the right edge
    }

    

    if(ship.y > canvas.height() + 25) {
        //if the current ship x coord is freater than (beyond) the canvas width + 25 (size of the ship)

        ship.y = -25
    }

    if(ship.y < 0 - 25) { //0 is the y cooord of the top margin, 25 is the length of the ship
        //if the current ship x coord is freater than (beyond) the canvas width + 25 (size of the ship)

        ship.y = 825 //800 is the y corrd of the left edge
    }

}

