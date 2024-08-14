import { api } from 'src/configs/ky'
import { FetchEndpoint } from 'src/constants'
import type { PostPpParticle, PpParticleT } from 'src/services/api/Pp/types'

class Pp {
  async getPpParticle(): Promise<PpParticleT[]> {
    return api(FetchEndpoint.PP).json()
  }

  async postPpParticle(json: PostPpParticle): Promise<PpParticleT> {
    return api.post(`${FetchEndpoint.PP}`, { json }).json()
  }

  async deletePpParticle(uuid: string): Promise<{ uuid: string }> {
    return api.delete(`${FetchEndpoint.PP}?uuid=${uuid}`).json()
  }
}

export default new Pp()
