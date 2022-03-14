/*----------------------------------------------
This file contains the data used to render the player's sprites
Properties:
	Object: info | information about the sprite file
		String: info.src | The location of the spritesheet
	Object: states | contains the data for each animation state
		Object: [`state name`] | The data used to render the idle state
			Number: fps | The frame rate in which to render the animation
			Boolean: cycle | Whether or not the animation will loop
			Array: frames| Contains objects with geometric data for each frame of animtati.
					Must contain at least one frame object.
					The animation will run for however many frame objects are added to the array
				Object: [index number] | A frame of animation
					Number: width | the actual 1/1 horizontal size of the portion of image file to be rendered
					Number: height | the actual 1/1 vertical size of the portion of image file to be rendered
					Number: startX | the horizontal starting point of the portion of image file to be rendered
					Nunber: startY | the vertical starting point of the portion of image file to be rendered
/*----------------------------------------------*/

var playerData ={
	info:{
		src:`images/firthAnim.png`
	},
	states:{
		//The idle animation 
    	idle:
		{
			fps:25,
			cycle:true,
			frames:
			[
				{width:500, height:485, startX:2571, startY:1},
				{width:500, height:485, startX:3085, startY:1},
				{width:500, height:485, startX:3599, startY:1},
				{width:500, height:485, startX:4113, startY:1},
				{width:500, height:485, startX:4627, startY:1}
				
			]
		},
		//The walwidth:128, height:128,
		walk:
		{
			fps:10,
			cycle:true,
			frames:
			[
				{width:500, height:485, startX:1029, startY:0},
				{width:500, height:485, startX:1543, startY:0},
				{width:500, height:485, startX:2057, startY:0}
				
			]
		},
		//The jump animation 
		jump:
		{
			fps:15,
			cycle:false,
			frames:
			[
				{width:500, height:485, startX:5141, startY:1}
			]
		},
		//The crouch animation 
		crouch:
		{
			fps:15,
			cycle:true,
			frames:
			[
				{width:500, height:485, startX:515, startY:1}
			]
		},
		//The attack animation 
		attack:
		{
			fps:3,
			cycle:false,
			//width:300,
			frames:
			[
				{width:500, height:485, startX:1, startY:1}
				
			]
		}
	}
		
}