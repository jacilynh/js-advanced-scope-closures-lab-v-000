// Returns a function that then calculates whether a
// given trip is within range. For example, `produceDrivingRange(10)` returns a
// function that will return `false` if the trip is over 10 blocks distance and
// `true` if the distance is within range. 
function produceDrivingRange(maxDistance) {
  return function (start, end) {
    let pathDistance = Math.abs(parseInt(start) - parseInt(end));
    let diff = Math.abs(maxDistance - pathDistance);

    if (pathDistance > maxDistance) {
      return `${diff} blocks out of range`;
    }
    else {
      return `within range by ${diff}`
    }
  }
}

// Returns a function that then calculates a tip. For
// example, `produceTipCalculator(.10)` returns a function that calculates ten
// percent tip on a fare. `produceTipCalculator(.20)` returns a function that
// calculates twenty percent tip on a fare.
// function produceTipCalculator() {
  
// }

// returns a Driver class. The class has
// reference to a driverId that is incremented each time a new driver is created.
// The rest of the code base does not have access to driverId.
// function createDriver() {
  
// }