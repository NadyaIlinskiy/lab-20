import React from "react";
import Input from "./input.js";

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: ""
    };
  }

  handleChange(e) {
    if (e.target.id === "firstName") {
      this.setState({ firstName: e.target.value });
    }
    if (e.target.id === "lastName") {
      this.setState({ lastName: e.target.value });
    }
  }

  render() {
    return (
      <div className="flex-container">
        <div>
          <Input
            labelTitle="Enter your First Name: "
            id="firstName"
            name="Fist Name"
            onChange={this.handleChange.bind(this)}
          />
          <Input
            labelTitle="Enter Your Last Name: "
            id="lastName"
            name="Last Name"
            onChange={this.handleChange.bind(this)}
          />
        </div>

        <div>
          <p>
            <span className="lable">Your First Name is :</span>{" "}
            {this.state.firstName}
          </p>
          <p>
            <span className="lable">Your Last Name is :</span>{" "}
            {this.state.lastName}
          </p>
        </div>
      </div>
    );
  }
}

export default Form;
