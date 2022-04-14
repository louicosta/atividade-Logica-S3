 function moreOrLess(num1, num2){
    if (num1 > num2) {
         console.log(`O número maior é o ${num1}`)
    } else if (num1 < num2) {
         console.log(`O número maior é o ${num2}`)
    } else if (num1 = num2) {
         console.log('Os números são iguais')
    }
}

console.log(moreOrLess(5,3))