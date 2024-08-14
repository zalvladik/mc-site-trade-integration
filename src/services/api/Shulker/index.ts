import { api } from 'src/configs/ky'
import { FetchEndpoint } from 'src/constants'
import type { ItemT } from 'src/services/api/Items/types'
import type { ShulkerT } from 'src/services/api/Shulker/types'

class Shulker {
  async getShulkers(): Promise<ShulkerT[]> {
    return api(FetchEndpoint.USER_SHULKERS).json()
  }

  async getShulkerItems(shulkerId: number): Promise<ItemT[]> {
    return api(`${FetchEndpoint.USER_SHULKERS}/${shulkerId}`).json()
  }
}

export default new Shulker()
