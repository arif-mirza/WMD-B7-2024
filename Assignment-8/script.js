// login

const login = document.getElementById("login");

const nameUser = document.getElementById("loginName");

login.addEventListener("click", (e) => {
    e.preventDefault();
    let userName =  prompt("Please Write Full Name here");
    
    if(userName === "null"){
        alert("Please Write Full Name here for Login");
    }else{
        nameUser.innerText = "Hello" + " " + userName + "!";
    }




});

// reference btn

const  print1To10 = document.getElementById("print1To10");
const  printEven = document.getElementById("printEven");
const  deleteOccurance = document.getElementById("deleteOccurance");
const  printPower = document.getElementById("printPower");
const  printPatternLoop = document.getElementById("printPatternLoop");
const  printDigits = document.getElementById("printDigits");
const  SumOfDigits = document.getElementById("SumOfDigits");
const  largestNumber = document.getElementById("largestNumber");
const  FibonacciSeries = document.getElementById("FibonacciSeries");
const  DuplicateNumber = document.getElementById("DuplicateNumber");
const  linearAlgorithum = document.getElementById("linearAlgorithum");
const  binaryAlgorithum = document.getElementById("binaryAlgorithum");

const clearResult = document.getElementById("outClearBtn"); 
const output = document.getElementById("output");
const orginalStatement = document.getElementById("orginalStatement");

const originalArray = "Original Array = " + " " + "[" +  [1,2,2,3,5,8,10,12,20,14,16,18,19] +"]";
const orgArry = [1,2,2,3,5,8,10,12,20,14,16,18,19];






//clear Outputs 

function clearOutput(){
    output.innerText = "";
    orginalStatement.innerHTML = originalArray;

}

clearResult.addEventListener("click", clearOutput);

// ------------ //


print1To10.addEventListener("click", () => {
    
    for (let i = 1; i < 11; i++) {
        output.innerHTML = output.innerHTML + i + "<br>";
       
        
       
        console.log(i); 
        
    };
    orginalStatement.innerText = "Print 1 To 10 Numbers"



})


//print Even Numbers

printEven.addEventListener("click", () => {
    
    let evenArry = orgArry;
    // console.log(evenArry);

    for( let i = 0; i <= evenArry.length; i++){
        if( evenArry[i] % 2 === 0){
            console.log(evenArry[i]);
            output.innerHTML = output.innerHTML + evenArry[i] + "<br>";

        }

    }
    orginalStatement.innerText = orgArry;



}) ;

// power of the numbers

printPower.addEventListener("click", () => {
    let evenArry = orgArry;
    for(let i = 0; i <= orgArry.length; i++){
        // console.log(evenArry[i])
        let power = evenArry[i] * evenArry [i];
        console.log(power);
        output.innerHTML = output.innerHTML + power + "<br>";

    }
})






// print Loop Patterns


// print pattern loop function 

function printPattern(rows) {
    let output = '';
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= i; j++) {
            output += j + ' ';
        }
        output += '<br>';
    }
    return output;
}

printPatternLoop.addEventListener("click", () => {
    output.innerHTML = printPattern(8);
  

})




// --------//

// Number of digits 
printDigits.addEventListener("click", () => {
    let evenArry = orgArry;
    let numberOfDigits = evenArry.length;
    output.innerHTML = `There are ${numberOfDigits} digits in the original array`;
    orginalStatement.innerHTML = orgArry;
})

// sum of digits in a number



SumOfDigits.addEventListener("click", () => {
  // Function to calculate the sum of digits in a number
  function sumOfDigits(number) {
    let sum = 0;
    let numStr = number.toString(); // Convert the number to a string to iterate through its digits
    for (let i = 0; i < numStr.length; i++) {
        sum += parseInt(numStr[i]); // Add each digit to the sum
    }
    return sum;
}

// Example number
let number = 12345;

// Calculate the sum of digits
let sum = sumOfDigits(number);

// Display the sum of digits in the output section
output.innerText = "Sum of digits in " + number + " is " + sum;




});










