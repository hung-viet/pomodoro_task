import React from "react";

class Input extends React.Component {
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
    this.setState({
      value: event.target.value
    });
  }

  handleClick() {
    this.props.addDoingTask(this.state.value);
    this.state.value = "";
  }

  setDate = (date) => {
    this.setState({
      date
    });
  }

  render() {
    return (
      <div>
        <button type="button" className="btn btn-secondary mb-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className="fas fa-plus"></i> Add</button>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <div>
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Task</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="your task" value={this.state.value} onChange={this.handleInput} />
                  </div>
                  <div className="d-flex flex-column mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Date</label>
                    <input type="text" className="form-control" id="exampleFormControlTextarea1" placeholder="your task" />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={this.handleClick}>Add</button>
              </div>
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" value={this.state.value} onChange={this.handleInput} />
          <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.handleClick}><i className="fas fa-plus"></i></button>
        </div>
      </div>
    )
  }
}

export default Input;
