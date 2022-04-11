//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var ball;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new GameObject();
	ball = new GameObject();

	player.x = 0;
	player.width = 17;

	ball.vx = 3;
	ball.vy = 6;

	ball.width = 30;
	ball.height = 30;
	ball.x = 20;
	ball.y = player.y;

	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	
	//Move the Player to the right
	if(d)
	{
		console.log("Moving down");
		player.y += 2;
	}
	if(a)
	{
		console.log("Moving up");
		player.y += -2;
	}
	context.clearRect(0,0,canvas.width, canvas.height);	
	player.move();
	
	//--------------Keep the Screen----------------------
	if(player.y < 0 + player.height/2)
	{
		player.y = 0 + player.height/2;
	}

	if(player.y > canvas.height - player.height/2)
    {
        player.y = canvas.height - player.height/2;

    }
	//---------------------------------------------------

	//Ball Stuff

    context.clearRect(0,0,canvas.width, canvas.height);

    //----Movement Using the ball's move() function----
    ball.move();
    //---------------------------------------------------

    if(ball.x > canvas.width - ball.width/2)
	{
		ball.x = canvas.width - ball.width/2
		ball.vx = -ball.vx;	
		
		if(ball.vx > 50)
		{
			ball.vx = 5
		}
	}

		if(ball.x > canvas.width - ball.width/2)
	{
		ball.x = canvas.width - ball.width/2
		ball.vx = -ball.vx;	
		
		if(ball.vx > 50)
		{
			ball.vx = 5
		}
	}


	if(ball.y > canvas.height - ball.height/2)
	{
		ball.y = canvas.height - ball.height/2
		ball.vy = -ball.vy;
		
		if(ball.vy > 50)
		{
			ball.vy = 5
		}
	}

	if(ball.y < 0 + ball.height/2)
	{
		ball.vy = -ball.vy;	
		
		if(ball.vy > 50)
		{
			ball.vy = 5
		}
	}

	if(player.hitTestObject(ball))
        {
            ball.vx = -ball.vx;
            ball.x = player.x + player.width/2 + ball.width/2

        }



	//Update the Screen
	player.drawRect();
	ball.drawCircle();
}

