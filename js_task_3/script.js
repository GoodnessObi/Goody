function changeNumber(number) {
    let numberArray = [];
    for (let i = 1; i <= number; i++) {
        let changedNumber = '';
        let matched;
    
        if (i % 2 === 0) {
            changedNumber = 'yu';
            matched = true;
        } 
        if (i % 3 === 0) {
            if (matched) changedNumber = changedNumber.concat('-');
            changedNumber = changedNumber.concat('gi');
            matched = true;
        } 
        if (i % 5 === 0) {
            if (matched) changedNumber = changedNumber.concat('-');
            changedNumber = changedNumber.concat('oh');
            matched = true;
        } 
        if (!matched)  {
            changedNumber = i;
        }
        numberArray.push(changedNumber);
    }
    return numberArray;
}

changeNumber(100);

changeNumber(22);

