var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d')
var timer = requestAnimationFrame(main)
var ship
var numAsteroids = 20
var numShields = 1
var asteroids = []
var shields = []
var gameOver = true
var gameStates = []
var currentState = 0
var score = 0
var highScore = 0
var Shielded = false

var shipSprite = new Image()
shipSprite.src = "Images/tie.png"
shipSprite.onload = function(){
   // timer = requestAnimationFrame(main)

}

var shipShielded = new Image()
shipShielded.src = "Images/tieShielded.png"
shipShielded.onload = function(){
   

}

var asteroidSprite = new Image()
asteroidSprite.src = "Images/asteroid.png"
asteroidSprite.onload = function() {
    
}

var shieldSprite = new Image()
shieldSprite.src = "Images/Shield.png"

var gamesrt = new Image() 
gamesrt.src = "Images/hanger.jpg"
gamesrt.onload = function() {

}

var gameover = new Image()
gameover.src = "Images/gameover.jpg"
gameover.onload = function() {
    
} 


//utility functions
function randomRange(high, low){
    return Math.random() * (high-low) + low
}

function gameStart(){
    //For Loop to create the instances of Asteroids
    for(var i = 0; i < numAsteroids; i++){
        asteroids[i] = new Asteroid()
    }

    //Create an instance of the PlayerShip
    ship = new PlayerShip()
}

//Constructor Function for Asteroid Class
function Asteroid(){
    this.radius = randomRange(15,3)
    this.x = randomRange(canvas.width - this.radius, this.radius) + canvas.width
    this.y = randomRange(canvas.height - this.radius, this.radius) //- canvas.height
    this.vy = randomRange(5, 2.5) //Vertical Velocity (speed falling down)
    this.vx = randomRange(-5, -2.5) //Horizontial Velocity (speed going to the right to left)
    this.color = "white"

    this.drawAsteroid = function(){
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = this.color
        //ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true)
        ctx.drawImage(asteroidSprite, this.x - this.radius, this.y - this.radius, this.radius*2, this.radius*2)
        ctx.closePath()
        ctx.fill()
        ctx.restore()

    }
}

    function Shield(){
        this.radius = randomRange(15,10)
        this.x = randomRange(canvas.width - this.radius, this.radius) + canvas.width
        this.y = randomRange(canvas.height - this.radius, this.radius) //- canvas.height
        this.vy = randomRange(5, 2.5) //Vertical Velocity (speed falling down)
        this.vx = randomRange(-5, -2.5) //Horizontial Velocity (speed going to the right to left)
        this.color = "lightskyblue"
    
        this.drawShield = function(){
            ctx.save()
            ctx.beginPath()
            ctx.fillStyle = this.color
            //ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true)
            ctx.drawImage(shieldSprite, this.x - this.radius, this.y - this.radius, this.radius*2, this.radius*2)
            ctx.closePath()
            ctx.fill()
            ctx.restore()
    
        }

    }





//Setup Keyboard Event Handlers 
document.addEventListener("keydown", pressKeyDown)
document.addEventListener("keyup", pressKeyUp)

function pressKeyDown(e){
    if (!gameOver) {
        if (e.keyCode == 87) {
            ship.up = true
        }
        if (e.keyCode == 83) {
            ship.left = true
        }
        if (e.keyCode == 68) {
            ship.right = true
        }
        if (e.keyCode == 65) {
            ship.down = true
        }
    }

    if(gameOver){

        //checking for spacebar
        if(e.keyCode == 32){
            if(currentState == 2){
                //game over screen reatarts game
                currentState = 0
                //resets number of asteroids
                numAsteroids = 20
                //empties asteroids array
                asteroids = []
                //resets score
                score = 0
                gameStart()
                main()
            }
            else{
                //main screen starts game 
                gameStart()
                currentState = 1
                gameOver = false
                main()
                scoreTimer()
                console.log("space")

            }
            
        }
    }
    
}

