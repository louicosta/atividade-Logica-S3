
function weekday(day) {
    switch (day) {
    case 1:
        return ('Domingo')
    case 2:
        return ('Segunda-feira')
    case 3:
        return ('Terça-feira')
    case 4:
        return ('Quarta-feira')
    case 5:
        return ('Quinta-feira')
    case 6:
        return ('Sexta-feira')
    case 7:
        return ('Sábado')
    default:
        return (`${day} não é um dia da semana`)
    }
}

console.log(weekday(8))