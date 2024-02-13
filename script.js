

/*function countVowels(str) {
    let count = 0;
    const arr = ('a', 'e', 'i', 'o', 'u');

    for(const char of str){
        if (char=='a' ||char=='e' ||char=='i' ||char=='o' ||char=='u'){
            count++;
        }
    }

    console.log(count);
}

let arrFun = (str) => {
    let count = 0;
    const arr = ('a', 'e', 'i', 'o', 'u');

    for(const char of str){
        if (char=='a' ||char=='e' ||char=='i' ||char=='o' ||char=='u'){
            count++;
        }
    }

    console.log(count);
}    

const Num = [1, 2, 3, 4, 5];

Num.forEach((val) => {
    console.log(val * val);
});


let arr = [1, 2, 5, 8];

const bigger = arr.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
});

console.log(bigger);
 


const marks = [45, 90, 98, 96, 93, 100];

const greater90 = marks.filter((val) => {
    return val > 90;
});

console.log(greater90);                   


let n = prompt("Enter a number :");

let arr = [];

for(let i =1; i <= n; i++){
    arr[i-1] = i;
}

console.log(arr);

const sum = arr.reduce((res, curr) => {
    return res + curr;
});

console.log("Sum is :"+ sum);

const product = arr.reduce((res, curr) => {
    return res * curr;
});

console.log("Product is :"+ product);        


const obj1  = {
    name: "Todd",
    age: 20    
  };
   
  const obj2 = {
    languages: ["Spanish", "Portuguese"],
    married: true
  };
   
  //const obj1 = JSON.parse(string1);
  //const obj2 = JSON.parse(string2);
   
  const mergedObject = (...obj1, ...obj2);
   
console.log(mergedObject);      

  // JSON objects to be merged
const jsonObj1 = { name: "John", age: 25 };
const jsonObj2 = { city: "New York", hobby: "Coding" };

// Merge JSON objects
const mergedJSON = Object.assign({}, jsonObj1, jsonObj2);

console.log(mergedJSON);     */  

const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };

Object.assign({}, target, source);

console.log(target); // { a: 1, b: 3, c: 4 }         


const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObject = { ...obj1, ...obj2 };

console.log(mergedObject); // { a: 1, b: 3, c: 4 }
