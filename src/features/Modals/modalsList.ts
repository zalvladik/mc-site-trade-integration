import { Modals } from 'src/features/Modals/constants'
import ModalAdvancements from 'src/features/Modals/ModalAdvancements'
import ModalEnd from 'src/features/Modals/ModalEnd'
import ModalItemsInShulker from 'src/features/Modals/ModalItemsInShulker'
import ModalItemsInTicket from 'src/features/Modals/ModalItemsInTicket'
import ModalLot from 'src/features/Modals/ModalLot'

const modalsList = [
  { name: Modals.ADVANCEMENTS, component: ModalAdvancements },
  { name: Modals.LOT, component: ModalLot },
  { name: Modals.ITEM_TICKETS, component: ModalItemsInTicket },
  { name: Modals.SHULKER_ITEMS, component: ModalItemsInShulker },
  { name: Modals.END, component: ModalEnd },
]

export default modalsList
