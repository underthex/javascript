function Fencepost (x, y, postNum){
    this.x = x;
    this.y = y;
    this.postNum = postNum;
    this.connectionsTo = [];
}

Fencepost.prototype = {
    sendRopeTo : function(connectedPost){
        this.connectionsTo.push(connectedPost);
    },
    removeRope : function(removeTo){
        var temp = []; //## Rebuilding a new array from TEMP variable instead of removing the object and leaving an empty array cell.
        for(var i=0; i<this.connectionsTo.length; i++){
            if(removeTo != this.connectionsTo[i].postNum){
                temp.push(this.connectionsTo[i]);
            }
        }
        this.connectionsTo = temp;
    },
    movePost : function(x, y){
        this.x = x;
        this.y = y;
    }
};

var post18 = new Fencepost(-3, 4, 18);
var post19 = new Fencepost(5, -1, 19);
var post20 = new Fencepost(-2, 10, 20);

post18.sendRopeTo(post20);
post18.sendRopeTo(post19);

post18.removeRope(20);

console.log(post18.findOwnerOfProperty("valueOf"));