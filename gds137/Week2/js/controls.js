//Define Booleans for each key
var a = false;
var d = false;
var up = false;
var dwn = false;

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
		a = true;
	}
	if(e.keyCode == 83)
	{
		d = true;
	}

	if(e.keyCode == 38)
	{
		up = true;
	}

	if(e.keyCode == 40)
	{
		dwn = true;
	}
}

function release(e)
{
	//---This logs key codes into the browser's console.
	//console.log("Released" + e.keyCode);
	
	//-------------Player 1 (W & S below)-----------------
	if(e.keyCode == 87)
	{
		a = false;
	}
	if(e.keyCode == 83)
	{
		d = false;
	}

	//-----------Player 2 (Arrow keys below)--------------
	if(e.keyCode == 38)
	{
		up = false;
	}

	if(e.keyCode == 40)
	{
		dwn = false;
	}
}
