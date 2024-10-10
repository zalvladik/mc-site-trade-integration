import { useEffect, useState } from 'react'
import { formatDateToNumbers } from 'src/helpers/formatDateToSQL'
import { useTradeHistoryPrice } from 'src/hooks/useGetTradeHistoryPrice'
import { TimeRangeEnum } from 'src/types'

export const useBarCharPage = () => {
  const [timeRange, setTimeRange] = useState(TimeRangeEnum.WEEK)

  const firstTo = new Date()
  const firstFrom = new Date(firstTo)

  firstFrom.setDate(firstFrom.getDate() - 7)

  const [to, setTo] = useState<Date>(firstTo)
  const [from, setFrom] = useState<Date>(firstFrom)

  const titleText = () => {
    switch (timeRange) {
      case TimeRangeEnum.WEEK:
        return 'Діаграма торгівлі за останній тиждень'
      case TimeRangeEnum.MOUNTH:
        return 'Діаграма торгівлі за останній місяць'
      case TimeRangeEnum.YEAR:
        return 'Діаграма торгівлі за останній рік'
      default:
        return 'Діаграма торгівлі за останній тиждень'
    }
  }

  const changeTimeRange = () => {
    const newTo = new Date()
    const newFrom = new Date(newTo)

    switch (timeRange) {
      case TimeRangeEnum.WEEK:
        newFrom.setDate(newTo.getDate() - 7)
        break
      case TimeRangeEnum.MOUNTH:
        newFrom.setMonth(newTo.getMonth() - 1)
        break
      case TimeRangeEnum.YEAR:
        newFrom.setFullYear(newTo.getFullYear() - 1)
        break
      default:
        newFrom.setDate(newTo.getDate() - 7)
    }

    setFrom(newFrom)
    setTo(newTo)
  }

  const { data, isLoading, mutate } = useTradeHistoryPrice()

  const [chartInfo, setChartInfo] = useState<{
    [key: string]: { sellerInfo: number; buyerInfo: number }
  }>({})

  useEffect(() => {
    changeTimeRange()

    mutate({ from, to })
  }, [timeRange])

  useEffect(() => {
    if (data.length) {
      const chartInfo: {
        [key: string]: { sellerInfo: number; buyerInfo: number }
      } = {}

      data.forEach(item => {
        const { day, month } = formatDateToNumbers(item.createdAt)

        if (chartInfo[String(`${month}/${day}`)]) {
          if (item.isSeller) {
            chartInfo[String(`${month}/${day}`)] = {
              sellerInfo:
                +chartInfo[String(`${month}/${day}`)].sellerInfo + +item.price,
              buyerInfo: 0,
            }
          }

          if (!item.isSeller) {
            chartInfo[String(`${month}/${day}`)] = {
              buyerInfo:
                +chartInfo[String(`${month}/${day}`)].buyerInfo + +item.price,
              sellerInfo: 0,
            }
          }
        }

        if (!chartInfo[String(`${month}/${day}`)]) {
          if (item.isSeller) {
            chartInfo[String(`${month}/${day}`)] = {
              sellerInfo: item.price,
              buyerInfo: 0,
            }
          }

          if (!item.isSeller) {
            chartInfo[String(`${month}/${day}`)] = {
              buyerInfo: item.price,
              sellerInfo: 0,
            }
          }
        }
      })

      setChartInfo(chartInfo)
    }
  }, [data])

  const sellerInfo = Object.values(chartInfo).map(item => item.sellerInfo)

  const buyerInfo = Object.values(chartInfo).map(item => item.buyerInfo)

  const datesInfo = Object.keys(chartInfo)

  const barData = {
    labels: datesInfo,
    datasets: [
      {
        label: 'Прибуток',
        data: sellerInfo,
        backgroundColor: 'rgb(12, 189, 27)',
        borderWidth: 10,
        barThickness: 40,
      },
      {
        label: 'Витрати',
        data: buyerInfo,
        backgroundColor: 'rgb(170, 33, 28)',
        borderWidth: 10,
        barThickness: 40,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          font: {
            size: 20,
            family: 'Minecraft',
          },
          color: 'rgb(220,220,220)',
        },
        position: 'top' as const,
      },
      title: {
        display: true,
        text: titleText(),
        color: 'rgb(220,220,220)',
        font: {
          size: 24,
          family: 'Minecraft',
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255,255,255,0.3)',
          lineWidth: 1,
        },
        ticks: {
          font: {
            size: 18,
            family: 'Minecraft',
          },
          color: 'rgb(220,220,220)',
        },
      },
      y: {
        grid: {
          color: 'rgba(255,255,255,0.3)',
          lineWidth: 1,
        },
        ticks: {
          color: 'rgb(220,220,220)',
          font: {
            size: 18,
            family: 'Minecraft',
          },
          callback(value: string | number) {
            return Number.isInteger(value) ? value : ''
          },
          stepSize: 1,
        },
      },
    },
  }

  const sellerInfoSum = sellerInfo.reduce((num, item) => {
    return num + item
  }, 0)

  const buyerInfoSum = buyerInfo.reduce((num, item) => {
    return num + item
  }, 0)

  return {
    sellerInfoSum,
    buyerInfoSum,
    options,
    barData,
    setTimeRange,
    isLoading,
    timeRange,
  }
}
