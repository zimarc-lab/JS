
// any thing insade the object need to have key name / 
// symbol or a memory pointer 
var myCar = {   
    //keyname : value , 

    color : "blue",
    speed : 200,
    //method or subrutin
    dirve : function(){return " dirve" ;},
    engine : {
        size : 2.5,
        make : "bmw",
        pistons: [ 
            { name: "p1", maker : "bmw", color: "blue", size: 5 }, 
            {name: "p2", maker : "bmw", color: "red", size: 3}
        ]
    }

};


//member access : shopList[3]()
var shopList = [
    "apple",
    "book",
    200,
    // theris no name or keyname- we canot define aname in array 
    function(){return " buy" ;}

];

console.log(myCar);
