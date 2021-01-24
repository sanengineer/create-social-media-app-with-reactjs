import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authAction";
import classnames from "classnames";
import Navbar from "../navbar";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
      errorPassword: "",
    };
  }

  componentWillReceiveProps(nextProps) {
    // if(nextProps.auth.isAuthenticated){
    //     // to push user into dashboard screen after login
    //     this.props.history.push("/dashboard")
    // }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    if (this.state.password !== this.state.password2) {
      this.setState({ errorPassword: " unmatched" });
    }
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };

    console.log(newUser);
    this.props.registerUser(newUser, this.props.history);
  };

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    const { errors } = this.state;
    console.log("states", this.state);
    return (
      <div className="register-page">
        <div className="container">
          <div
            className="row justify-content-center"
            style={{ marginTop: "16vh" }}
          >
            <div className="col-8 col-lg-8 col-md-6 col-sm-4">
              <div className="text-center">
                <h4>
                  <b>Register</b> below
                </h4>
              </div>
              <div className="row justify-content-center">
                <form
                  noValidate
                  onSubmit={this.onSubmit}
                  className="justify-content-center col-5 col-lg-5 col-md-4 col-sm-4 mt-5 mb-5"
                >
                  <div className="mb-3">
                    <label class="form-label">Username</label>
                    <input
                      onChange={this.onChange}
                      value={this.state.username}
                      error={errors.username}
                      id="username"
                      type="text"
                      className={classnames("auth-form-control form-control", {
                        invalid: errors.username,
                      })}
                    />
                    <span className="red-text">{errors.username}</span>
                  </div>
                  <div className="mb-3">
                    <label for="email" class="form-label">
                      Email
                    </label>
                    <input
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      id="email"
                      type="text"
                      className={classnames("auth-form-control form-control", {
                        invalid: errors.email,
                      })}
                    />
                    <span className="red-text">{errors.email}</span>
                  </div>
                  <div className="mb-3">
                    <label for="password" class="form-label">
                      Password
                    </label>
                    <input
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="password"
                      type="password"
                      className={classnames("auth-form-control form-control", {
                        invalid: errors.password,
                      })}
                    />
                    <span className="red-text">{errors.password}</span>
                  </div>
                  <div className="mb-3">
                    <label for="password2" class="form-label">
                      Password
                    </label>
                    <input
                      onChange={this.onChange}
                      value={this.state.password2}
                      error={errors.password}
                      id="password2"
                      type="password"
                      className={classnames("auth-form-control form-control", {
                        invalid: errors.password,
                      })}
                    />
                    {this.state.password2 &&
                    this.state.password !== this.state.password2 ? (
                      <p
                        style={{
                          color: "red",
                          fontSize: "11px",
                          paddingTop: "8px",
                          paddingBottom: "8px",
                        }}
                      >
                        {this.state.errorPassword}
                      </p>
                    ) : (
                      <p></p>
                    )}
                    <span className="red-text">{errors.password}</span>
                  </div>
                  <div className="text-center mt-5">
                    <span className="text-danger">{errors.message}</span>
                  </div>
                  <div className="text-center mt-5 f-12">
                    <button type="submit" className="btn btn-purple">
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
              <div className="text-center my-3">
                <span>
                  Have an account? Let's <Link to="/login">Login!</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth, //recieve state from authreducer
  errors: state.errors, // recieve state from errorreducer
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
