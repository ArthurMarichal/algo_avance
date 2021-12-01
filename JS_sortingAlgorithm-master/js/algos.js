// Converts from degrees to radians.
Number.prototype.toRadians = function() {
  return this * Math.PI / 180;
};

// Calculates the distance between Grenoble and the given city
function distanceFromGrenoble(city)
{
  const GrenobleLat = 45.166667;
  const GrenobleLong = 5.716667;
  const cityLat = parseFloat(city.latitude);
  const  cityLong = parseFloat(city.longitude);

  const R = 6371;
  const φ1 = GrenobleLat.toRadians(); // φ, λ in radians
  const φ2 = cityLat.toRadians();
  const Δφ = (cityLat-GrenobleLat).toRadians();
  const Δλ = (cityLong-GrenobleLong).toRadians();

  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
      Math.cos(φ1) * Math.cos(φ2) *
      Math.sin(Δλ/2) * Math.sin(Δλ/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

// Swap 2 values in array csvData
// i is the index of the first city
// j is the index of the second city
function swap(i,j)
{
  // console.log("Avant swap");
  // console.log("Valeur de j "+distanceFromGrenoble(csvData[j]));
  // console.log("Valeur de i "+distanceFromGrenoble(csvData[i]));
  let temp = csvData[j];
  csvData[j] = csvData[i];
  csvData[i] = temp;
  displayBuffer.push(['swap', i, j]); // Do not delete this line (for display)
  // console.log("swap - implement me !");
  // console.log("Valeur de temp "+ temp);
  // console.log("Valeur de j "+j);
  // console.log("Valeur de i "+i);
}

// Returns true if city with index i in csvData is closer to Grenoble than city with index j
// i is the index of the first city
// j is the index of the second city
function isLess(i, j)
{
  displayBuffer.push(['compare', i, j]); // Do not delete this line (for display)

  return csvData[i].dist < csvData[j].dist;
}


function insertsort()
{
  let i, j;
  for(i = 0; i < csvData.length - 1; i++) {
    console.log("Boucle "+i);
    if (isLess(i, i + 1))  {
      continue;
    }
    for (j = i ; j >= 0 && isLess(j + 1, j) ; j--) {
      swap( j + 1, j);
    }
  }
}

function selectionsort()
{
  console.log("selectionsort - implement me !");
}

function bubblesort()
{
  for (let i = csvData.length; i > 0; i--){
    let j = 0;
    let k = j + 1;
    while (j != i ){
      if (isLess(j,k)){
        swap(j,k)
      }
      j++
    }
}
  console.log("bubblesort - implement me !");
}

function shellsort()
{
  console.log("shellsort - implement me !");
}

function mergesort()
{
  console.log("mergesort - implement me !");
}

function heapsort()
{
  console.log("heapsort - implement me !");
}

function quicksort()
{
  console.log("quicksort - implement me !");
}
function quick3sort()
{
  console.log("quick3sort - implement me !");
}


function sort(algo)
{
  switch (algo)
  {
    case 'insert': insertsort();break;
    case 'select': selectionsort();break;
    case 'bubble': bubblesort();break;
    case 'shell': shellsort();break;
    case 'merge': mergesort();break;
    case 'heap': heapsort();break;
    case 'quick': quicksort();break;
    case 'quick3': quick3sort();break;
    default: throw 'Invalid algorithm ' + algo;
  }
}
