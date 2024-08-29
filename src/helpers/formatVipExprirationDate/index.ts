import type { FormatVipExprirationDateT } from 'src/helpers/formatVipExprirationDate/types'
import { UkrainianMonths } from 'src/types'

export const formatDateToUK = (dateStr: Date): FormatVipExprirationDateT => {
  const clientUTCOffset = -new Date().getTimezoneOffset() / 60
  const date = new Date(dateStr)

  const userOffsetInMinutes = clientUTCOffset * 60

  const userDate = new Date(date.getTime() + userOffsetInMinutes * 60 * 1000)

  const day = userDate.getUTCDate()
  const year = userDate.getUTCFullYear()
  const month = UkrainianMonths[userDate.getUTCMonth()]
  const hours = userDate.getUTCHours().toString().padStart(2, '0')
  const minutes = userDate.getUTCMinutes().toString().padStart(2, '0')
  const seconds = userDate.getUTCSeconds().toString().padStart(2, '0')

  return { year, day, month, hours, minutes, seconds }
}
