export default function getResult({text, input}) {
  const arrText = text.split(/\s+/)
  const arrInput = input.split(/\s+/)

  const correctWords = arrInput.filter((word, i) => word === arrText[i]).length
  const incorrect = arrInput.filter((word, i) => word !== arrText[i]).length
  const accuracy = Math.floor((correctWords / (correctWords + incorrect)) * 100) || 0
  const wordCouner = arrInput.length

  return [wordCouner, correctWords, accuracy]
}
