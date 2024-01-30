function scuberGreetingForFeet(rideDistanceinFeet){
  // Write your code here!
  if (rideDistanceinFeet <= 400) {
    return 'This one is on me!';
  } else if(rideDistanceinFeet > 400 && rideDistanceinFeet <= 2000) {
    return 'That will be twenty bucks.'
  } else if(rideDistanceinFeet > 2000 && rideDistanceinFeet <2500 ) {
    return 'I will gladly take your thirty bucks.';
  } else if(rideDistanceinFeet >= 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(destination){
  // Write your code here!
  return destination === 'NYC'? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tips){
  // Write your code here!
  switch(tips) {
    case 'generous' : 
    return 'Thank you so much.';
    case 'not as generous' : 
    return 'Thank you.';
    default : 
    return 'Bye.';
  }
}