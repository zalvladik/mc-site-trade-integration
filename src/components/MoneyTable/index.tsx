import { moneyCalculator } from 'src/helpers'

import { MoneyAmountContainer } from 'src/components/MoneyTable/styles'
import type { MoneyTableProps } from 'src/components/MoneyTable/types'

const MoneyTable = ({
  money,
  moneyTitle,
  fontSize = 36,
  ...props
}: MoneyTableProps): JSX.Element => {
  return (
    <MoneyAmountContainer {...props}>
      {moneyTitle && (
        <li>
          <h1 style={{ opacity: 0.5, fontSize }}>{moneyTitle}</h1>
        </li>
      )}

      <li>
        <h1 style={{ fontSize }}>{Number(money) === 0 ? 0 : Number(money)}</h1>
        <div />
      </li>

      {Number(money) > 64 && (
        <li>
          <h1 style={{ fontSize }}>{moneyCalculator(money)}</h1>
          <div />
        </li>
      )}
      {/* {money > 256 && (
        <li>
          <h1 style={{ fontSize }}>{moneyCalculatorShulker(money)}</h1>
          <div />
        </li>
      )} */}
    </MoneyAmountContainer>
  )
}

export default MoneyTable
