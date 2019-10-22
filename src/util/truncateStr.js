export const truncateStr = (str, maxLength) => {
  return str.slice(0, maxLength - 1).concat('…')
}
