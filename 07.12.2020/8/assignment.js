const num = [1, 2, 5, 6, 10]

// Массив из чисел больше 5ти
console.log(num.filter(item => item > 5))

// Массив умножить на число из объекта
const objValue = {value: 2}
console.log(num.map((number) => { return number * objValue.value }))

//Перемножить весь массив
console.log((num).reduce((accumulator, currentValue) => accumulator * currentValue))

//Максимальное число в массиве
const findMax = (arr) => {
    let i = 0
    arr.map((item) => { if(item > i) {i = item} })
    console.log(i)
}

findMax(num)

//Максимальное и минимальное число в массиве
const findMaxMin = (arr) => {
    const j = [arr[0],arr[0]]

    arr.map((item) => {
        if(item > j[0]){
            j[0] = item
        } else if (item < j[1]){
            j[1] = item
        }
    })

    let [max, min] = j

    console.log('максимальное -', max)
    console.log('минимальное -', min)
}

findMaxMin(num)

//Неповторяющиеся значения


