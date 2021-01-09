import React, {Component} from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logoutUser} from '../../actions/authAction'

class Dashboard extends Component{

    handleLogout = (e) => {
        e.preventDefault();
        this.props.logoutUser()
    }

    render(){
        const {user} = this.props.auth
        console.log({user})
        return(
            <div className="container valign-wrapper" style={{height: "72vh"}}>
                <div className="row">
                    <div className="col s12 center-align">
                        <h4>
                            <b>Yeay! You're logged in,</b> {user.username}
                        </h4>
                        <button 
                        style={{ width: "150px", borderRadius: "3px", letterSpacing:"1.5px", marginTop:"1rem" }}
                        type="submit"
                        className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                        onClick={this.handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {logoutUser})(Dashboard);