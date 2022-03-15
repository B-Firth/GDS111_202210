var x=false;
var caveData ={
	info:{
		layout:[
			[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[3,x,x,7,6,2,7,8,x,x,6,6,x,7,7,x,2,2,2,x,x,6,x,x,2,x,8,7,6,7,x,x,x,2,1],
			[3,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,1],
			[3,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,1],
			[3,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,1],
			[3,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,1],
			[x,x,x,x,x,x,x,x,x,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]
			
			
		],
		src:`images/caveTex.png`,
	},
	states:
	[		
			{
				fps:5, //0 (stone top corner)
				cycle:false,
				frames:[
					{width:64, height:64, startX:331, startY:1}
				]
			},
			{
				fps:1, //1 (stone sq)
				cycle:false,
				frames:[{width:64, height:64, startX:727, startY:1}]
			},
			{
				fps:1, //2 (ceiling bulb)
				cycle:false,
				frames:[{width:64, height:64, startX:265, startY:1}]
			},
			{
				fps:1, //3 (entr arch)
				cycle:false,
				frames:[{width:64, height:64, startX:529, startY:1}]
			},
			{
				fps:1, //4
				cycle:false,
				frames:[{width:64, height:64, startX:595, startY:1}]
			},
			{
				fps:1, //5
				cycle:false,
				frames:[{width:64, height:64, startX:80, startY:0}]
			},
			{//stalagtites 6
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:199, startY:1}]
			},
			{
				fps:1, //7
				cycle:false,
				frames:[{width:64, height:64, startX:1, startY:1}]
			},
			{
				fps:1, //8
				cycle:false,
				frames:[{width:64, height:64, startX:133, startY:1}]
			}
		]
	}
	var caveBackData ={
		info:{
			layout:[
			[0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
			[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
			[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
			[3,3,3,3,3,3,3,3,3,3,3,x,x,x,x,3,3,3,3,x,3,3,3,3,3,x,x,x,x,3,3,3,x,3,3],
			[3,3,3,3,3,3,3,3,3,3,3,x,x,x,x,3,3,3,3,x,3,3,3,3,3,x,x,x,x,3,3,3,x,3,3],
			[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,x,3,3,3,3,3,3,3,3,3,3,3,3,x,3,3],
			[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
			],
			src:`images/caveTex.png`,
		},
		states:
		[		
				{
					fps:5, // 0
					cycle:true,
					frames:[
						{width:64, height:64, startX:0, startY:0}
	
					]
				},
				{
					fps:1, //1
					cycle:false,
					frames:[{width:64, height:64, startX:16, startY:0}]
				},
				{
					fps:1, //2
					cycle:false,
					frames:[{width:64, height:64, startX:32, startY:0}]
				},
				{
					fps:1, //3
					cycle:false,
					frames:[{width:64, height:64, startX:67, startY:1}]
				},
				{
					fps:1,
					cycle:false,
					frames:[{width:64, height:64, startX:64, startY:0}]
				},
				{
					fps:1,
					cycle:false,
					frames:[{width:64, height:64, startX:80, startY:0}]
				},
				{
					fps:1,
					cycle:false,
					frames:[{width:64, height:64, startX:96, startY:0}]
				},
				{
					fps:1,
					cycle:false,
					frames:[{width:64, height:64, startX:112, startY:0}]
				},
				{
					fps:1,
					cycle:false,
					frames:[{width:64, height:64, startX:128, startY:0}]
				}
			]
		}

		var caveHitData={
			info:{
				layout:[
					[0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2],
					[2,8,1,8,1,1,8,1,1,1,1,1,1,8,8,1,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
					[2,x,x,7,x,x,7,x,x,x,x,x,x,7,7,x,1,1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2]
					
					
				],
				src:`images/caveTex.png`,
			},
			states:
			[		
					{
						fps:5,
						cycle:false,
						frames:[
							{width:16, height:16, startX:0, startY:0}
						]
					},
					{
						fps:1,
						cycle:false,
						frames:[{width:16, height:16, startX:16, startY:0}]
					},
					{
						fps:1,
						cycle:false,
						frames:[{width:16, height:16, startX:32, startY:0}]
					},
					{
						fps:1,
						cycle:false,
						frames:[{width:16, height:16, startX:48, startY:0}]
					},
					{
						fps:1,
						cycle:false,
						frames:[{width:16, height:16, startX:64, startY:0}]
					},
					{
						fps:1,
						cycle:false,
						frames:[{width:16, height:16, startX:80, startY:0}]
					},
					{
						fps:1,
						cycle:false,
						frames:[{width:16, height:16, startX:96, startY:0}]
					},
					{
						fps:1,
						cycle:false,
						frames:[{width:16, height:16, startX:112, startY:0}]
					},
					{
						fps:1,
						cycle:false,
						frames:[{width:16, height:16, startX:128, startY:0}]
					}
				]
			}