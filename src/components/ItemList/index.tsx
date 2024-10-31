import { CategoryEnum } from 'src/constants'

import {
  AreaSelect,
  Container,
  EmptySlot,
  ItemMiddleware,
  StyledIoDiamondOutline,
} from 'src/components/ItemList/styles'
import type { ItemListProps } from 'src/components/ItemList/types'
import { UseItemList } from 'src/components/ItemList/useItemList'
import ItemSlotIcon from 'src/components/ItemSlotIcon'
import Skeleton from 'src/components/Skeleton'

const ItemList = ({
  items,
  selectToogle,
  styleForItemBorder,
  selectAreaColor,
  isNeedAreaSelect = true,
  isLoading,
  emptyText,
  itemSlotIconProps,
  ...props
}: ItemListProps): JSX.Element => {
  const {
    areaSelectRef,
    containerRef,
    itemMiddlewareRef,
    setIsMouseInside,
    areaSelectStyle,
    openShulkerModal,
    setSelectedItem,
  } = UseItemList({ selectToogle, selectAreaColor, isNeedAreaSelect })

  return (
    <Container
      ref={containerRef}
      onMouseEnter={() => setIsMouseInside(true)}
      onMouseLeave={() => setIsMouseInside(false)}
      {...props}
    >
      <Skeleton
        emptyText={emptyText}
        isDataExist={items.length}
        isLoading={isLoading}
        size={80}
      >
        <AreaSelect ref={areaSelectRef} style={areaSelectStyle} />
        <ItemMiddleware ref={itemMiddlewareRef} />
        {items.map(item => {
          const isExistLot = item.lot ? !item.lot?.isSold : false

          return (
            <ItemSlotIcon
              key={item.id + item.categories[0]}
              onClick={() => {
                if (item.categories.find(item => item === CategoryEnum.SHULKERS)) {
                  openShulkerModal(item.id)
                } else {
                  setSelectedItem(null)
                }

                return selectToogle && selectToogle([item.id])
              }}
              style={{
                ...(styleForItemBorder
                  ? styleForItemBorder(
                      item.id,
                      item.display_name,
                      item.type,
                      item.categories,
                    )
                  : {}),
                margin: 4,
                opacity: isExistLot ? 0.8 : 1,
              }}
              {...itemSlotIconProps}
              {...item}
            >
              {isExistLot && (
                <div
                  style={{
                    position: 'absolute',
                    left: '84%',
                    top: '12%',
                    translate: '-50% -50%',
                  }}
                >
                  <StyledIoDiamondOutline size={36} />
                </div>
              )}
            </ItemSlotIcon>
          )
        })}

        {Array.from({ length: 27 - items.length }).map((_, i) => (
          <EmptySlot key={i} />
        ))}
      </Skeleton>
    </Container>
  )
}

export default ItemList
