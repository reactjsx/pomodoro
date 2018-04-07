import React, { Component } from 'react';
import Timer from './Timer';

class TimerDashboard extends Component {
  state = {
    mode: 'Work',
    inspiration: 'Time to focus!',
    duration: 1500000,
    started: false,
    runningSince: null,
    nthOfInterval: 0
  };
  
  handleStartClick = () => {
    this.setState({
      runningSince: Date.now(),
      started: true
    });
  }
  
  handleTimerOver = () => {
    const newNthOfInterval = this.state.nthOfInterval < 3 ? this.state.nthOfInterval + 1 : 0;
    if (this.state.mode !== 'Work') {
      this.setState({
        mode: 'Work',
        inspiration: 'Time to focus!',
        duration: 1500000,
        started: false,
        runningSince: null,
        nthOfInterval: newNthOfInterval
      });
    } else {
      const newDuration = this.state.nthOfInterval < 3 ? 300000 : 1500000;
      this.setState({
        mode: 'Relax',
        inspiration: 'Time to relax :)',
        duration: newDuration,
        started: false,
        runningSince: null,
        nthOfInterval: newNthOfInterval
      });
    }
  }
  
  handleStopClick = () => {
    const lastduration = this.state.duration - Date.now() + this.state.runningSince;
    this.setState({
      runningSince: null,
      duration: lastduration
    });
  }
  
  render() {
    return (
      <div className='main ui'>
        <Timer
          mode={this.state.mode}
          inspiration={this.state.inspiration}
          duration={this.state.duration}
          started={this.state.started}
          runningSince={this.state.runningSince}
          nthOfInterval={this.state.nthOfInterval}
          onStartClick={this.handleStartClick}
          onStopClick={this.handleStopClick}
          onTimerOver={this.handleTimerOver}
        />
      </div>
    );
  }
}

export default TimerDashboard;