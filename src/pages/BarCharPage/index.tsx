import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import {
  ButtonList,
  CharContainer,
  CharFooter,
  Container,
  MoneyTransactionInfo,
} from 'src/pages/BarCharPage/styles'
import { useBarCharPage } from 'src/pages/BarCharPage/useBarCharPage'
import { TimeRangeEnum } from 'src/types'

import DefaultButton from 'src/components/DefaultButton'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const BarChartExample = (): JSX.Element => {
  const {
    sellerInfoSum,
    buyerInfoSum,
    options,
    barData,
    isLoading,
    setTimeRange,
    timeRange,
  } = useBarCharPage()

  return (
    <Container>
      <CharContainer>
        <Bar
          style={{
            backgroundColor: 'rgba(20, 20, 20, 0.6)',
            borderRadius: 8,
            padding: 16,
            border: '1px solid gray',
          }}
          data={barData}
          options={options}
        />

        <CharFooter>
          <MoneyTransactionInfo>
            <p>
              {'⬆ '}
              {sellerInfoSum.toFixed(1)}
            </p>

            <p>
              {'⬇ '}
              {buyerInfoSum.toFixed(1)}
            </p>

            <p>
              {sellerInfoSum === buyerInfoSum
                ? '0'
                : sellerInfoSum - buyerInfoSum > 0
                  ? `+${(sellerInfoSum - buyerInfoSum).toFixed(1)}`
                  : `-${(buyerInfoSum - sellerInfoSum).toFixed(1)}`}
            </p>
          </MoneyTransactionInfo>
          <ButtonList>
            <DefaultButton
              disabled={isLoading || timeRange === TimeRangeEnum.WEEK}
              isLoading={isLoading && timeRange === TimeRangeEnum.WEEK}
              onClick={() => setTimeRange(TimeRangeEnum.WEEK)}
            >
              Тиждень
            </DefaultButton>
            <DefaultButton
              disabled={isLoading || timeRange === TimeRangeEnum.MOUNTH}
              isLoading={isLoading && timeRange === TimeRangeEnum.MOUNTH}
              onClick={() => setTimeRange(TimeRangeEnum.MOUNTH)}
            >
              Місяць
            </DefaultButton>
            <DefaultButton
              disabled={isLoading || timeRange === TimeRangeEnum.YEAR}
              isLoading={isLoading && timeRange === TimeRangeEnum.YEAR}
              onClick={() => setTimeRange(TimeRangeEnum.YEAR)}
            >
              Рік
            </DefaultButton>
          </ButtonList>
        </CharFooter>
      </CharContainer>
    </Container>
  )
}

export default BarChartExample
