// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000/60;
var player;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	player = new Circle();
	player2 = new Circle2();
	player3 = new Circle3();
	
	//------Declare the Player's speed on the x and y axis------
	player.vx = 3;
	player.vy = 3;

	player2.vx = 5;
	player2.vy = 5;

	player3.vx = 1;
	player3.vy = 1;
	//----------------------------------------------------
	
	timer = setInterval(animate, interval);


function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//----Movement Using the Player's move() function----
	player.move();
	player2.move2();
	player3.move3();
	//---------------------------------------------------
	
	//--------------Bounce of Right----------------------
	if(player.x > canvas.width - player.width/2)
	{
		player.x = canvas.width - player.width/2
		player.vx = -player.vx;	
		player.vx = player.vx - 2;
		if(player.vx > 50)
		{
			player.vx = 5
		}
	}

		if(player.x > canvas.width - player.width/2)
	{
		player.x = canvas.width - player.width/2
		player.vx = -player.vx;	
		player.vx = player.vx - 2;
		if(player.vx > 50)
		{
			player.vx = 5
		}
	}

	if(player.x < 0 + player.width/2)
	{
		player.vx = -player.vx;	
		player.vx = player.vx + 2
		if(player.vx > 50)
		{
			player.vx = 5
		}
	}


	if(player.y > canvas.height - player.height/2)
	{
		player.y = canvas.height - player.height/2
		player.vy = -player.vy;
		player.vy = player.vy - 2
		if(player.vy > 50)
		{
			player.vy = 5
		}
	}

	if(player.y < 0 + player.height/2)
	{
		player.vy = -player.vy;	
		player.vy = player.vy + 2
		if(player.vy > 50)
		{
			player.vy = 5
		}
	}
	

	//----Player2-----------------------------------------------

	if(player2.x > canvas.width - player2.width/2)
	{
		player2.x = canvas.width - player2.width/2
		player2.vx = -player2.vx;	
		player2.vx = player2.vx - 5;
		if(player2.vx > 100)
		{
			player2.vx = 10
		}
	}

		if(player2.x > canvas.width - player2.width/2)
	{
		player2.x = canvas.width - player2.width/2
		player2.vx = -player2.vx;	
		player2.vx = player2.vx - 5;
		if(player2.vx > 100)
		{
			player2.vx = 10
		}
	}

	if(player2.x < 0 + player2.width/2)
	{
		player2.vx = -player2.vx;	
		player2.vx = player2.vx + 5
		if(player2.vx > 100)
		{
			player2.vx = 10
		}
	}


	if(player2.y > canvas.height - player2.height/2)
	{
		player2.y = canvas.height - player2.height/2
		player2.vy = -player2.vy;
		player2.vy = player2.vy - 5
		if(player2.vy > 100)
		{
			player2.vy = 10
		}
	}

	if(player2.y < 0 + player2.height/2)
	{
		player2.vy = -player2.vy;	
		player2.vy = player2.vy + 5
		if(player2.vy > 100)
		{
			player2.vy = 10
		}
	}


	//---------------Player3-----------------------------

	if(player3.x > canvas.width - player3.width/2)
	{
		player3.x = canvas.width - player3.width/2
		player3.vx = -player3.vx;	
		player3.vx = player3.vx - 1;
		if(player3.vx > 20)
		{
			player3.vx = 1
		}
	}

		if(player3.x > canvas.width - player3.width/2)
	{
		player3.x = canvas.width - player3.width/2
		player3.vx = -player3.vx;	
		player3.vx = player3.vx - 1;
		if(player3.vx > 20)
		{
			player3.vx = 1
		}
	}

	if(player3.x < 0 + player3.width/2)
	{
		player3.vx = -player3.vx;	
		player3.vx = player3.vx + 1
		if(player3.vx > 20)
		{
			player3.vx = 1
		}
	}


	if(player3.y > canvas.height - player3.height/2)
	{
		player3.y = canvas.height - player3.height/2
		player3.vy = -player3.vy;
		player3.vy = player3.vy - 1
		if(player3.vy > 20)
		{
			player3.vy = 1
		}
	}

	if(player3.y < 0 + player3.height/2)
	{
		player3.vy = -player3.vy;	
		player3.vy = player3.vy + 1
		if(player3.vy > 20)
		{
			player3.vy = 1
		}
	}

	//---------------------------------------------------
	
	player3.drawCircle3();
	player.drawCircle();
	player2.drawCircle2();
}
