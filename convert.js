function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}

const shuvoHeight = inchToFeet(75);
// console.log(shuvoHeight);



// 75
function inchToFeet2(inch){
    const feetFracton = inch / 12;
    const feetNumber = parseInt(feetFracton);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch.';
    return result;
}


const shuvoHeight2 = inchToFeet2(65);
// console.log(shuvoHeight2);


function mileToKilometer(mile){
    const kilo = mile * 1.60934 + ' km';
    return kilo;
}

// console.log(mileToKilometer(1));


function kilomiterToMile(km){
    const mile = km * 0.621371;
    return mile;
}

console.log(kilomiterToMile(1))