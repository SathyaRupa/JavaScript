function filter(sampleArray,condition){
    const output = [];
    for (let i = 0; i < sampleArray.length; i++) {
        if (condition(sampleArray[i], i, sampleArray)) {
          output.push(sampleArray[i]);
        }
      }
      return output;
}

function map(sampleArray,condition){
    const output = [];
    for (let i = 0; i < sampleArray.length; i++) {
        output.push(condition(sampleArray[i], i, sampleArray));
    }
      return output;
}

function reduce(sampleArray){
    let output = 0;
    for(let i = 0;  i < sampleArray.length; i++){
        output = sampleArray[i] + output;
    }
    return output;
}

function forEach(sampleArray){
    for(let i = 0;  i < sampleArray.length; i++){
        console.log(i,")",sampleArray[i]);
    }
}

const ages = [18,13,33,22,17];
const elligibleAges = filter(ages, (age) => age  >= 18);
console.log("elligibleAges",elligibleAges);
const updatedAges = map(ages, (age) => age + 1);
console.log("updatedAges",updatedAges);
const sumOfAges = reduce(ages);
console.log("sum = ", sumOfAges);
forEach(ages);