// =========== //

// find largest number

let largestArray = orgArry;
console.log(largestArray);

function findLargest(largestArray){
    let largest = largestArray[0];
    // console.log(largest);

    for( let i = 1; i < largestArray.length; i++){
        if(largestArray[i] > largest ){
            largest = largestArray[i];
            // console.log(largest);
        }
    }
    console.log(largest);
    return  largest;
    



}

largestNumber.addEventListener("click", () => {
    let largestArray = orgArry;
    let largest = findLargest(largestArray);
    output.innerHTML = `<h4>${largest}</h4> is the Largest Number in the original Array`;
    orginalStatement.innerHTML = orgArry; 
});

// ==========//

// find Duplicates
// Find Duplicates
let numbers = [1, 2, 3, 4, 5, 2, 3, 1, 6, 7, 8, 8, 6, 5];

function findDuplicates(numbers) {
    let duplicates = [];
    let seen = {};

    for (let i = 0; i < numbers.length; i++) {
        if (seen[numbers[i]]) {
            duplicates.push(numbers[i]);
        } else {
            seen[numbers[i]] = true;
        }
    }

    return duplicates;
}

// Assuming you have an element with the ID 'DuplicateNumber'
document.getElementById("DuplicateNumber").addEventListener("click", () => {
    let duplicatesValues = findDuplicates(numbers);

    console.log(duplicatesValues);
    console.log(numbers);

    output.innerHTML = duplicatesValues.join(", ");
    orginalStatement.innerHTML = numbers;
});

// Function to generate Fibonacci series up to 'num' elements
function fibonacciSeries(num) {
    let fibSeries = [0, 1];

    // Generate Fibonacci series
    for (let i = 2; i < num; i++) {
        fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
    }

    return fibSeries;
}


document.getElementById("FibonacciSeries").addEventListener("click", () => {
    let num = 21; // Example: Generate Fibonacci series up to 21 elements
    let fibSeries = fibonacciSeries(num);
    
    // Display the generated Fibonacci series
    console.log(fibSeries);
    output.innerHTML = `The Fibonacci series is here <br> ${fibSeries.join(' - ')}`;
    orginalStatement.innerHTML = `The Fibonacci series is here`;
});



// larest number in array 


// linear Algorithums

let numbs = [10, 20, 30, 40, 50];
let target = 30;

function linearSearch(numbs, target) {
    for (let i = 0; i < numbs.length; i++) {
        // console.log(i);
        if (numbs[i] === target) {
            return i;
        }
    }
    return -1;
}

// Assuming you have an element with the ID 'linearAlgorithum'
document.getElementById("linearAlgorithum").addEventListener("click", () => {
    console.log("click");
    let resultIndex = linearSearch(numbs, target);
    console.log(resultIndex);
    
    
    if (resultIndex.index !== -1) {
        output.innerHTML = `Target ${target} found at index ${resultIndex}, value: ${numbs[resultIndex]}`;
    } else {
        output.innerHTML = `Target ${target} not found in the array`;
    }
    orginalStatement.innerHTML = numbs;
});


// binary algorithums

let numbbs = [10, 20, 30, 40, 50];
let targett = 30;

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = arr[mid];

        if (guess === target) {
            return mid; // Found the target
        } else if (guess < target) {
            low = mid + 1; // Target is in the right half
        } else {
            high = mid - 1; // Target is in the left half
        }
    }

    return -1; // Target not found
}

// Assuming you have an element with the ID 'binaryAlgorithum' and 'output'
binaryAlgorithum.addEventListener("click", () => {
    console.log("click");
    let resultIndex = binarySearch(numbbs, target);
    console.log(resultIndex);
    
    if (resultIndex !== -1) {
        output.innerHTML = `Target ${target} found at index ${resultIndex}, value: ${numbbs[resultIndex]}`;
    } else {
        output.innerHTML = `Target ${target} not found in the array`;
    }
    orginalStatement.innerHTML = numbbs;
});

















