import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { registerUser } from '../../actions/authAction';
import classnames from 'classnames';


class Register extends Component  {
    constructor(){
        super();
        this.state ={
            username: "",
            email: "",
            password: "",
            // password2: "",
            errors: {}
        }
    }

    componentWillReceiveProps(nextProps){
        // if(nextProps.auth.isAuthenticated){
        //     // to push user into dashboard screen after login
        //     this.props.history.push("/dashboard")
        // }
        if(nextProps.errors){
            this.setState({
                errors: nextProps.errors
            })
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault()

        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
            // password2: this.state.password2,
        }
        console.log(newUser);
        this.props.registerUser(newUser, this.props.history);
    }

    componentDidMount(){
        // If logged in and user navigates to Register page, should redirect to dashboard
        if(this.props.auth.isAuthenticated){
            this.props.history.push("/dashboard")
        }
    }
    
    render(){
        const { errors } = this.state;

        return(
            <div className="container">
                <div className="row">
                    <div className=" col s8 offset-s2">
                        <Link to="/" className="btn-flat wafes-effect">
                            <i className="material-icons left">keyboard_backspace</i>
                            Back To Home
                        </Link>
                        <div className="col s12" style={{ paddingLeft: "11.25px" }}>
                            <h4>
                                <b>
                                    Register
                                </b>
                                below
                            </h4>
                            <p>
                                Already have an account?
                                <Link to="/login">
                                    Login
                                </Link>        
                            </p>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-field col s12">
                                <input 
                                onChange={this.onChange} 
                                value={this.state.username} 
                                error={errors.username} 
                                id="username" 
                                type="text"
                                className={classnames("", {invalid: errors.username})}
                                />
                                <label htmlFor="username">Username</label>
                                <span className="red-text">{errors.username}</span>
                            </div>
                            <div className="input-field col s12">
                                <input 
                                onChange={this.onChange} 
                                value={this.state.email} 
                                error={errors.email} 
                                id="email" 
                                type="text"
                                className={classnames("", {invalid: errors.email})}
                                />
                                <label htmlFor="email">Email</label>
                                <span className="red-text">{errors.email}</span>
                            </div>
                            <div className="input-field col s12">
                                <input 
                                onChange={this.onChange} 
                                value={this.state.password} 
                                error={errors.password} 
                                id="password" 
                                type="password"
                                className={classnames("", {invalid: errors.password})}
                                />
                                <label htmlFor="password">Password</label>
                                <span className="red-text">{errors.password}</span>
                            </div>
                            <div className="col s12" style={{ paddingLeft: "11.25px"}}>
                                <button 
                                style={{ width: "150px", borderRadius: "3px", letterSpacing:"1.5px", marginTop:"1rem" }}
                                type="submit"
                                className=" btn btn-large waves-effect waves-light hoverable blue accent-3" >
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    
    auth: state.auth, //recieve state from authreducer
    errors: state.errors // recieve state from errorreducer
})

export default connect(mapStateToProps,{registerUser})(withRouter(Register));
