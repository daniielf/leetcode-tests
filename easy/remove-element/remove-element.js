var removeElement = (nums, val) => {
    let count = 0;
    let currentArrayLength = nums.length;
    
    for (let i = 0; i < currentArrayLength; i++) {
        if (nums[i] !== val) {
            count += 1;
        } else {
            nums.splice(i, 1);
            i -= 1;
            currentArrayLength -= 1;
        }
    }
    return count;
};

let array = [1,2,2,4,6,9];
const count = removeElement(array, 2);

console.log(count, array);