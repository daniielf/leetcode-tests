const merge = (array1, numToMerge1, array2, lengthOfArray2) => {
  let copyArray1 = array1.slice(0, numToMerge1);
  let currentIndex1 = 0;
  let currentIndex2 = 0;
  
  let i = 0;
  while (i < numToMerge1 + lengthOfArray2) {
    if ((currentIndex1 < numToMerge1 && copyArray1[currentIndex1] <= array2[currentIndex2]) || array2[currentIndex2] == undefined) {
      array1[i] = copyArray1[currentIndex1];
      currentIndex1 += 1;
    } else {
      array1[i] = array2[currentIndex2];
      currentIndex2 += 1;
    }
    i++;
  }

}

/** Test Example */
let array1 = [-3, 0 , 1, 4, 0 , 0, 0];
let array2 = [-1, 2, 6];

merge(array1, 4, array2, array2.length);
console.log(array1);