import { api } from 'src/configs/ky'
import { FetchEndpoint } from 'src/constants'
import type { TwinkResponse } from 'src/services/api/Twink/types'

class Twink {
  async getTwinks(): Promise<TwinkResponse[]> {
    return api(`${FetchEndpoint.TWINK}`).json()
  }

  async createTwink(twinkName: string): Promise<any> {
    return api.post(`${FetchEndpoint.TWINK}`, { json: { twinkName } }).json()
  }
}

export default new Twink()
