//Usando condicional if...else

/*function evenOrOdd(number) {
    if (number % 2 == 0) {
        console.log(`O número ${number} é par`)
    } else if (number % 2 != 0) {
        console.log(`O número ${number} é ímpar`)
    }
}

console.log(evenOrOdd(350))*/

//Usando condicional Switch

function evenOrOdd(number) {
    let rest = number % 2
    switch (rest) {
        case 0:
            return `O número ${number} é par`
        default:
            return `O número ${number} é ímpar`
    }
}

console.log(evenOrOdd(6))