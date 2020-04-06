let data = [
    {
        principal: 2500,
        time: 1.8
    },
    {
        principal: 1000,
        time: 5
    },
    {
        principal: 3000,
        time: 1
    },
    {
        principal: 2000,
        time: 3
    }
];

let rate;
let interest;

function interestCalculator(arr) {
    //loop over the array
    
    //dtermine rate using an if statemment
    if(principal >= 2500 && time > 1 < 3) {
        rate = 3;
    } else if (principal >= 2500 && time >= 3) {
        rate = 4;
    } else if (principal < 2500 || time <= 1) {
        rate =2;
    } else {
        rate = 1
    }

    //calculate interest using (p*r*t/100)
    interest

    //console.log the array below

    //return newArray of objects with keys principal, rate, time and interest


}

//execute data passing initial array 
interestCalculator(data);