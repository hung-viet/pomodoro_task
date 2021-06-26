import "../css/Task.css";
import React from "react";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDone: this.props.task.isDone,
    };
    this.updateStartStatus = this.updateStartStatus.bind(this);
    this.updateDoneStatus = this.updateDoneStatus.bind(this);
    this.delete = this.delete.bind(this);
  }

  updateDoneStatus(event) {
    this.setState({
      isDone: true
    });

    this.props.updateDoneStatus(this.props.task.id, true);
  }

  updateStartStatus() {
    this.props.updateStartStatus(this.props.task.id);
  }

  delete() {
    this.props.removeTask(this.props.task.id);
  }

  render() {
    let btnPause;
    if (this.props.currentTaskId === this.props.task.id && this.props.timerState === "running") {
      btnPause = <span><i className="fas fa-pause"></i> Pause</span>
    }
    else {
      btnPause = <span><i className="fas fa-play"></i> Start</span>
    }
    return (
      <div className="mb-2 shadow-sm bg-white">
        <div className="d-flex mb-2 px-3 py-4">
          <span className="fw-bold">{this.props.task.name}</span>
          <button type="button" class="btn btn-sm btn-outline-danger ml-auto" onClick={this.delete}>
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
        <div className="d-flex flex-row-reverse bg-light py-2 px-3">
          {this.props.currentTaskId && this.props.currentTaskId !== this.props.task.id && this.props.timerState === "running" ? null : <button type="button" className="btn btn-outline-success btn-sm" onClick={this.updateStartStatus}>{btnPause}</button>}
          <button type="button" className="btn btn-outline-primary btn-sm me-2" onClick={this.updateDoneStatus}><i className="fas fa-check"></i> Done</button>
        </div>
      </div>
    )
  }
}

export default Task;
