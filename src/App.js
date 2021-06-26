import './App.css';
import Timer from './views/index/js/Timer';
import Task from './views/index/js/Task';
import AddTaskSection from './views/index/js/AddTaskSection';
// import PlayMusicButton from './views/index/js/PlayMusicButton';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTaskId: 0,
      listTaskDoing: [],
      timer: 10,
      timerState: 'pause',
      isBreakTime: false
    }
    this.setTimer = this.setTimer.bind(this);
    this.addDoingTask = this.addDoingTask.bind(this);
    this.removeDoingTask = this.removeDoingTask.bind(this);
    this.updateDoneStatus = this.updateDoneStatus.bind(this);
    this.updateStartStatus = this.updateStartStatus.bind(this);
    this.updateBreakStatus = this.updateBreakStatus.bind(this);
  }

  getId = (list = []) => {
    let maximumId = list.reduce((prev, cur) => ((prev.id || 0) > (cur.id || 0) ? prev : cur), {}).id || 0;
    maximumId++;
    return maximumId;
  }

  addDoingTask(value) {
    if (!value) {
      return;
    }

    this.setState({
      listTaskDoing: [
        ...this.state.listTaskDoing,
        {
          id: this.getId(this.state.listTaskDoing),
          name: value,
          isDone: false
        }
      ]
    });
  }

  removeDoingTask(id) {
    let arr = [...this.state.listTaskDoing];
    arr.splice(arr.findIndex(item => item.id === id), 1);
    this.setState({
      listTaskDoing: arr
    });
  }

  updateDoneStatus(id, isDone) {
    let listTask = [...this.state.listTaskDoing];
    let task = listTask.find(item => item.id === id);
    task.isDone = isDone;
    this.setState({ listTaskDoing: listTask, timerState: 'pause' });
  }

  setTimer(value) {
    this.setState({
      timer: value
    });
  }

  updateStartStatus(id) {
    if (this.state.isBreakTime || this.state.currentTaskId !== id) {
      this.setState({
        timer: 10,
      });
    }

    this.setState({
      currentTaskId: id,
      isBreakTime: false,
      timerState: this.state.timerState === 'pause' ? 'running' : 'pause'
    });
  };

  updateBreakStatus() {
    if (this.state.isBreakTime) {
      this.setState({
        timer: 10,
        isBreakTime: false,
      });
    }
    else {
      this.setState({
        timer: 5,
        isBreakTime: true,
      });
    }
  }

  render() {
    return (
      <div className="container bg-light py-4 min-vh-100">
        <div className="row">
          <div className="col-12">
            <h2 class="d-inline-block">Pomodoro</h2>
            <h2 class="d-inline-block float-right">
              <i className="fab fa-github"></i>
            </h2>
          </div>
          <div className="col-12">
            <Timer timer={this.state.timer} timerState={this.state.timerState} isBreakTime={this.state.isBreakTime} setTimer={this.setTimer} updateBreakStatus={this.updateBreakStatus} />
          </div>
          <div className="col-12">
            <h4 className="py-2 px-3 text-white rounded-top" style={{ backgroundColor: '#3f80ea' }}>
              Add a new task
            </h4>
          </div>
          <div className="col-12">
            <AddTaskSection addDoingTask={this.addDoingTask} />
          </div>
          <div className="col-12">
            <h4 className="py-2 px-3 text-white rounded-top" style={{ backgroundColor: '#3f80ea' }}>You've got {this.state.listTaskDoing.filter(item => !item.isDone).length} tasks today</h4>
          </div>
          <div className="col-12">
            {/* <PlayMusicButton /> */}
            <div className="rounded">
              {
                this.state.listTaskDoing.map((item, index) => {
                  return <Task key={index} task={item} currentTaskId={this.state.currentTaskId} timerState={this.state.timerState} updateDoneStatus={this.updateDoneStatus} removeTask={this.removeDoingTask} updateStartStatus={this.updateStartStatus} />
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
