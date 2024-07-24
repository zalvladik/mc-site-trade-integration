import { api } from 'src/configs/ky'
import { FetchEndpoint } from 'src/constants'
import type { ItemT } from 'src/services/api/Items/types'
import type { ItemTicketT } from 'src/services/api/ItemTicket/types'

class ItemTicket {
  async post(itemIds: number[]): Promise<ItemTicketT> {
    return api
      .post(FetchEndpoint.ITEM_TICKET, {
        json: { itemIds },
      })
      .json()
  }

  async getItemTickets(): Promise<ItemTicketT[]> {
    return api(FetchEndpoint.USER_ITEM_TICKETS).json()
  }

  async getItems(itemTicketId: number): Promise<ItemT[]> {
    return api(`${FetchEndpoint.ITEM_TICKET}/${itemTicketId}`).json()
  }

  async removeItems(itemIds: number[]): Promise<ItemT[]> {
    return api
      .put(`${FetchEndpoint.ITEM_TICKET}`, {
        json: { itemIds },
      })
      .json()
  }

  async deleteItemTicket(itemTicketId: number): Promise<void> {
    return api
      .delete(`${FetchEndpoint.ITEM_TICKET}`, {
        json: { itemTicketId },
      })
      .json()
  }
}

export default new ItemTicket()
