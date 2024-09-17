export const formatDateToNumbers = (dateInput: any): { [key: string]: string } => {
  const date = dateInput instanceof Date ? dateInput : new Date(dateInput)

  if (Number.isNaN(date.getTime())) {
    throw new Error('Invalid date')
  }

  const clientUTCOffset = -new Date().getTimezoneOffset() / 60

  const userOffsetInMinutes = clientUTCOffset * 60

  const userDate = new Date(date.getTime() + userOffsetInMinutes * 60 * 1000)

  const year = userDate.getFullYear().toString()
  const month = String(userDate.getMonth() + 1).padStart(2, '0')
  const day = String(userDate.getDate()).padStart(2, '0')
  const hours = String(userDate.getHours()).padStart(2, '0')
  const minutes = String(userDate.getMinutes()).padStart(2, '0')
  const seconds = String(userDate.getSeconds()).padStart(2, '0')

  return { year, month, day, hours, minutes, seconds }
}
