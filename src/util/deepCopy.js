export const deepCopy = (obj) => {
  const dest = {}
  for (const prop in obj) {
    if (typeof obj[prop] === 'object') {
      dest[prop] = deepCopy(obj[prop])
    } else {
      dest[prop] = obj[prop]
    }
  }
  return dest
}
