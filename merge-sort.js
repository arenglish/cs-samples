/**
To run:
 `node merge-sort`
 */

function merge(_left = [], _right = []) {
    let left = _left.slice(0);
    let right = _right.slice(0);

    let result = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] > right[0]) {
            result.push(right.splice(0, 1)[0]);
        } else {
            result.push(left.splice(0, 1)[0]);
        }
    }

    while (left.length > 0) {
        result.push(left.splice(0, 1)[0])
    }
    while (right.length > 0) {
        result.push(right.splice(0, 1)[0])
    }

    return result;
}

function mergeSort(list = []) {
    if (list.length <= 1) {
        return list;
    }

    const middleIndex = list.length / 2;
    let left = list.slice(0, middleIndex);
    let right = list.slice(middleIndex, list.length);

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
}

/**
 * Generating sample unsorted list
 */
const sampleList = [4,3,6,7,2,12,24,78,45, 101, -4, -546, 4,3,6,7,2,12,24,78,45, 101, -4, -546];
const nTimes = 5000;

let fullList = [];

const startCreation = new Date();
for (let i = nTimes; i > 0; i--) {
    fullList = fullList.concat(sampleList.slice(0));
}

console.log('Took ', new Date().getTime() - startCreation.getTime(), ' milliseconds to create the list with', fullList.length, ' numbers');


/**
 * Sorting list
 */
const start = new Date();

const sorted = mergeSort(fullList);

console.log('Took ', new Date().getTime() - start.getTime(), ' milliseconds to sort ', fullList.length, ' numbers');

