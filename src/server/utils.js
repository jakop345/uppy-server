module.exports.hasMatch = (value, criteria) => {
  return criteria.some((i) => {
    return value === i || (new RegExp(i)).test(value)
  })
}
