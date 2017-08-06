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


//Constructor : the are like a blue print to create an instance  of  an object. 
// they are like template. create object with diffrente value 
// naming convention for constructore function started  with capital word to be idetifyable
// this keyword: the context of the fuction
// new keyword: for creating an instance of the object 

function Apple(x,y,color,score){

    this.x = x;
    this.y = y;
    this.color = color;
    this.score = score;
}

new Apple(10,20,"red",300);