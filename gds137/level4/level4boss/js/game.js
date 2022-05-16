
	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
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
var img = document.getElementById("f18");	
var bullets = [];
var currentBullet = 0;
var fireCounter = 30;
var firerate = 30;
var range = canvas.width/2
var bulletAmount = 25;
var dir = {x:1, y:0};

var bullet;


	
	//Instantiate the Player
	player = new GameObject();
	player2 = new GameObject();
	
	ball = new GameObject();

	player.x = 300;
	player2.x = 1024;

	player.width = 100;
	player.height = 15
	player2.width = 17;

	for(var b = 0; b < bulletAmount; b++)
	{
		bullet = new GameObject({force:10, width: 5, height:5});
		bullet.x = player.x;
		bullet.y = -10000;
	}

	bullet.vx = 25;
	bullet.vy = 0;

	ball.width = 30;
	ball.height = 30;
	ball.x = canvas.width/2;
	ball.y = player.y;
	ball.color = "#01FFFF"

	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	var fireRate = 25
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	
	//Move the Player up and down
	if(s)
	{
		console.log("Moving up");
		player.y += 10;
	}
	if(w)
	{
		console.log("Moving dwn");
		player.y += -10;
	}

	if(a)
	{
		console.log("Moving fwrd");
		player.x += -10;
	}
	if(d)
	{
		console.log("Moving back");
		player.x += 10;
	}

	fireCounter--;
	if(sp)
	{
		if(fireCounter <= 0)
		{
			console.log("firing");
			/*bullets[currentBullet].x = player.x;
			bullets[currentBullet].y = player.y;

			bullets[currentBullet].vx = dir.x * bullets[currentBullet].force;
			bullets[currentBullet].vy = dir.y * bullets[currentBullet].force;*/
			bullet.x = player.x + 15;
			bullet.y = player.y;
			fireCounter += fireRate;
			
			
		}
	}
	else
	{
		fireCounter = 0;

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

	if(player.x < 0 + player.width/2)
	{
		player.x = 0 + player.width/2;
	}

	if(player.x > canvas.width - player.width/2)
    {
        player.x = canvas.width - player.width/2;

    }
	//---------------------------------------------------

	/*for(var b = 0; b < bullets.length; b++)
	{
		var dx = bullets[b].x - player.x;
		var dy = bullets[b].y - player.y;
		var dist = Math.sqrt(dx + dy * dy);
		if(dist >= range)
		{
			bullets[b].vx = 0;
			bullets[b].y = -1000
		}

		bullets[b].move()
		bullets[b].color = "#FFAA1D"
		bullets[b].drawRect2();
	}*/



	//Update the Screen
	bullet.color = "#FFAA1D"
	bullet.drawRect2();

	bullet.move();
	player.drawRect();
	context.drawImage(f18, player.x-95, player.y-65, player.width+86, player.height+100);
	//player2.drawRect();
	//ball.drawCircle();

	context.restore();

	context.font = "20px Georgia";
	context.fillStyle = "#00FF00"
	context.fillText(`Hex 1 Score: ${p1wins}   ||   Hex 2 Score:  ${p2wins}`, 330, 50);

}

