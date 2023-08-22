// Code your solution in this file!
const returnFirstTwoDrivers = function(name) {
    return name.slice(0,2);
}

const returnLastTwoDrivers = function(name) {
    return name.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
const fareDoubler = createFareMultiplier(2);
const doubledFare = fareDoubler(10);

const fareTripler = createFareMultiplier(3);
const triplededFare = fareTripler(10);

function selectDifferentDrivers(drivers, returnDrivers) {
    return returnDrivers(drivers);
}