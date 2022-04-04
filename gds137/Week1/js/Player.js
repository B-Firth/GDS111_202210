// JavaScript Document
function Circle()
{
	//player's location
	this.x = canvas.width/2;
	this.y = canvas.height/2;
	
	//player's dimensions
	this.width = 100;
	this.height = 100;
	
	//player's velocity or speed on each axis
	this.vx = 0;
	this.vy = 0;
	
	//player's color
	this.color = "#0000FF";

	this.force = 1;
	
	//This draws the player to the screen
	this.drawRect = function()
	{
		context.save();
			context.fillStyle = this.color;
			context.translate(this.x, this.y);
			context.fillRect((-this.width/2), (-this.height/2), this.width, this.height);
		context.restore();
		
	}


	this.drawCircle = function()
	{
		context.save();
		context.fillStyle = this.color;
			context.translate(this.x, this.y);
		context.beginPath();
		context.arc(0,0,this.width/2,0,360*Math.PI/180,true);
		context.closePath();
		context.fill();
		context.restore();
		
	}	
	
	//This changes the player's position
	this.move = function()
	{
		this.x += this.vx;
		this.y += this.vy;
	}
}




function Circle2()
{
	//player's location
	this.x = 50
	this.y = 60;
	
	//player's dimensions
	this.width = 50;
	this.height = 50;
	
	//player's velocity or speed on each axis
	this.vx = 10;
	this.vy = 10;
	
	//player's color
	this.color = "#00FFFF";

	this.force = 1;

	this.drawCircle2 = function()
	{
		context.save();
		context.fillStyle = this.color;
			context.translate(this.x, this.y);
		context.beginPath();
		context.arc(0,0,this.width/2,0,360*Math.PI/180,true);
		context.closePath();
		context.fill();
		context.restore();
		
	}	
	
	//This changes the player's position
	this.move2 = function()
	{
		this.x += this.vx;
		this.y += this.vy;
	}
}



function Circle3()
{
	//player's location
	this.x = 150
	this.y = 150;
	
	//player's dimensions
	this.width = 250;
	this.height = 250;
	
	//player's velocity or speed on each axis
	this.vx = 2;
	this.vy = 2;
	
	//player's color
	this.color = "#551A8B";

	this.force = 1;

	this.drawCircle3 = function()
	{
		context.save();
		context.fillStyle = this.color;
			context.translate(this.x, this.y);
		context.beginPath();
		context.arc(0,0,this.width/2,0,360*Math.PI/180,true);
		context.closePath();
		context.fill();
		context.restore();
		
	}	
	
	//This changes the player's position
	this.move3 = function()
	{
		this.x += this.vx;
		this.y += this.vy;
	}
}
