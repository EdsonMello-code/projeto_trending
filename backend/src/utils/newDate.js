module.exports = () => {
  const today = new Date()
  const newDate =
    `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`

  return newDate
}
