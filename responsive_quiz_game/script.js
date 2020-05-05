const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const question = document.querySelectorAll('.question');
let currentlySelected = 0;
let optionButtons = document.querySelectorAll("input[type = 'radio']");

console.log(optionButtons);
// console.log(question);
prevBtn.addEventListener('click', () => {
    question[currentlySelected].classList.remove('active'); currentlySelected--;
    question[currentlySelected].classList.add('active');
    nextBtn.disabled = false;

    if(currentlySelected ===0) {
        prevBtn.disabled = true;
    }

});

nextBtn.addEventListener('click', () =>{
    question[currentlySelected].classList.remove('active'); currentlySelected++;
    question[currentlySelected].classList.add('active');
    prevBtn.disabled = false;

    if(question.length === currentlySelected + 1) {
        nextBtn.disabled = true;
    }
});


for(let i = 0; i < optionButtons.length; i++) {
    optionButtons[i].addEventListener('change', () => {
        console.log(i);
        if (this.classList = 'right-answer') {
            console.log('correct!');
            Input
        }
    })
}


