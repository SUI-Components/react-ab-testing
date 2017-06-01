/* eslint handle-callback-err: "off" */

import React, {Component, PropTypes} from 'react'
import AbTestToggle from '@schibstedspain/react-ab-testing-toggle'
import {createExperimentUseCase} from './optimizely-x'

class AbTestOptimizelyXExperiment extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    this._experiment = createExperimentUseCase(this.props.experimentId)
    this._experiment.execute()
      .then(variation => this.setState({variation}))
  }

  render () {
    let {variation} = this.state
    return <AbTestToggle variation={variation}>{this.props.children}</AbTestToggle>
  }
}

AbTestOptimizelyXExperiment.displayName = 'AbTestOptimizelyXExperiment'

AbTestOptimizelyXExperiment.propTypes = {
  experimentId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired
}

export default AbTestOptimizelyXExperiment
