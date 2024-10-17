import { api } from 'src/configs/ky'
import { FetchEndpoint } from 'src/constants'
import type {
  GetAllUsersAdvancementsT,
  GetUserAdvancementsApiT,
  GetUserPlaytimeApiT,
} from 'src/services/api/Stats/types'

class Stats {
  async getAllAdvancements(): Promise<GetAllUsersAdvancementsT[]> {
    return api.get(FetchEndpoint.USER_ADVANCEMENTS).json()
  }

  async getUserAdvancementsApi(userId: number): Promise<GetUserAdvancementsApiT> {
    return api.get(`${FetchEndpoint.USER_ADVANCEMENTS}/${userId}`).json()
  }

  async getUserPlayTimeApi(): Promise<GetUserPlaytimeApiT> {
    return api.get(`${FetchEndpoint.USER_PLAY_TIME}`).json()
  }
}

export default new Stats()
