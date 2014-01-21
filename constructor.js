
//Constructor Function
function Shoe(shoeSize, shoeColor, shoeGender, constructStyle){
    this.size = shoeSize;
    this.color = shoeColor;
    this.gender = shoeGender;
    this.construction = constructStyle;
}

//Constructor Prototype
Shoe.prototype = {
    putOn: function(){ alert("Putting the size " + this.size + " " + this.construction + " on!"); },
    takeOff: function(){ alert("These " + this.color + " " + this.gender + " " + this.construction + " is off!!"); }
};

var beachShoe = new Shoe(10, "blue", "women", "flipflop");

console.log(beachShoe);
//beachShoe.putOn();
//beachShoe.takeOff();