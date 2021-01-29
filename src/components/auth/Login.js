import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginUser } from "../../redux/actions/authAction";
import classnames from "classnames";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(
      "this.props.auth.isAuthenticated:",
      this.props.auth.isAuthenticated
    );
    console.log("componentWilReceiveProps");
    if (nextProps.auth.isAuthenticated) {
      //direct user to dashboard login after login
      this.props.history.push("/home");
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    // console.log(userData);
    this.props.loginUser(userData);
  };

  componentDidMount() {
    console.log(
      "this.props.auth.isAuthenticated:",
      this.props.auth.isAuthenticated
    );
    // If logged in and user navigates to Login page, should redirect to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/home");
    }
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="login-page">
        <div className="container">
          <div
            className="row justify-content-center"
            style={{ marginTop: "16vh" }}
          >
            <div className="col-8 col-lg-8 col-md-4 col-sm-4">
              <div className="col-12">
                <h4 className="text-center">
                  <b>Login</b> below
                </h4>
              </div>
              <div className="row justify-content-center">
                <form
                  noValidate
                  onSubmit={this.onSubmit}
                  className="justify-content-center col-5 col-lg-5 col-md-4 col-sm-4 mt-5 mb-5"
                >
                  <div className="mb-3">
                    <label class="form-label">Email</label>
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
                    <span className="red-text">{errors.email} </span>
                  </div>
                  <div className="mb-3">
                    <label class="form-label">Password</label>
                    <input
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.pasword}
                      id="password"
                      type="password"
                      className={classnames("auth-form-control form-control", {
                        invalid: errors.password,
                      })}
                    />

                    <span className="red-text">{errors.password} </span>
                  </div>
                  <div className="text-center mt-5">
                    <span className="text-danger">{errors.message}</span>
                  </div>
                  <div className="text-center mt-5 f-12">
                    <button type="submit" className="btn btn-purple">
                      Login
                    </button>
                  </div>
                </form>
              </div>

              <div className="text-center my-3">
                <span>
                  Don't have an account? Let's{" "}
                  <Link to="/register">Create Account</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
