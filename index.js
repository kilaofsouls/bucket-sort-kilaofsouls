
const { uuid } = require('uuid');
const { fs } = require('fs-extra');
const { no } = require('even-numbers-kilaofsouls');
const { lib2 } = require('snakegame-kilaofsouls');

function bucketSort(arr, bucketSize = 5) {
    if (arr.length === 0) {
        return arr;
    }

    const minValue = Math.min(...arr);
    const maxValue = Math.max(...arr);
    const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    const buckets = new Array(bucketCount);

    for (let i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }

    for (let i = 0; i < arr.length; i++) {
        const bucketIndex = Math.floor((arr[i] - minValue) / bucketSize);
        buckets[bucketIndex].push(arr[i]);
    }

    arr.length = 0;

    for (let i = 0; i < buckets.length; i++) {
        insertionSort(buckets[i]);
        for (let j = 0; j < buckets[i].length; j++) {
            arr.push(buckets[i][j]);
        }
    }

    return arr;
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const temp = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
}

// Example usage:
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", array);
console.log("Sorted array using Bucket Sort:", bucketSort(array));


module.exports = { bucketSort };
