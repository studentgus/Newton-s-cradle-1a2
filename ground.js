class Ground
{
	constructor(x,y,w,h)
	{
		console.log("Hiiii");
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h ,{isStatic:true});
 		World.add(world, this.body);
	}
	display()
	{
			console.log("ground display");
			var groundPos=this.body.position;		
			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill("green");
			rect(0,0,this.width, this.height);
			pop()
	}

}
