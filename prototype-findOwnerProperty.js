Object.prototype.findOwnerOfProperty = function(propName){
    var currentObject = this;
    while(currentObject !== null){
        if(currentObject.hasOwnProperty(propName)){
            return currentObject;
        }else{
            currentObject = currentObject.__proto__;
        }
    }
    return "No property Found";
};