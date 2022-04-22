import React from "react";
import "./sign-in.style.scss";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <>
        <div className="sign-in">
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>
          <form onSubmit={this.handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
            <input type="submit" value="Submit Form" />
          </form>
        </div>
      </>
    );
  }
}

export default SignIn;
