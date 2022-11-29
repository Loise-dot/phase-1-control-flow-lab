function scuberGreetingForFeet(ride) {
  let scuberGreetingForFeet;
  if (ride <= 400) {
    scuberGreetingForFeet = "This one is on me!";
  } else if (ride > 2000 && ride < 2500) {
    scuberGreetingForFeet = "I will gladly take your thirty bucks.";
  } else if (ride > 2500) {
    scuberGreetingForFeet = "No can do.";
  }
  return scuberGreetingForFeet;
  // Write your code here!
}

function ternaryCheckCity(city) {
  let result;
  city === "NYC" ? (result = "Ok, sounds good.") : (result = "No go.");
  return result;
}
ternaryCheckCity("NYC");
ternaryCheckCity("Pittsburgh");

function switchOnCharmFromTip(tip) {
  // Write your code here!
  let result;
  switch (tip) {
    case "generous":
      result = "Thank you so much.";
      break;
    case "not as generous":
      result = "Thank you.";
      break;
    default:
      result = "Bye.";
  }
  return result;
}

switchOnCharmFromTip("generous");
switchOnCharmFromTip("not as generous");
switchOnCharmFromTip("thanks for everthing");
