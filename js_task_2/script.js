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

function interestCalculator(arr) {
    //loop over the array
    for(let i = 0; i < data.length; i++) {
        data[i].rate = determineRate(data[i].principal, data[i].time);
        // Object.assign(data[i], {rate : determineRate(data[i].principal, data[i].time)});
    }
    // console.log(data);
    //dtermine rate using an if statemment
    function determineRate(principal, time) {
        let rate;
        if(principal >= 2500 && time > 1 && time < 3) {
            rate = 3;
        } else if (principal >= 2500 && time >= 3) {
            rate =  4;
        } else if (principal < 2500 || time <= 1) {
           rate = 2;
        } else {
            rate = 1;
        }
        return rate;
    }
    
  
    //calculate interest using (p*r*t/100)
    function calculateInterest(principal, rate, time) {
        return principal * rate * time/100;
    }
    let interestData = [];
    for (let i = 0; i < data.length; i++) {
        interestData.push (Object.assign(data[i], {interest : calculateInterest(data[i].principal, data[i].rate, data[i].time)} ))
    }
    //console.log the array below
    console.log(interestData);

    //return interestData of objects with keys principal, rate, time and interest
    return interestData

}

//execute data passing initial array 
let a = interestCalculator(data);


console.log(a);