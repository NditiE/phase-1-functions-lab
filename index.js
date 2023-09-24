// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42);
  }
  
  // Returns the number of feet from Scuber's headquarters to the pickup location
  function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264;
  }
  
  // Calculates the number of feet a passenger travels given a starting block and an ending block (uptown/downtown only)
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
  }
  
  // Returns the fare for the customer based on the distance traveled
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
  
    if (distanceInFeet <= 400) {
      return 0; // First 400 feet are free
    } else if (distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distanceInFeet <= 2500) {
      return 25; // Flat fare for distance between 2000 and 2500 feet
    } else {
      return "cannot travel that far"; // Cannot travel more than 2500 feet
    }
  }
  
