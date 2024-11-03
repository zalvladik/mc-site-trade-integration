import type { LocalStorageKey } from 'src/constants'
import { RoutesPath } from 'src/router/routes'
import type { ValueOf } from 'src/types'

export const copyText = (text: string): Promise<void> => {
  if (!navigator.clipboard.writeText) {
    return Promise.reject(new Error('The Clipboard API is not available.'))
  }

  return navigator.clipboard.writeText(text)
}

const processDataFromStorage = <T>(data: string): T | string => {
  try {
    const parsedData = JSON.parse(data)

    if (typeof parsedData === 'object' && parsedData !== null) {
      return parsedData
    }
  } catch {
    /* empty */
  }

  return data || ''
}

export const getFromLocalStorage = <T = string>(
  key: ValueOf<LocalStorageKey>,
): T => {
  const data = localStorage.getItem(key) || ''

  return processDataFromStorage<T>(data) as T
}

export const millisecondsToDate = (milliseconds: number | string): string => {
  const date = new Date(Number(milliseconds))

  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')

  const formattedDateTime = `${year}-${month}-${day}`

  return formattedDateTime
}

export const millisecondsToTime = (
  milliseconds: number | string,
): { [key: string]: string } => {
  let totalMilliseconds = Number(milliseconds)

  const days = Math.floor(totalMilliseconds / (1000 * 60 * 60 * 24))
    .toString()
    .padStart(2, '0')
  totalMilliseconds %= 1000 * 60 * 60 * 24

  const hours = Math.floor(totalMilliseconds / (1000 * 60 * 60))
    .toString()
    .padStart(2, '0')
  totalMilliseconds %= 1000 * 60 * 60

  const minutes = Math.floor(totalMilliseconds / (1000 * 60))
    .toString()
    .padStart(2, '0')
  totalMilliseconds %= 1000 * 60

  const seconds = Math.floor(totalMilliseconds / 1000)
    .toString()
    .padStart(2, '0')

  return { days, hours, minutes, seconds }
}

export const moneyCalculator = (count: number): string => {
  const countNumber = Number(count)
  const fullStacks = Math.floor(countNumber / 64)
  const remainder = Number((countNumber % 64).toFixed(1))

  if (countNumber < 64) {
    return remainder === 0 ? `0` : `${countNumber}`
  }

  return `${fullStacks} ст. ${remainder === 0 ? '' : `+ ${remainder}`}`
}

export const generatePageNumbers = (
  currentPage: number,
  totalPages: number,
  maxVisiblePages: number = 9,
): number[] => {
  const half = Math.floor(maxVisiblePages / 2)
  let start = currentPage - half
  let end = currentPage + half

  if (start < 1) {
    start = 1
    end = Math.min(totalPages, start + maxVisiblePages - 1)
  }

  if (end > totalPages) {
    end = totalPages
    start = Math.max(1, end - maxVisiblePages + 1)
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
}

export const sliceText = (text: string, maxLength: number): string => {
  if (text.length > maxLength) return `${text.slice(0, maxLength)}...`

  return text
}

export const auctionUrlQueryParams = (
  category?: string,
  page?: number,
  display_nameOrType?: string,
): string => {
  const params = new URLSearchParams()

  if (category) {
    params.set('category', category)
  }

  if (page) {
    params.set('page', page.toString())
  }

  if (display_nameOrType) {
    params.set('display_nameOrType', display_nameOrType)
  }

  return `${RoutesPath.AUCTION}/?${params.toString()}`
}
