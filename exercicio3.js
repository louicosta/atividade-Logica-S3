function finalEvaluation(av1, av2, av3, av4) {
    const media = (av1 + av2 + av3 + av4)/4

      if (media >= 7 && media <= 10) {
          return `Aprovado, sua média foi ${media}`
      } else if (media >= 5 && media < 7) {
          return `Recuperação, sua média foi ${media}`
      } else if (media < 5 && media >= 0) {
          return `Reprovado, sua média foi ${media}`
      }
}

console.log(finalEvaluation(0.5, 8, 1.9, 4.5))