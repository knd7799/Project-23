class box
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.boxWidth=200;
		this.boxHeight=95;
		this.wallThickness=20;
		this.angle=0;	
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.boxWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.boxWidth/2, this.y-this.boxHeight/2, this.wallThickness, this.boxHeight, {isStatic:true})
		Matter.Body.setAngle(this.leftWallBody, this.angle);
		

		this.rightWallBody=Bodies.rectangle(this.x+this.boxWidth/2, this.y-this.boxHeight/2, this.wallThickness, this.boxHeight, {isStatic:true})
		Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill("red")
			stroke(255)
			rotate(this.angle)
			rect(0,0,this.wallThickness, this.boxHeight);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill("red")
			rotate(-1*this.angle)
			rect(0,0,this.wallThickness, this.boxHeight);
			pop()

			push()
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill("red")
			rect(0,0,this.boxWidth, this.wallThickness);
			pop()
			
	}

}
