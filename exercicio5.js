function ofAge(year) {
    if (year <= 2004) {
        return `Você é maior, sua idade é ${2022 - year}`
    } else (year > 2004)
        return `Você é menor, sua idade é ${2022 - year}`
}

console.log(ofAge(2003))