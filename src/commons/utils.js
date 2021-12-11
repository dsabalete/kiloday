export const getFormattedDateString = () => {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  })
}

export const getDateTimeFormat = (time) => {
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }
  return new Intl.DateTimeFormat('en-US', options).format(time)
}
