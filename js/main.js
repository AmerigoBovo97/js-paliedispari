//html variables
const palindromeResult = document.getElementById("palindrome-result"); // html element for the palindrome result output
const choosenWord = document.getElementById("word-to-check"); // html element for the word input
const palindromeForm = document.getElementById("palindrome-form"); // html element for the word input submit
const evenOddResult = document.getElementById("even-odd-result"); // html element for the even odd result output
const choosenNumber = document.getElementById("choosen-number"); // html element for the number input
const evenOddInput = document.getElementById("even-radio"); // html element for the even input
const numberForm = document.getElementById("even-odd-form"); // html element for the number input submit


// palindome logic ============================================================================================================================
palindromeForm.addEventListener("submit", function(event){

    event.preventDefault();
    
    resultDisplayer(palindromeResult, isPalindrome(choosenWord.value.replace(/\s+/g, "")));

})


function reverseString(stringToReverse){
    return stringToReverse.split("").reverse().join("");
}

function isPalindrome(word){
    
    return word === reverseString(word);
}


// even odd game logic ========================================================================================================================
numberForm.addEventListener("submit", function(event){

    event.preventDefault();
    
    const num = parseInt(choosenNumber.value);

    resultDisplayer(evenOddResult, evenOdd(num, evenOddInput.checked));
   
})

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function isEven(num){
    return num % 2 === 0;
}

function evenOdd(num1, even){
    const sum = isEven(num1 + getRndInteger(1, 5));
    return (sum && even) || (!sum && !even);
}


//result displayer ============================================================================================================================
function  resultDisplayer(element, result){
    
    if (result){
        element.classList.replace(element.classList[0], "bg-success");
    }else{
        element.classList.replace(element.classList[0], "bg-danger");
    }
    
}
