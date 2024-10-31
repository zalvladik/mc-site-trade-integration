import { FETCH_URL_IMG } from 'src/constants'

import Durability from 'src/components/Durability'
import ItemGlow from 'src/components/ItemGlow'
import {
  ItemAmount,
  ItemIcon,
  ItemSlotIconContainer,
} from 'src/components/ItemSlotIcon/styles'
import type { ItemSlotIconProps } from 'src/components/ItemSlotIcon/types'

import { useItemSlotIcon } from './useItemSlotIcon'

const ItemSlotIcon = ({
  id,
  amount = 1,
  type,
  enchants,
  durability,
  description,
  display_name,
  style,
  lot,
  containerSize,
  didShowDescription = true,
  itemSize,
  fontSize = 25,
  onClick,
  children,
}: ItemSlotIconProps): JSX.Element => {
  const { itemSlotIconRef } = useItemSlotIcon({
    description: description || enchants,
    display_name,
    durability,
    didShowDescription,
  })

  const imageUrl = `${FETCH_URL_IMG}/${type.slice(0, 2)}/${type}.png`

  return (
    <ItemSlotIconContainer
      ref={itemSlotIconRef}
      id={String(id)}
      data-lot={lot ? !lot.isSold : false}
      style={{
        ...style,
        width: containerSize,
        height: containerSize,
        backgroundImage: style?.backgroundImage
          ? style.backgroundImage
          : 'url(/assets/items_for_ui/slot.png)',
      }}
      onClick={() => onClick && onClick()}
    >
      <ItemIcon
        style={{
          backgroundImage: `url(${imageUrl}`,
          width: itemSize,
          height: itemSize,
        }}
      />
      {children}
      {amount > 1 && <ItemAmount style={{ fontSize }}>{amount}</ItemAmount>}

      {enchants && (
        <ItemGlow
          containerSize={containerSize}
          itemSize={itemSize}
          imageUrl={imageUrl}
        />
      )}

      {durability && (
        <Durability durability={durability} containerSize={containerSize} />
      )}
    </ItemSlotIconContainer>
  )
}

export default ItemSlotIcon
