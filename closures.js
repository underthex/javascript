function warningMaker( obstacle ){
    function numberLocation(number, location) {
        alert("Beware! There have been " +
            obstacle +
            " sightings today!\n" + number + " " + obstacle + "(s) spotted at the " + location + "!");
    }
    return numberLocation;
}

//Test sub functions
var alertIceberg = warningMaker("iceberg");
var alertShark = warningMaker("shark");
var alertWhale = warningMaker("whale");
var alertAcidRain = warningMaker("acid rain");