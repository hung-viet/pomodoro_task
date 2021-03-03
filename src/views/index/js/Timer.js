import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.timer,
      isModalShown: false,
    };
    this.renderTimer = this.renderTimer.bind(this);
    this.handleClose = this.handleClose.bind(this);
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
          this.setState({ isModalShown: true });
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

  handleClose() {
    this.props.updateBreakStatus();
    this.setState({ isModalShown: false });
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
        <div className="d-flex">
          <Modal show={this.state.isModalShown} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Hey</Modal.Title>
            </Modal.Header>
            <Modal.Body>{this.props.isBreakTime ? 'Come back to work!' : 'Take a break!'}</Modal.Body>
            <Modal.Footer>
              <Button variant="success" onClick={this.handleClose}>
                Ok
              </Button>
            </Modal.Footer>
          </Modal>

          {/* <div className="modal fade" id="exampleModalCenter" tabIndex={-1} aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                  <p>{this.state.isBreakTime ? 'Come back to work' : 'Take a break'}</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary" onClick={this.props.updateBreakStatus}>Save changes</button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    )
  }
}

export default Timer;
