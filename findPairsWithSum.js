function findPairsWithSum (arr, target) {
    if (target < 1 || target > 1000) {
        return "invalid target";
    }

    let result = [];
    let repeatElements = new Set();

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (!repeatElements.has(arr[j])){        
                if ((arr[i] + arr[j]) === target) {
                    result.push([arr[i], arr[j]])
                    repeatElements.add(arr[j]);
                    repeatElements.add(arr[i]);
                }
            }  
        }
    }
    return result;
}

const arr = [2, 7, 4, 0, 9, 5, 1, 3]
const target = 7;

console.log(findPairsWithSum(arr, target))