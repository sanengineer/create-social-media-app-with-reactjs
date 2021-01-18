import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Landing extends Component  {
    
    
    render(){
        return(
            <div style={{ height: "75vh" }} className="container valign-wrapper">
                <div className="row">
                    <div className=" col s12 center-align">
                        <h4>
                            <b style={{ fontFamily:"monospace" }}>
                                Please register before using the app
                            </b>
                            <p>Fill the form with specific information</p>
                            <br/>
                            <div className="col s3">
                                <Link 
                                to="/register" 
                                style={{ width: "140px", borderRadius:"3px", letterSpacing:"1.5px" }} 
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3" >
                                Register
                                </Link>
                            </div>
                            <div className="col s3">
                                <Link to="/login" style={{ width: "140px", borderRadius:"3px", letterSpacing:"1.5px" }} className="btn btn-large waves-effect waves-light hoverable blue accent-3" >
                                Login
                                </Link>
                            </div>
                            <div className="col s3">
                                <Link to="/latest-post" style={{ width: "140px", borderRadius:"3px", letterSpacing:"1.5px" }} className="btn btn-large waves-effect waves-light hoverable blue accent-3" >
                                Latest Post
                                </Link>
                            </div>
                            <div className="col s3">
                                <Link to="/detail-post" style={{ width: "140px", borderRadius:"3px", letterSpacing:"1.5px" }} className="btn btn-large waves-effect waves-light hoverable blue accent-3" >
                                Detail Post
                                </Link>
                            </div>
                        </h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;



