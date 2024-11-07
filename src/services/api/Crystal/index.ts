import { api } from 'src/configs/ky'
import { FetchEndpoint } from 'src/constants'
import type { CrystalT } from 'src/services/api/Crystal/types'

class Crystal {
  async get(): Promise<CrystalT[]> {
    return api.get(FetchEndpoint.USER_CTYSTALS).json()
  }
}

export default new Crystal()
