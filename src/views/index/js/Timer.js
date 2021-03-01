import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.timer,
    };
    this.renderTimer = this.renderTimer.bind(this);
  }

  renderTimer(timer) {
    let seconds = timer % 60;
    let minutes = (timer - seconds) / 60;
    return `${this.formatTime(minutes)}:${this.formatTime(seconds)}`;
  }

  formatTime(value) {
    return value < 10 ? ('0' + value) : value.toString();
  }

  resume(timer) {
    clearInterval(this.state.timerID);
    this.state.timerID = setInterval(
      () => {
        if (timer <= 0) {
          this.props.updateBreakStatus();
        }
        else {
          this.setState({ value: timer - 1 });
          this.props.setTimer(this.state.value);
        }
      },
      1000
    );
  }

  pause() {
    clearInterval(this.state.timerID);
  }

  render() {
    console.log(this.props.timerState);
    let color = "";
    if (this.props.timerState === "pause") {
      this.pause();
      color = "#383d42";
    }
    else if (this.props.timerState === "running") {
      this.resume(this.props.timer);
      color = this.props.isBreakTime ? "#3ca861" : "#e0942a";
    }
    const timerValue = this.renderTimer(this.props.timer);
    return (
      <div className="py-2">
        <h1 className="text-center" style={{ color }}>{timerValue}</h1>
      </div>
    )
  }
}

export default Timer;
