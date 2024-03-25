const testvalue = {
    'key': 'value',
    'anotherKey': 235,
    'complexKey': {
        'insideKey1': 'insideValue1'
    },
    'arrayKey': [1, 2, 4], 
    5: 'some numbered index'
};

// console.log(testvalue);
// console.log(testvalue.key);
// console.log(testvalue.arrayKey);
// console.log(testvalue.complexKey);
// console.log(testvalue.complexKey.insideKey1);
// console.log(testvalue['key']);
// console.log(testvalue[5]);

// console.log(JSON.stringify(testvalue));

const {anotherKey, arrayKey, complexKey} = testvalue;
console.log(anotherKey);
console.log(arrayKey);
console.log(complexKey);