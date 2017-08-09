//this need a context
console.log(this);

var myObject = {

    prop: this, // this here will point at window objext out side of myObject
    method: function(){return this; } // callable object THIS point will go outside of the conainer one step and target myObject- 
    //this  will call the object that contain that method 
};

// same concept for array

// globaly scoped sub-routian 
function global(){
    return this; // This will setp out one and point to window context
}

//CONSTRUCTOR
//Constructor : the are like a blue print to create an instance  of  an object. 
// they are like template. create object with diffrente value 
// naming convention for constructore function started  with capital word to be idetifyable
// this keyword: the context of the fuction
// new keyword: for creating an instance of the object 

function Apple(x,y,color,score){
// unique properties for each apple 
    this.x = x;
    this.y = y;
    this.color = color;
    this.score = score;
// eat an throw are NOT unique and they dont need to be in every instance apple

   // this.eat = function(){return "eat the apple";}; ----> moved to prototype
   // this.throw = function(){return "throw the apple";}; -----> moved to prototype
}


//PROTOTYPE
//prototypes are shared object, prop and methode that share 
//The constructor manufactures new objects
//The prototype defines the behaviour of new objects manufactured by the constructor
//THis is about context 


Apple.prototype = {
   //--->
    eat : function(){ return "eat the apple";}, 
    throw : function(){ return "throw the apple";}
}


var apple01 = new Apple(10,20,"red",300);
var apple02 = new Apple(10,20,"red",300);


//THIS 
///eat : function(){ return this;}, 
//apple2.eat
// this will point to apple2 object , beacuse called up by apple02. it will back up to apple02
//