import React, { Component } from 'react';
import TimerButton from './TimerButton';

class Timer extends Component {
  state = {
    remainTime: 0
  };
  
  componentDidMount() {
    this.forceUpdateInterval = setInterval(() => this.checkIfTimerOver(), 50);
  }
  
  componentWillUnmount() {
    clearInterval(this.forceUpdateInterval);
  }
  
  checkIfTimerOver = () => {
    if (this.props.runningSince) {
      this.setState({
        remainTime: Math.floor((this.props.duration - Date.now() + this.props.runningSince) / 1000)
      });
    } else {
      this.setState({
        remainTime: Math.floor(this.props.duration / 1000)
      });
    }
    if (this.state.remainTime === 0) {
      this.props.onTimerOver();
    }
  }
  
  render() {
    const sec = this.state.remainTime % 60;
    const min = Math.floor(this.state.remainTime / 60);
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='header'>
            {`${this.props.mode} - Interval ${this.props.nthOfInterval + 1}`}
          </div>
          <div className='meta'>
            {this.props.inspiration}
          </div>
          <div className='center aligned description'>
            {`${min}m ${sec}s`}
          </div>
        </div>
        <TimerButton
          isRunning={!!this.props.runningSince}
          started={this.props.started}
          onStartClick={this.props.onStartClick}
          onStopClick={this.props.onStopClick}
        />
      </div>
    );
  }
}

export default Timer;