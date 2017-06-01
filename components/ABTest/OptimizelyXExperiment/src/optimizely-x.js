import ExperimentUseCase from './use-case'

class OptimizelyXExperimentsService {
  static async getInfo (experimentId) {
    return window.optimizely &&
      window.optimizely.get &&
      window.optimizely.get('state').getExperimentStates()[experimentId]
  }

  static async isActivated (experimentId) {
    let info = await this.getInfo(experimentId) || {}
    return info.isActive || false
  }

  static async getVariation (experimentId) {
    let info = await this.getInfo(experimentId) || {}
    return info.variation.id || null
  }
}

function createExperimentUseCase (experimentId) {
  return new ExperimentUseCase(OptimizelyXExperimentsService, experimentId)
}

export {createExperimentUseCase}
