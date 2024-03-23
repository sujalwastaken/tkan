let strc1 = document.querySelectorAll('.answerline .hide');
strc1.forEach((element) => {

    let answer = element.textContent.trim();
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.style.textAlign = 'center';
    inputField.innerText = 'Center Text';
    inputField.style.borderWidth = '3px';
    inputField.style.backgroundColor = 'transparent'; 
    inputField.style.fontSize = '17';
    inputField.style.color = 'rgba(128, 128, 128)';

    inputField.addEventListener('input', () => {
        const inputValue = inputField.value.trim();
        if (inputValue === answer) {
        inputField.style.borderColor = 'rgb(171, 255, 193)';
        } else if (inputValue.length === answer.length) {
        inputField.style.borderColor = 'rgb(247, 255, 171)';
        } else if (inputValue === '') {
        inputField.style.borderColor = 'initial';
        } else {
        inputField.style.borderColor = 'rgb(255, 171, 171)';
        }
    });
    element.parentNode.insertBefore(inputField, element);
});

let strc2 = document.querySelectorAll('.hide.toggle .answerline');
strc2.forEach((element) => {

    let answer = element.textContent.trim();
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.style.textAlign = 'center';
    inputField.innerText = 'Center Text';
    inputField.style.borderWidth = '3px';
    inputField.style.backgroundColor = 'transparent'; 
    inputField.style.fontSize = '17';
    inputField.style.color = 'rgba(128, 128, 128)';

    inputField.addEventListener('input', () => {
        const inputValue = inputField.value.trim();
        if (inputValue === answer) {
        inputField.style.borderColor = 'rgb(171, 255, 193)';
        } else if (inputValue.length === answer.length) {
        inputField.style.borderColor = 'rgb(247, 255, 171)';
        } else if (inputValue === '') {
        inputField.style.borderColor = 'initial';
        } else {
        inputField.style.borderColor = 'rgb(255, 171, 171)';
        }
    });
    element.parentNode.parentNode.querySelector('.toggle .answerline').after(inputField);
    element.parentNode.parentNode.querySelector('.toggle .answerline').remove()
});