import React from "react";


class AddButton extends React.Component {
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
      <div>
        <div className="py-2 px-3 text-white rounded-top fw-bold mb-2 accordion-button pointer" style={{ backgroundColor: '#3f80ea' }} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Add a new task</div>
        <div id="collapseOne" className="collapse p-2 show" aria-labelledby="headingOne" >
          <div>
            <div className="mb-3 row">
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Task</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="inputPassword" value={this.state.value} onChange={this.handleInput} />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="exampleFormControlInput1" className="col-sm-2 col-form-label">Estimate</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="exampleFormControlInput1" />
              </div>
            </div>
          </div>
          <div className="d-flex flex-row-reverse mb-3">
            <button type="button" className="btn btn-secondary" onClick={this.handleClick}><i className="fas fa-plus"></i> Add</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddButton;
