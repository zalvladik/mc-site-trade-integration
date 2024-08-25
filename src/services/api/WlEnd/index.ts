import { api } from 'src/configs/ky'
import { FetchEndpoint } from 'src/constants'
import type { WlEndT } from 'src/services/api/WlEnd/types'

class WlEnd {
  async getWlEndListPlayers(): Promise<WlEndT[]> {
    return api.get(FetchEndpoint.WL_END).json()
  }

  async postWlEnd(): Promise<WlEndT> {
    return api.get(FetchEndpoint.WL_END).json()
  }
}

export default new WlEnd()
