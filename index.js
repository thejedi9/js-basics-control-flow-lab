
function scuberGreetingForFeet(feet){
  if (feet <= 400) {
   return `This one is on me!`; 
  } 
  else if (1999 < feet && feet < 2500) {
    return `I will gladly take your thirty bucks.`;
  } 
  else  {
    return `No can do.`;
  }
  
}
//const destination = `city`;
//const city = destination === `NYC` ? `Ok, sounds good.` : `No go`;

function ternaryCheckCity(destination){
 return destination === 'NYC' ? `Ok, sounds good.` : `No go.`;
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case `generous` :
      return `Thank you so much.`;
    case `not as generous` :
      return `Thank you.`;
    default :
      return `Bye.`
  }
}