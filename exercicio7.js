
function division(num1, num2) {
    const result = num1 / num2
  
    if (result % 2 === 0) {
        return `O resultado da divisão é ${num1 / num2}, o resto é 0 e é par`
    } else {
        return `O resultado da divisão é ${num1 / num2} é ímpar`
    }
}

console.log(division(9, 2))

/*7 - Crie uma função que recebe 2 parâmetros e retorna o resultado
 da divisão entre eles. Além disso, se o resto dessa divisão for
  zero deverá imprimir no console o valor e dizer que ele é par. Ou seja,
  diag se o número é par ou ímpar.*/