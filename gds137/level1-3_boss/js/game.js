//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var ball;
var score = 0;
var gravity = 1;
var friction = 0.97;
var frictionY = 0.97;




	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new GameObject();

	player.y =  canvas.height - 50
	player.force = 1;
	
	ball = new GameObject();
	ball.force = 2;

	ball.vx = 5;
	ball.vy = 0;
	
	ball.width = 80;
	ball.height = 80;

	ball.color = "#ff00ff"

	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	 //----Movement Using the ball's move() function----
	 ball.vx*=friction;
	 ball.vy*=frictionY;
	 ball.vy += gravity
	 ball.move();
	//---------------------------------------------------

	//Ball Stuff

    context.clearRect(0,0,canvas.width, canvas.height);

    //---------------------------------------------------

    if(ball.x > canvas.width - ball.width/2) //Right of the screen boundary
	{
		ball.x = canvas.width - ball.width/2
		ball.vx = -ball.vx;	
		
	}

	if(ball.x < 0 + ball.width/2)
	{
		ball.vx = -ball.vx;

	}


	if(ball.y > canvas.height - ball.height/2) //Bottom of the screen boundary
	{
		score = 0
		ball.y = canvas.height - ball.height/2
		ball.vy = -ball.vy * 0.67
		
	}

	if(ball.y < 0 + ball.height/2) //Top of the screen boundary
	{
		ball.vy = -ball.vy;	
	}

		//Move the Player up and down

		
	if(d)
	{
		//console.log("right");
		player.vx += player.ax * player.force;
	}
	if(a)
	{
		//console.log("left");
		player.vx += player.ax * -player.force;
	}

	player.vx *= friction;

	player.x += player.vx;

	//------------------Paddle Collision BELOW------------------------------

	if(player.hitTestObject(ball))
        {
            ball.y = player.y - player.height/2 - ball.height/2
			ball.vy = -35;
			score++

			if(ball.x < player.x - player.width/3)
			{
				ball.vx = -ball.force*5;
			}
		
			else if(ball.x > player.x + player.width/3)
			{ 
				ball.vx = ball.force*5;
			}

			else if(ball.x < player.x - player.width/6)
			{
				ball.vx = -ball.force;
			}

			else if(ball.x > player.x + player.width/6)
			{
				ball.vx = ball.force;
			}
			
		}

//--------------Keep the Screen----------------------
if(player.x < 0 + player.width/2)
{
	player.x = 0 + player.width/2;
}

if(player.x > canvas.width - player.width/2)
{
	player.x = canvas.width - player.width/2;

}
	//Update the Screen
	
	player.drawRect();
	ball.drawCircle();

	context.lineWidth = 1;
	context.beginPath();
	context.moveTo(ball.x, ball.y);
	context.lineTo(player.x, player.y);
	context.strokeStyle = "black";
	context.stroke();
	context.restore();
	context.font = "bold 16px Arial";
	context.fillStyle = "#555555";
	context.fillText(`Score: ${score}`, 80, 25);
}

