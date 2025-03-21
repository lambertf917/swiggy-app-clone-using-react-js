/*
 * Transform string by adding newline after x spaces
 * parameter: String, Number
 * return: String
 */
const transformToNewline = (input, spaces = 3) => {
  const spaceCount = 0
  const result = []
  let splittedDesc = input.split('')
  for (let i = 0; i < splittedDesc.length; i++) {
    result.push(splittedDesc[i])
    if (splittedDesc[i] === ' ') {
      ++spaceCount
      if (spaceCount % spaces === 0 && spaceCount !== 0) result.push('\n')
    }
  }
  return result.join('')
}

export { transformToNewline }