function pressKeyUp(e){
    if(!gameOver){
        if (e.keyCode == 87) {
            ship.up = false
        }
        if (e.keyCode == 83) {
            ship.left = false
        }
        if (e.keyCode == 68) {
            ship.right = false
        }
        if (e.keyCode == 65) {
            ship.down = false
        } 
    }
    
}

//constructor function
function PlayerShip(){
    this.x = canvas.width/2
    this.y = canvas.height/2
    this.w = 20
    this.h = 20
    this.vx = 0
    this.vy = 0
    this.up = false
    this.down = false
    this.left = false
    this.right = false
    this.flamelength = 30

    this.drawShip = function(){
       ctx.save()
        ctx.translate(this.x, this.y)
        if(this.up || this.left || this.right){
            ctx.save()
            //Changes the drawing values to animate the flame
            if(this.flamelength == -40){
                this.flamelength = -30
                ctx.fillStyle = "lime"
            }else{
                
                this.flamelength = -40
                ctx.fillStyle = "green"
            }
            ctx.beginPath()
            ctx.moveTo(this.flamelength, 0)
            ctx.lineTo(-10,-5)
            ctx.lineTo(-10,5)
            ctx.lineTo(this.flamelength, 0)
            ctx.closePath()
            ctx.fill()
            ctx.restore()

        }
        ctx.fillStyle = "red"
        /*ctx.beginPath()
        ctx.moveTo(0, -10)
        ctx.lineTo(10, 10)
        ctx.lineTo(-10, 10)
        ctx.lineTo(0, -10)
        ctx.closePath()
        ctx.fill();
        ctx.restore() */

        if(Shielded == false){
            ctx.drawImage(shipSprite, -20, -20, 40, 40) 
        console.log("shipSprite drawImage()")

        ctx.restore()
        }
        if(Shielded == true){
            ctx.drawImage(shipShielded, -20, -20, 40, 40)
            console.log("shipShielded drawImage()")

            ctx.restore()
        }

        //if (invincible {...... do somethings})
        
    }

    this.move = function(){
        this.x += this.vx
        this.y += this.vy

        //bottom boundary of screen
        if(this.y > canvas.height - this.h/2){
            this.y = canvas.height - this.h/2
            this.vy = 0
        }
        //top boundary of screen
        if(this.y < this.h/2){
            this.y = this.h/2
            this.vy = 0
        }

        //right boundary of screen
        if(this.x > canvas.width - this.w/2){
            this.x = canvas.width - this.w/2
            this.vx = 0
        }
        //left boundary of screen
        if(this.x < this.w/2){
            this.x = this.w/2
            this.vx = 0
        }
    }
      
}

//Main Screen
gameStates[0] = function(){
    ctx.save()
    ctx.drawImage(gamesrt,0,0,1000,900)
    ctx.font = '40px Times New Roman'
    ctx.fillStyle = "white"
    ctx.textAlign = "center"
    ctx.fillText("Imperial Astroid Run", canvas.width/2, canvas.height/2-30)
    ctx.font = "20px Times New Roman"
    ctx.fillText("Press Space to Launch Your Fighter", canvas.width/2, canvas.height/2 + 20)
    ctx.restore()

}
ctx.drawImage(shipSprite, -20, -20, 40, 40) 
        console.log("shipSprite drawImage()")

        ctx.restore()

