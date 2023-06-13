// Write your code here

import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: true, lastName: true}

  showFirstHide = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  showLastHide = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName} = this.state
    let displayFirstName
    let displayLastName
    if (firstName === true) {
      displayFirstName = (
        <div className="names-container">
          <div className="button-content-container">
            <h1 className="heading">Joe</h1>
          </div>
        </div>
      )
    } else {
      displayLastName = (
        <div className="names-container">
          <div className="button-content-container">
            <h1 className="heading">Jonas</h1>
          </div>
        </div>
      )
    }
    return (
      <div className="backgroundContainer">
        <h1 className="heading-title">Show/Hide</h1>
        <div className="button-container">
          <div>
            <button
              onClick={this.showFirstHide}
              type="button"
              className="button"
            >
              Show/HideFirstName
            </button>
            {displayFirstName}
          </div>
          <div>
            <button
              onClick={this.showLastHide}
              type="button"
              className="button"
            >
              Show/HideLastName
            </button>
            {displayLastName}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
