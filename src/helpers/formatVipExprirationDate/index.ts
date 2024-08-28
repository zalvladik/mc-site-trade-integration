import type { FormatVipExprirationDateT } from 'src/helpers/formatVipExprirationDate/types'
import { UkrainianMonths } from 'src/types'

export const formatDateToUK = (dateStr: Date): FormatVipExprirationDateT => {
  const date = new Date(dateStr)
  const day = date.getUTCDate()
  const year = date.getUTCFullYear()
  const month = UkrainianMonths[date.getMonth()]
  const hours = date.getUTCHours().toString().padStart(2, '0')
  const minutes = date.getUTCMinutes().toString().padStart(2, '0')
  const seconds = date.getUTCSeconds().toString().padStart(2, '0')

  return { year, day, month, hours, minutes, seconds }
}
