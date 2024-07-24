import { itemTypesEnchantsFinderTranslations } from 'src/constants'
import type { EnchantsTypesEnum, ItemTypesEnchantsFinderEnum } from 'src/types'

import {
  ButtonCategory,
  ButtonItems,
  CategoryList,
  Container,
  DescriptionCategory,
  EnchantSearchInfo,
  EnchantSearchInfoDelete,
  EnchantTypeCategoryContainer,
  EnchantTypes,
} from 'src/components/Auction/AuctionCategory/styles'
import type { AuctionCategoryProps } from 'src/components/Auction/AuctionCategory/types'
import { useAuctionCategory } from 'src/components/Auction/AuctionCategory/useAuctionCategory'
import { useAuctionCategoryEnchantTypes } from 'src/components/Auction/AuctionCategory/useAuctionCategoryEnchantTypes'
import { TitleContainer } from 'src/components/Auction/styles'
import ItemSlotIcon from 'src/components/ItemSlotIcon'

const AuctionCategory = ({ ...props }: AuctionCategoryProps): JSX.Element => {
  const {
    categories,
    selectedCategory,
    setSelectedCategory,
    setDidShowEnchantControlPanel,
    didShowEnchantControlPanel,
    updatePrevEnchantSearchParams,
  } = useAuctionCategory()
  const {
    enchantItemsTypes,
    newEnchantSearchParams,
    updateEnchantSearchParams,
    isFragment,
    offVisible,
    enchantsForHoverDescription,
  } = useAuctionCategoryEnchantTypes()

  const { enchantType: selectedEnchantType, itemType } = newEnchantSearchParams

  return (
    <Container {...props}>
      {!isFragment.isEnchantFinderFragment ? (
        <div>
          <TitleContainer>
            <p>Категорії</p>
          </TitleContainer>
          <CategoryList>
            {categories.map(({ style, category, description }) => {
              const isSelected = selectedCategory === category

              return (
                <ButtonCategory
                  onClick={() => {
                    if (isSelected) {
                      setSelectedCategory('')

                      return
                    }

                    setSelectedCategory(category)
                  }}
                  aria-label={`Select category ${category}`}
                  key={category}
                  isSelected={isSelected}
                >
                  <ButtonItems isSelected={isSelected}>
                    <div style={style} />
                    <DescriptionCategory>
                      <p>{description}</p>
                    </DescriptionCategory>
                  </ButtonItems>
                </ButtonCategory>
              )
            })}
          </CategoryList>
        </div>
      ) : (
        <>
          <EnchantTypes>
            <h1>Предмет для пошуку</h1>
            <div>
              {enchantItemsTypes.map((category, i) => (
                <EnchantTypeCategoryContainer key={i}>
                  {category.map(
                    ({
                      display_name,
                      itemType,
                      enchantType,
                      onClick = () => {},
                    }) => {
                      const itemTypeAs = itemType as ItemTypesEnchantsFinderEnum

                      return (
                        <ItemSlotIcon
                          type={itemTypeAs}
                          key={itemType}
                          itemSize={60}
                          containerSize={90}
                          display_name={display_name}
                          style={{
                            cursor: 'pointer',
                            backgroundImage:
                              selectedEnchantType === enchantType
                                ? 'url(/assets/items_for_ui/slot_green.png)'
                                : 'url(/assets/items_for_ui/slot.png)',
                          }}
                          onClick={() => {
                            if (selectedEnchantType === enchantType) {
                              onClick()

                              return
                            }

                            updateEnchantSearchParams({
                              itemType,
                              enchantType,
                              enchants: {},
                            })

                            if (!didShowEnchantControlPanel) {
                              setDidShowEnchantControlPanel(true)

                              updatePrevEnchantSearchParams({ isReset: true })
                            }
                          }}
                        />
                      )
                    },
                  )}
                </EnchantTypeCategoryContainer>
              ))}
            </div>
          </EnchantTypes>
          <EnchantSearchInfo>
            <ItemSlotIcon
              style={{ margin: '0px auto' }}
              display_name={itemTypesEnchantsFinderTranslations[itemType]}
              type={itemType}
              containerSize={86}
              itemSize={58}
              enchants={
                enchantsForHoverDescription.length
                  ? enchantsForHoverDescription
                  : null
              }
            >
              <EnchantSearchInfoDelete
                isVisible={Boolean(!selectedEnchantType)}
                onClick={() => {
                  if (!didShowEnchantControlPanel) {
                    setDidShowEnchantControlPanel(true)

                    return
                  }

                  offVisible()
                  updateEnchantSearchParams({
                    enchants: {},
                    enchantType: '' as EnchantsTypesEnum,
                    itemType: '',
                  })

                  updatePrevEnchantSearchParams({ isReset: true })
                }}
              >
                <div
                  style={{
                    backgroundImage: `url('/assets/items_for_ui/${didShowEnchantControlPanel ? 'barrier' : 'prev'}.png')`,
                  }}
                />
              </EnchantSearchInfoDelete>
            </ItemSlotIcon>
          </EnchantSearchInfo>
        </>
      )}
    </Container>
  )
}

export default AuctionCategory