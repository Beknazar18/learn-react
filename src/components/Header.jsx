import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Stats from './Stats'

class Header extends Component {
  render() {
    return (
      <header>
        <Stats statData={this.props.tasks} />
        <h1>{this.props.title}</h1>
      </header>
    )
  }
}

Header.defaultProps = {
  title: 'Default title'
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header
