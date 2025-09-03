//---------- Task 01 --------------
// Write a function to convert temperature from Celsius to Fahrenheit ?

function celsiusToFahrenheit(celsius){
    // const fahre = celsius * 9/5 + 32;
    return celsius * 9/5 + 32;
}

// console.log(celsiusToFahrenheit(25));


//---------- Task 02 --------------





//---------- Task 03 --------------

function countVowels(str){
    let vowels = 'aeiouAEIOU';
    let count = 0;

    for(let char of str){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}

const vowels = countVowels('Bangladesh');
console.log('The vowels is:', vowels);