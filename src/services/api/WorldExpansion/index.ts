import { api } from 'src/configs/ky'
import { FetchEndpoint } from 'src/constants'
import type {
  CreateWorldExpansionPaymentsProps,
  GetWorldExpansionProps,
  WorldExpansionT,
} from 'src/services/api/WorldExpansion/types'

class WorldExpansion {
  async getWorldExpansion({
    worldType,
  }: GetWorldExpansionProps): Promise<WorldExpansionT[]> {
    return api.get(`${FetchEndpoint.WORLD_EXPANSION}?worldType=${worldType}`).json()
  }

  async createWorldExpansionPayments(
    payLoad: CreateWorldExpansionPaymentsProps,
  ): Promise<WorldExpansionT[]> {
    return api
      .post(`${FetchEndpoint.WORLD_EXPANSION_PAYMENTS}`, {
        json: payLoad,
      })
      .json()
  }
}

export default new WorldExpansion()
