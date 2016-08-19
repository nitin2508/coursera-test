/*var message="in global"
console.log("global " + message);


var a=function(){
var message="inside a"
console.log("a:message "+message);
function b(){
	console.log("b:message "+message);
}
b();

}

a();


	var x;
	if(x==undefined){
		console.log("x is undefined");
	}
	5
	if(x==undefined){
		console.log("x is undefined")
	}
	else{
		console.log("x is defined");
	}


	var string="hi";
	string+="coursera";
	console.log(string+"!");

	function a()
	{
		return
		{
			name:"nitin"
		};

	}

	function b(){
			return{
				name:"nitin"
			};
	}


console.log(a());
console.log(b());

function orderchickennwith(sidedish){
	sidedish=sidedish||"water";
	console.log("chicken with "+sidedish);
}
orderchickennwith("noudle");
orderchickennwith("");
var x = 10;
if ( (null) || (console.log("Hello")) || x > 5 ) 
{
  console.log("Hello");
}

var company=new Object();
company.name="Facebook";
console.log(company);
company.ceo=new Object;
company.ceo.firstname="mark";
company.ceo.favouritecolor="blue";
var stockPropName="stock of company";
company[stockPropName]=220;

var facebook={
	name:"facebook",
	ceo: {
		firstName:"mark",
		favColor:"blue"
	},
	"stock of company":110
};

console.log(facebook);

function multiply(x,y){
return x*y;
}

console.log(multiply(5,5));

function makeMultiplier(multiplier){
var myFunc = function(x){
	return multiplier * x;
};
return myFunc;
}

var double=makeMultiplier(2);
console.log(double(20));*/

/*var a=5;
var b=a
console.log("a:"+a);
console.log("b:"+b);
console.log(a+b);

b=7;
console.log("a after:"+a);
console.log("b after:"+b);
console.log(a+b);*/
/*
var a={x: 5};
var b=a;
console.log(a);
console.log(b);


b.x=7;
console.log(a);
console.log(b);
*/
/*
function Circle(radius){
 this.radius=radius;
 };



Circle.prototype.getArea=function(){
 	return Math.PI*Math.pow(this.radius,2);
 };	


var newcircle=new Circle(10);
console.log(newcircle);
console.log(newcircle.getArea());*/

var literalCircle={
	radius:10,
	getArea:function(){
		var self=this;
		var increaseRadius=function(){
			self.radius=20;
		}
		increaseRadius();
		console.log(this.radius);
		return Math.PI*Math.pow(this.radius,2);
	}

};
console.log(literalCircle.getArea());
