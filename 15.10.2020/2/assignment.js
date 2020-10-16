const task1Element = document.getElementById('task-1');
const task2Element = document.getElementById('task-2');
const task3Element = document.getElementById('task-3');

const getMessage = () => {
    alert('Hello my dear friend!')
}

const getName = () => {
    alert('Hello ' + prompt('Enter your name') + '!')
}

const yoho = () => {
    alert('YOHOOO!')
}

const concatString = () => {
    let firstArg = prompt ('Enter First Argument')
    let secondArg = prompt ('Enter Second Argument')
    let thirdArg = prompt ('Enter Third Argument')

    let concat = (one, two, three) => {
        alert(one + ' ' + two + ' ' + three);
    }

    concat(firstArg, secondArg, thirdArg)
}

getMessage();

task1Element.addEventListener('click', getName)
task2Element.addEventListener('click', yoho)
task3Element.addEventListener('click', concatString)
