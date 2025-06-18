function findMatching(drivers, stringvar){
    return drivers.filter(function(driver){
        return driver.toLowerCase() === stringvar.toLowerCase();
    });
}
function fuzzyMatch(drivers, stringVar) {
  return drivers.filter(function(driver) {
    // Convert both to lowercase and compare the string variables
    for (let i = 0; i < stringVar.length; i++) {
      if (driver[i].toLowerCase() !== stringVar[i].toLowerCase()) {
        return false;
      }
    }
    return true;
  });
}
function matchName(drivers, nameToMatch) {
  return drivers.filter(function(driver) {
    return driver.name === nameToMatch;
  });
}

