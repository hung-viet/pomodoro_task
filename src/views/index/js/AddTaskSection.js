import React from "react";

class AddTaskSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      date: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setDate = this.setDate.bind(this);
  }

  handleInput(event) {
    this.setState({ value: event.target.value });
  }

  handleClick() {
    this.props.addDoingTask(this.state.value);
    this.setState({ value: "" });
  }

  setDate = (date) => {
    this.setState({
      date
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 mb-3">
          <div className="row">
            <div className="col-md-6">
              <label className="col-form-label" htmlFor="inputPassword" >Task</label>
              <input type="text" className="form-control" id="inputPassword" value={this.state.value} onChange={this.handleInput} />
            </div>
            <div className="col-md-6">
              <label className="col-form-label" htmlFor="exampleFormControlInput1">Estimate</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" />
            </div>
          </div>
        </div>
        <div className="col-12 mb-3">
          <button type="button" className="btn btn-secondary float-right" onClick={this.handleClick}>
            <i className="fas fa-plus"></i> Add
          </button>
        </div>
      </div>
    );
  }
}

export default AddTaskSection;
