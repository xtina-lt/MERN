const quickSort = (arr) => {
    // BASE CASE
    if(arr.length < 2) return arr;

    // RECUSIVE CASE
    // pick a random pivot
    let pivotIndex = Math.floor(Math.random() * arr.length);
    let pivot = arr[pivotIndex];
    let left = [];
    let right = [];

    // smaller in left, larger in right
    for(let i = 0; i < arr.length; i++) {
        if(i === pivotIndex) continue;

        (arr[i] < pivot) ? left.push(arr[i]) : right.push(arr[i]); 
    }
    
    // sort again
    return quickSort(left).concat([pivot], quickSort(right));
} 

console.log( quickSort([3,7,5,0,2]) );