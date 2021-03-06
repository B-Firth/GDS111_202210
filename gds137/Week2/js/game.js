//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var ball;
var p1wins = 0;
var p2wins = 0;
var img = document.getElementById("Ric");

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new GameObject();
	player2 = new GameObject();
	
	ball = new GameObject();

	player.x = 0;
	player2.x = 1024;

	player.width = 17;
	player2.width = 17;

	ball.vx = -6;
	ball.vy = 6;

	ball.width = 30;
	ball.height = 30;
	ball.x = canvas.width/2;
	ball.y = player.y;
	ball.color = "#01FFFF"

	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	
	//Move the Player up and down
	if(d)
	{
		console.log("Moving down");
		player.y += 5;
	}
	if(a)
	{
		console.log("Moving up");
		player.y += -5;
	}

	if(dwn)
	{
		console.log("Moving down");
		player2.y += 5;
	}
	if(up)
	{
		console.log("Moving up");
		player2.y += -5;
	}
	context.clearRect(0,0,canvas.width, canvas.height);	
	player.move();
	player2.move();
	
	//--------------Keep the Screen----------------------
	if(player.y < 0 + player.height/2)
	{
		player.y = 0 + player.height/2;
	}

	if(player.y > canvas.height - player.height/2)
    {
        player.y = canvas.height - player.height/2;

    }

	if(player2.y < 0 + player2.height/2)
	{
		player2.y = 0 + player2.height/2;
	}

	if(player2.y > canvas.height - player2.height/2)
    {
        player2.y = canvas.height - player2.height/2;

    }
	//---------------------------------------------------

	//Ball Stuff

    context.clearRect(0,0,canvas.width, canvas.height);

    //----Movement Using the ball's move() function----
    ball.move();
    //---------------------------------------------------

    /*if(ball.x > canvas.width - ball.width/2) //Right of the screen boundary
	{
		ball.x = canvas.width - ball.width/2
		ball.vx = -ball.vx;	
		
		if(ball.vx > 50)
		{
			ball.vx = 5
		}
	}*/


	if(ball.y > canvas.height - ball.height/2) //Bottom of the screen boundary
	{
		ball.y = canvas.height - ball.height/2
		ball.vy = -ball.vy;
		
		if(ball.vy > 50)
		{
			ball.vy = 5
		}
	}

	if(ball.y < 0 + ball.height/2) //Top of the screen boundary
	{
		ball.vy = -ball.vy;	
		
		if(ball.vy > 50)
		{
			ball.vy = 5
		}
	}

	if(ball.x < 0) //RESET ball to middle (Left Side)
	{
		ball.x = canvas.width/2
		ball.vx = ball.vx
		p2wins = p2wins + 1
		console.log(p2wins)
	}

	if(ball.x > 1024) //RESET ball to middle (Right Side)
	{
		ball.x = canvas.width/2
		ball.vx = ball.vx
		p1wins = p1wins + 1
		console.log(p1wins)
	}

	//------------------Paddle Collision BELOW------------------------------

	if(player.hitTestObject(ball))
        {
			ball.vx = -ball.vx;
            ball.x = player.x + player.width/2 + ball.width/2
    
			 //ball hits top
			if(ball.y < player.y - player.height/6)
				 {
			  	 ball.vy = -5;
			 	}
		
			 //ball hits bottom
			if(ball.y > player.y + player.height/6)
				 {
			  	 ball.vy = +5;
			 	}
			
		}

	if(player2.hitTestObject(ball))
        {
			ball.vx = -ball.vx;
            ball.x = player2.x - player2.width/2 - ball.width/2
    
			 //ball hits top
			if(ball.y < player2.y - player2.height/6)
				 {
			  	 ball.vy = -5;
			 	}
		
			 //ball hits bottom
			if(ball.y > player2.y + player2.height/6)
				 {
			  	 ball.vy = +5;
			 	}
			
		}


	//Update the Screen
	
	player.drawRect();
	player2.drawRect();
	ball.drawCircle();
	context.drawImage(ric, ball.x-17, ball.y-16, ball.width+3, ball.height+3);

	context.lineWidth = 3;
	context.beginPath();
	context.moveTo(512, 0);
	context.lineTo(512, 801);
	context.strokeStyle = "blue";
	context.stroke();
	context.restore();

	context.font = "20px Georgia";
	context.fillText(`Player 1's Score: ${p1wins}   ||   Player 2's Score:  ${p2wins}`, 330, 50);
}

