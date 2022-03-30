//function questions:>>>>>

//question 1=>
/*let para = [];
function maxfunc(para) {
  let sum = 0;
  let avg = 0;
  for (i = 0; i < para.length; i++) {
    sum = para[i] + sum;
    avg = sum / para.length;

  }
  return avg;
}

let array1 = [15, 2, 8, 12];
let array2 = [50, 25, 72, 36, 52];
let array3 = [66, 20, 31, 66, 99];
console.log("the avg of array1 is : ",maxfunc(array1));
console.log("the avg of array2 is : ",maxfunc(array2));
console.log("the avg of array3 is : ",maxfunc(array3));*/

//--------------------------------------------------------------

//question 2=>
/*let small = [];
function smallest(small) {
    let min = small.length;

    for (var i = 1; i < small.length; i++) {
        if (small[i] < min) {
            min = small[i];
        }
    }
    return min;

}

let arr = [5, 1, 9, 5, 7];
let arr1 = [8, 15, 75, 3, 99];
let arr2 = [32, 11, 2, 10, 17];



console.log("the smallest number of arr is : ",smallest(arr));
console.log("the smallest number of arr1 is: ",smallest(arr1));
console.log("the smallest number of arr2 is: ",smallest(arr2));*/

//--------------------------------------------------------------
//question 3=>
/*let word = [""];
function LongWord(word) {
    let big = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i].length > big) {
            big = word[i].length;


        }

    }
    return big;

}
let arr1 = ["The", "quick", "brown", "fox"];
let arr2 = ["apple", "potato", "great", "beatifull"];
let arr3 = ["hey", "no", "green", "blue"];

console.log("the largest arr1 is: ", LongWord(arr1));
console.log("the largest arr2 is: ", LongWord(arr2));
console.log("the largest arr3 is: ", LongWord(arr3));*/


//--------------------------------------------------------------

//question 4=>
/*let word = [""];
function LongWord(word) {
    let big = 0;
    let longest;
    for (let i = 0; i < word.length; i++) {
        if (word[i].length > big) {
            big = word.length;
            longest=word[i];


        }

    }
    return longest;

}
let arr1 = ["The", "lol", "brown", "fox"];
let arr2 = ["apple", "potato", "great", "beatifull"];
let arr3 = ["hey", "no", "green", "blue"];

console.log("the longest word in arr1 is: ", LongWord(arr1));
console.log("the longest name in arr2 is: ", LongWord(arr2));
console.log("the longest name in arr3 is: ", LongWord(arr3));*/

//--------------------------------------------------------------

//question 5=>

/*function Numbers(arr)
{
   let sum=0 , avg=0 ,counter=0,j=0;
 

   for(let i=0 ; i<arr.length ;i++){
       sum+=arr[i];
   }

   avg=sum/arr.length;
  
   while(j<arr.length){
       if(arr[j]>=avg){
           counter++;
       }
       j++;

   }
   return counter;
}
console.log(Numbers([1,2,3,6,15,6]));
console.log(Numbers([15,19,45,64,12]));
console.log(Numbers([89,77,54,10]));*/



//--------------------------------------------------------------
//question 6=>

/*function isPrime(value) {
    for(let i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

console.log(isPrime(7))
console.log(isPrime(85))
console.log(isPrime(1));*/

//--------------------------------------------------------------

//question 7=>
/*function Numbers([para]) {
    for (let i = 0; i < para.length; i++) {
      if (para[i] === 1) {
        return false;
      } else if (para[i] === 2) {
        return true;
      } else {
        for (let j = 2; j < para[i]; j++) {
          if (para[i] % j === 0) {
            return false;
          }
        }
  
        return true;
      }
    }
  }
  
  let arr1 = [10, 4, 1, 9];
  let arr2 = [16, 21, 96, 5];
  let arr3 = [2, 7, 5,13];
  
  
  console.log(Numbers([arr1]));     
  console.log(Numbers([[arr2]]));
  console.log(Numbers([arr3]));*/
 






















