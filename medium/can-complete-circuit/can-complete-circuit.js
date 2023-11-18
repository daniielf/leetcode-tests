var canCompleteCircuit = function(gas, cost) {
  let circuitBalance = 0;
  let possibleInitialPosition = 0;
  let localBalance = 0;
  
  for (let i = 0; i < gas.length; i++) {
      circuitBalance += (gas[i] - cost[i]);
      localBalance += (gas[i] - cost[i]);

      if (localBalance < 0) {
          possibleInitialPosition = i + 1;
          localBalance = 0;
      }
  }

  return circuitBalance < 0 ? -1 : possibleInitialPosition;
};