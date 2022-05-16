//Define Booleans for each key
var w = false;
var s = false;
var a = false;
var d = false;
var sp = false;

//Add Event Listeners
document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

//Event Functions
function press(e)
{
	//---This logs key codes into the browser's console.
	//console.log("Pressed" + e.keyCode);
	
	if(e.keyCode == 87)
	{
		w = true;
	}
	if(e.keyCode == 83)
	{
		s = true;
	}

	if(e.keyCode == 65)
	{
		a = true;
	}

	if(e.keyCode == 68)
	{
		d = true;
	}

	if(e.keyCode == 32)
	{
		sp = true;
	}
}

function release(e)
{
	//---This logs key codes into the browser's console.
	//console.log("Released" + e.keyCode);
	
	//-------------Player 1 (W & S below)-----------------
	if(e.keyCode == 87)
	{
		w = false;
	}

	if(e.keyCode == 83)
	{
		s = false;
	}

	if(e.keyCode == 65)
	{
		a = false;
	}

	if(e.keyCode == 68)
	{
		d = false;
	}

	if(e.keyCode == 32)
	{
		sp = false;
	}
}
