var rover = {
  position: [0,0],
  direction: 'N'
};

rover.position[0] = "";
rover.position[1] = "";

var x = rover.position[0];
var y = rover.position[1];

var rightXposition;
var rightYposition;

if ( y >= -4 && y <= 5 && x >= -4 && x <= 5) {
  rightYposition = "true";
} else {
  rightYposition = "false";
}

if (rightYposition) {
 function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++;
      break;
    case 'E':
      rover.position[1]++;
      break;
    case 'S':
      rover.position[0]--;
      break;
    case 'W':
      rover.position[1]--;
      break;
  }
}
} else {
  console.log("Bammm, false direction!");
}

if (rightYposition) {
function goBackward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]--;
      break;
    case 'E':
      rover.position[1]--;
      break;
    case 'S':
      rover.position[0]++;
      break;
    case 'W':
      rover.position[1]++;
      break;
  }
}
}

function goLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'E':
      rover.direction ='N';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'W':
      rover.direction = 'S';
      break;
  }
}

function goRight(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction ='E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  }
}





goRight();
goForward();




  //console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "] +  [rover.direction]"")
    console.log(rover);
