import { api } from 'src/configs/ky'
import { FetchEndpoint } from 'src/constants'
import type {
  GetWorldExpansionProps,
  WorldExpansionT,
} from 'src/services/api/WorldExpansion/types'

class WorldExpansion {
  async getWorldExpansion({
    worldType,
  }: GetWorldExpansionProps): Promise<WorldExpansionT[]> {
    return api.get(`${FetchEndpoint.WORLD_EXPANSION}?worldType=${worldType}`).json()
  }
}

export default new WorldExpansion()
