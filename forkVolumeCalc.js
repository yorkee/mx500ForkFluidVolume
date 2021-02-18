// equation
var getVolume = (diameter, height) => 3.1416 * (diameter/2)* (diameter/2) * height;
var cubicMillimeterToMl = cubicMm => cubicMm/1000;

// fork
var forkTubeLength = 270, forkTubeDiameter=36, forkLegDiameter=27;

// spring
var springLengthUnload=100, springWireDiameter = 3, springDiameter = 25, springNumberOfLoop = 15;
var springLengthLoaded= springWireDiameter * springNumberOfLoop;
var volumeOfSpring = getVolume(springDiameter, springLengthLoaded) - 
    getVolume((springDiameter- springWireDiameter - springWireDiameter), springLengthLoaded);

// components
var spacer1Length = 20, forkSealLength = 7, spacer2Length = 75;

// valve
var forkValveHeight=30, forkValInnerHeight=10;
var forkLegLenghCoveredByTubeUnload = forkTubeLength - springLengthUnload - forkValInnerHeight;
var forkLegLenghCoveredByTubeLoaded = forkTubeLength - springLengthLoaded - forkValInnerHeight;

var volumeOfSpacer1 = getVolume(forkTubeDiameter, spacer1Length) - getVolume(forkLegDiameter, spacer1Length);
var volumeOfforkSeal = getVolume(forkTubeDiameter, forkSealLength) - getVolume(forkLegDiameter, forkSealLength);
var volumeOfSpacer2 = getVolume(forkTubeDiameter, spacer2Length) - getVolume(forkLegDiameter, spacer2Length);

var volumeOfForkLegUnload = getVolume(forkLegDiameter, forkLegLenghCoveredByTubeUnload);
var volumeOfForkSpaceUnload = getVolume(forkTubeDiameter, forkLegLenghCoveredByTubeUnload);

var volumeOfForkLegLoaded = getVolume(forkLegDiameter, forkLegLenghCoveredByTubeLoaded);
var volumeOfForkSpaceLoaded = getVolume(forkTubeDiameter, forkLegLenghCoveredByTubeLoaded);

var volumeOfUnloadSpaceBelowValve = volumeOfForkSpaceUnload - 
    volumeOfForkLegUnload - volumeOfSpacer2 - volumeOfforkSeal - volumeOfSpacer1;
var volumeOfLoadedSpaceBelowValve = volumeOfForkSpaceLoaded - 
    volumeOfForkLegLoaded - volumeOfSpacer2 - volumeOfforkSeal - volumeOfSpacer1;

var lengthOfUnloadSpaceAboveValve = forkTubeLength- forkLegLenghCoveredByTubeUnload + forkValInnerHeight;
var VolumeOfUnloadSpaceAboveValve = getVolume(forkTubeDiameter, lengthOfUnloadSpaceAboveValve) - volumeOfSpring;

var lengthOfLoadedSpaceAboveValve = forkTubeLength- forkLegLenghCoveredByTubeLoaded + forkValInnerHeight;
var VolumeOfLoadedSpaceAboveValve = getVolume(forkTubeDiameter, lengthOfLoadedSpaceAboveValve) - volumeOfSpring;

console.log("volumeOfUnloadSpaceBelowValve: ", cubicMillimeterToMl(volumeOfUnloadSpaceBelowValve), "ml");
console.log("VolumeOfUnloadSpaceAboveValve: ", cubicMillimeterToMl(VolumeOfUnloadSpaceAboveValve), "ml");

console.log("volumeOfLoadedSpaceBelowValve: ", cubicMillimeterToMl(volumeOfLoadedSpaceBelowValve), "ml");
console.log("VolumeOfLoadedSpaceAboveValve: ", cubicMillimeterToMl(VolumeOfLoadedSpaceAboveValve), "ml");













