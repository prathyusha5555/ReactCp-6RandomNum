import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  getRandomNumber = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)
    this.setState({number: newRandomNumber})
  }

  render() {
    const {number} = this.state
    return (
      <div className="bg-container">
        <div className="number-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.getRandomNumber}
          >
            Generate
          </button>
          <p className="number">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