//Game Screen
gameStates[1] = function(){
    //code for displaying score
    ctx.save()
    ctx.font = "15px Arial"
    ctx.fillStyle = "white"
    ctx.fillText("Score: " + score.toString(), canvas.width - 150, 30)
    ctx.restore()

    //Vertical 
    if(ship.up == true){
        ship.vy = -10
    }
    else if(ship.left == true){
        ship.vy = 10
    }else{
        ship.vy = 0
    }
    
    //Horizontal Movement
    if(ship.right == true){
        ship.vx = 3
    }else{
        ship.vx = -3 // controls graviy going down /
    }

    //Loops through all asteroids and can check their position
    for(var i = 0; i < asteroids.length; i++){
        var dX = ship.x - asteroids[i].x
        var dY = ship.y - asteroids[i].y
        var distance = Math.sqrt((dX*dX)+(dY*dY))

        if(detectCollision(distance, (ship.h/2 + asteroids[i].radius)) && Shielded == false){
            console.log("hit asteroid")
            gameOver = true
            currentState = 2
            main()
            
        }


        if(asteroids[i].y > canvas.height + asteroids[i].radius){
            asteroids[i].x = randomRange(canvas.width - asteroids[i].radius, asteroids[i].radius)
            asteroids[i].y = randomRange(canvas.height - asteroids[i].radius, asteroids[i].radius) -  canvas.height
        }
        if(gameOver == false){
            asteroids[i].x += asteroids[i].vx
        }
            asteroids[i].drawAsteroid()
        
    }


    for(var i = 0; i < shields.length; i++){
        var dX = ship.x - shields[i].x
        var dY = ship.y - shields[i].y
        var distance = Math.sqrt((dX*dX)+(dY*dY))

        if(detectCollision(distance, (ship.h/2 + shields[i].radius))){
            console.log("get shield!")
            Shielded = true
            
            if(Shielded == true){
                setTimeout(TimeInterval, 5000)
            }
            
            
        }


        if(shields[i].y > canvas.height + shields[i].radius){
            shields[i].x = randomRange(canvas.width - shields[i].radius, shields[i].radius)
            shields[i].y = randomRange(canvas.height - shields[i].radius, shields[i].radius) -  canvas.height
        }
        if(gameOver == false){
            shields[i].x += shields[i].vx
        }
            shields[i].drawShield()
        
    }

    if(!gameOver){
        ship.move()
        ship.drawShip()
    }

    while(asteroids.length < numAsteroids){
        asteroids.push(new Asteroid())
    }
    while(shields.length < numShields){
        console.log("--Shield--")
        shields.push(new Shield())
    }
}

//Game Over
gameStates[2] = function(){
    if(score > highScore){
        //set a new high score
        highScore = score
        ctx.save()
        ctx.drawImage(gameover ,0,0,1000,900)
        ctx.font = "40px Arial"
        ctx.fillStyle = "red"
        ctx.textAlign = "center"
        ctx.fillText("Mission Failure, your high score score was: " + score.toString() , canvas.width/2, canvas.height/2-200)
        ctx.fillText("Your new high score is: " + highScore.toString() , canvas.width/2, canvas.height/2+90)
        ctx.fillText("New Record", canvas.width/2, canvas.height/2)
        ctx.font = "20px Arial"
        ctx.fillText("Press Space to Sortie Again", canvas.width/2, canvas.height/2 + 150)
        ctx.restore()

    }else{
        //keep same score new high score
        ctx.save()
        ctx.font = "30px Arial"
        ctx.fillStyle = "white"
        ctx.textAlign = "center"
        ctx.fillText("Game Over, your score was: " + score.toString() , canvas.width/2, canvas.height/2-60)
        ctx.fillText("Your high score is: " + highScore.toString() , canvas.width/2, canvas.height/2-30)
        ctx.font = "15px Arial"
        ctx.fillText("Press Space to Play Again", canvas.width/2, canvas.height/2 + 20)
        ctx.restore()
    }
    
   
}

function main(){
    //clear canvas 
    //shipY-=1
    ctx.clearRect(0,0,canvas.width, canvas.height)

    gameStates[currentState]()

    if(!gameOver){
       timer = requestAnimationFrame(main)
    }
    
}

function detectCollision(distance, calcDistance){
    return distance < calcDistance
}

//Timer for Score
function scoreTimer(){
    if(!gameOver){
        score++
        //using modulus  that returns remainder of a decimal
        //checks to see if remainder is divisble by 5
        if(score % 2 == 0){
            numAsteroids += 10
            console.log(numAsteroids)

        }
        if(score % 10 == 0){
            numShields += 1
            console.log("numShields")
        }

        setTimeout(scoreTimer, 1000)
    }

}
function TimeInterval() {
    Shielded = false
    clearTimeout()
}
