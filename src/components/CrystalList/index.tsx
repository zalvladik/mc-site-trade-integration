import { SelectAreaColors } from 'src/constants'
import { useItemSelector } from 'src/hooks/useItemSelector'

import {
  AreaSelect,
  Container,
  CrystalContainer,
  EmptySlot,
  ItemMiddleware,
} from 'src/components/CrystalList/styles'
import type { CrystalListProps } from 'src/components/CrystalList/types'

import Skeleton from '../Skeleton'

const CrystalList = ({
  items,
  selectToogle,
  styleForItemBorder,
  isLoading,
}: CrystalListProps): JSX.Element => {
  const {
    areaSelectRef,
    containerRef,
    itemMiddlewareRef,
    setIsMouseInside,
    areaSelectStyle,
  } = useItemSelector({
    selectToogle,
    selectAreaColor: SelectAreaColors.Green,
    isNeedAreaSelect: true,
  })

  return (
    <Container>
      <Skeleton
        emptyText="Кристали відсутні"
        isDataExist={items.length}
        isLoading={isLoading}
        size={80}
      >
        <div
          ref={containerRef}
          onMouseEnter={() => setIsMouseInside(true)}
          onMouseLeave={() => setIsMouseInside(false)}
        >
          <AreaSelect ref={areaSelectRef} style={areaSelectStyle} />
          <ItemMiddleware ref={itemMiddlewareRef} />
          {items.map(item => (
            <CrystalContainer
              key={item.id}
              id={String(item.id)}
              style={{ ...styleForItemBorder(item.id) }}
              onClick={() => selectToogle([item.id])}
            >
              <div
                style={{
                  backgroundImage: `url(/assets/crystals/${item.type}_crystal.png)`,
                }}
              />
            </CrystalContainer>
          ))}

          {Array.from({ length: 27 - items.length }).map((_, i) => (
            <EmptySlot key={i} />
          ))}
        </div>
      </Skeleton>
    </Container>
  )
}

export default CrystalList
