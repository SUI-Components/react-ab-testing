export default class ExperimentUseCase {
  constructor (service, experimentId) {
    this.experimentId = experimentId
    this.service = service
  }

  async execute () {
    try {
      if (await this.service.isActivated(this.experimentId)) {
        return await this.service.getVariation(this.experimentId)
      }
    } catch (e) {
      return null
    }
  }
}
