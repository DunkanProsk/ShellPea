let currentResult = 0
let dataOper = []
let eventValue = 0

const getResult = () => {
    switch(eventValue) {
        case 1:
            currentResultNew = currentResult + Number(userInput.value)
            pushData('+', currentResultNew)
            return currentResult = currentResultNew
      
        case 2:
            currentResultNew = currentResult - Number(userInput.value)
            pushData('-', currentResultNew)
            return currentResult = currentResultNew
        
        case 3:
            currentResultNew = currentResult * Number(userInput.value)
            pushData('*', currentResultNew)
            return currentResult = currentResultNew

        case 4:
            currentResultNew = currentResult / Number(userInput.value)
            pushData('/', currentResultNew)
            return currentResult = currentResultNew
    }
}

let pushData = (operation, resultNew) => {
    let story = '0'

    dataOper.push({
        lastResult: currentResult,
        Operation: operation,
        Operand: Number(userInput.value),
        Result: resultNew
    })

    dataOper.forEach(function(item){
        return story = `${story} ${item.Operation} ${item.Operand}`
    })

    console.log(dataOper)
    outputResult(resultNew, story)
}

addBtn.addEventListener('click', () => {eventValue = 1; getResult()})
subtractBtn.addEventListener('click', () => {eventValue = 2; getResult()})
multiplyBtn.addEventListener('click', () => {eventValue = 3; getResult()})
divideBtn.addEventListener('click', () => {eventValue = 4; getResult()})
