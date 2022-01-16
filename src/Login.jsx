import React, { Component } from "react";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "", message: ""};
      }

    render () {
        return (
        <div >
            <h3 className="m-4 p-2 border-bottom">Login</h3>

            {/* Email starts */}
            <div className="form-group form-row m-4">
                <label className="col-lg-9">Email:</label>
                <input type="text" className="form-control"
                value={this.state.email} 
                onChange={(event) => {
                    this.setState({ email: event.target.value });
                  }}/>
            </div>
            {/* Email ends */}

            {/* Password starts */}
            <div className="form-group form-row m-4">
                <label className="col-lg-9">Password:</label>
                <input type="password" className="form-control" 
                value={this.state.password} 
                onChange={(event) => {
                    this.setState({ password: event.target.value });
                  }} />
            </div>
            {/* Password ends */}

            <div className="text-end">
          {this.state.message}

          <button className="btn btn-primary m-1" onClick={this.onLoginClick}>
            Login
          </button>
        </div>
            </div>
        );
    }
    //end of render

    //Executes when the user clicks on Login
  onLoginClick = () => {
    console.log(this.state);


    if ('') {
      //success
      this.setState({
        message: <span className="text-success">Successfully Logged-in</span>,
      });
    } else {
      //error
      this.setState({
        message: (
          <span className="text-danger">Invalid login, please try again</span>
        ),
      });
    }
  };
}