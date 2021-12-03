// Converts from degrees to radians.
Number.prototype.toRadians = function () {
    return this * Math.PI / 180;
};

// Calculates the distance between Grenoble and the given city
function distanceFromGrenoble(city) {
    const GrenobleLat = 45.166667;
    const GrenobleLong = 5.716667;
    const cityLat = parseFloat(city.latitude);
    const cityLong = parseFloat(city.longitude);

    const R = 6371;
    const φ1 = GrenobleLat.toRadians(); // φ, λ in radians
    const φ2 = cityLat.toRadians();
    const Δφ = (cityLat - GrenobleLat).toRadians();
    const Δλ = (cityLong - GrenobleLong).toRadians();

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

// Swap 2 values in array csvData
// i is the index of the first city
// j is the index of the second city
function swap(i, j) {
    let temp = csvData[j];
    csvData[j] = csvData[i];
    csvData[i] = temp;
    displayBuffer.push(['swap', i, j]); // Do not delete this line (for display)

}

// Returns true if city with index i in csvData is closer to Grenoble than city with index j
// i is the index of the first city
// j is the index of the second city
function isLess(i, j) {
    displayBuffer.push(['compare', i, j]); // Do not delete this line (for display)

    return csvData[i].dist < csvData[j].dist;
}

function partition(items, left, right) {
    let pivot = items[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        if (i <= j) {
            swap(i, j); //swap two elements
            i++;
            j--;
        }
    }
    return i;
}

// function quicksort() {
//     let left = 0;
//     let right = csvData.length
//     let index;
//     if (csvData.length > 1) {
//         index = partition(left, right); //index returned from partition
//         if (left < index - 1) { //more elements on the left side of the pivot
//             quickSort(items, left, index - 1);
//         }
//         if (index < right) { //more elements on the right side of the pivot
//             quickSort(items, index, right);
//         }
//     }
// }

function quicksort(items, left, right) {
    let nbElement = right - left;
    //swap(0, rand(1,n));
    if (nbElement <= 1) {
        return;
    }else{
        let k = left;
        for (let i = left + 1; i < right; i++) {
            if (isLess(i, left)) {
                k++;
                swap(k, i);
            }
        }
        swap(left, k);
        console.log(k,left,right)

        quicksort(items, left, k);
        quicksort(items, k + 1, right);
    }
}

function shellsort() {
    let b = csvData
    espacements = [701, 301, 132, 57, 23, 10, 4, 1]
    for (let e in espacements) {
        for (let a = 0; a < e; a++) {
            for (let i = a; i < csvData.length; i += e) {
                for (let j = i; j >= e && isLess(b[j - e], b[i]); j -= e) {
                    swap(b[j], b[j - e])
                }
            }
        }
    }
}


function insertsort() {
    let i, j;
    for (i = 0; i < csvData.length - 1; i++) {
        for (j = i; j >= 0 && isLess(j + 1, j); j--) {
            swap(j + 1, j);
        }
    }
}

function selectionsort() {
    for (let i = 0; i < csvData.length - 1; i++) {
        let k = i + 1;
        for (k; k < csvData.length; k++) {
            if (!isLess(i, k)) {
                swap(i, k)
            }
        }
    }
}

function bubblesort() {
    for (let i = csvData.length; i > 0; i--) {
        let j = 0;
        let k = j + 1;
        for (j; j < i - 1; j++) {
            if (!isLess(j, k)) {
                swap(j, k)
            }
            k++;


        }
    }
}

function mergesort() {
    console.log("mergesort - implement me !");
}

function heapsort() {
    console.log("heapsort - implement me !");
}

function quick3sort() {
    console.log("quick3sort - implement me !");
}


function sort(algo) {
    switch (algo) {
        case 'insert':
            insertsort();
            break;
        case 'select':
            selectionsort();
            break;
        case 'bubble':
            bubblesort();
            break;
        case 'shell':
            shellsort();
            break;
        case 'merge':
            mergesort();
            break;
        case 'heap':
            heapsort();
            break;
        case 'quick':
            quicksort(csvData, 0, csvData.length);
            break;
        case 'quick3':
            quick3sort();
            break;
        default:
            throw 'Invalid algorithm ' + algo;
    }
}
