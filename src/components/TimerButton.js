import React from 'react';

const TimerButton = (props) => {
  if (!props.isRunning) {
    const startOrResume = props.started ? 'Resume' : 'Start';
    const buttonColor = props.started ? 'blue' : 'green';
    return (
      <div
        className={`ui bottom attached ${buttonColor} button`}
        onClick={props.onStartClick}
      >
        {startOrResume}
      </div>
    );
  }
  return (
    <div
      className='ui bottom attached red button'
      onClick={props.onStopClick}
    >
      Stop
    </div>
  );
};

export default TimerButton;