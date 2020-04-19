
// function changeNumber(number) {
//     let numberArray = [];
//     for (let i = 1; i <= number; i++) {
//         let changedNumber = '';
//         let matched;
    
//         if (i % 2 === 0) {
//             changedNumber = 'yu';
//             matched = true;
//         } 
//         if (i % 3 === 0) {
//             if (matched) changedNumber = changedNumber.concat('-');
//             changedNumber = changedNumber.concat('gi');
//             matched = true;
//         } 
//         if (i % 5 === 0) {
//             if (matched) changedNumber = changedNumber.concat('-');
//             changedNumber = changedNumber.concat('oh');
//             matched = true;
//         } 
//         if (!matched)  {
//             changedNumber = i;
//         }
//         numberArray.push(changedNumber);
//     }
//     console.log(numberArray);
// }

function changeNumber(number) {
    let numberArray = [];
    for (let i = 1; i <= number; i++) {
        if (i % 30 === 0) {
            numberArray.push('yu-gi-oh');
        } else if (i % 15 === 0) {
            numberArray.push('gi-oh');
        } else if (i % 6 === 0) {
            numberArray.push('yu-gi');
        } else if (i % 5 === 0) {
            numberArray.push('oh');
        } else if (i % 3 === 0) {
            numberArray.push('gi');
        } else if (i % 2 === 0) {
            numberArray.push('yu');
        } else numberArray.push(i);
    }
    return numberArray;
}

changeNumber(100);

changeNumber(22);

