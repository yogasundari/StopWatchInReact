import './index.css'
import {Component} from 'react'

class Stopwatch extends Component {
  state = {
    timeInSeconds: 0,
    isRunning: false,
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  renderMinutes = () => {
    const {timeInSeconds} = this.state
    const minutes = Math.floor(timeInSeconds / 60)
    return minutes < 10 ? `0${minutes}` : minutes
  }

  renderSeconds = () => {
    const {timeInSeconds} = this.state
    const seconds = Math.floor(timeInSeconds % 60)
    return seconds < 10 ? `0${seconds}` : seconds
  }

  startButton = () => {
    if (!this.state.isRunning) {
      this.timerId = setInterval(this.runClock, 1000)
      this.setState({isRunning: true})
    }
  }

  runClock = () => {
    this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds + 1}))
  }

  stopButton = () => {
    clearInterval(this.timerId)
    this.setState({isRunning: false})
  }

  restartButton = () => {
    clearInterval(this.timerId)
    this.setState({timeInSeconds: 0, isRunning: false})
  }

  render() {
    const displayTime = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="app-container">
        <div className="stop-watch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="stopwatch-card">
            <div className="stopwatch-card-header">
              <img
                className="clock-image"
                alt="mini-clock"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              />
              <p className="timer-heading">Timer</p>
            </div>
            <h1 className="time-display" testid="timer">
              {displayTime}
            </h1>
            <div className="buttons-container">
              <button
                className="start-button button"
                type="button"
                onClick={this.startButton}
              >
                Start
              </button>
              <button
                className="stop-button button"
                type="button"
                onClick={this.stopButton}
              >
                Stop
              </button>
              <button
                className="restart-button button"
                type="button"
                onClick={this.restartButton}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
