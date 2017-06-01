/* eslint eqeqeq: "off" */

import React, {Component, PropTypes} from 'react'

class AbTestToggle extends Component {
  render () {
    let {variation, children} = this.props

    var filterFunc
    if (variation) {
      filterFunc = child => child.props.variationId == variation
    } else {
      filterFunc = child => child.props.defaultVariation
    }

    let child = children.filter(filterFunc)[0] || null

    if (child) {
      let newProps = {...child.props}
      delete newProps.variationId
      delete newProps.defaultVariation
      child = React.createElement(child.type, newProps)
    }

    return child
  }
}

AbTestToggle.displayName = 'AbTestToggle'

AbTestToggle.propTypes = {
  variation: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.arrayOf(PropTypes.element).isRequired
}

export default AbTestToggle
