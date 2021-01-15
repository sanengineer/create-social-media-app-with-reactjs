// import component react and react-bootstrap
import { Modal, Button, Form, Row, Col, Image } from 'react-bootstrap';
import React, {Component} from 'react';
import {posting} from './../../actions/postAction';
import PropTypes from 'prop-types';
// import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

// import icons and images
import userIcon from '../../assets/images/user_no-pict.jpg';
import iconEmoji from '../../assets/icons/icon_emoji.png';
import iconImage from '../../assets/icons/icon_image.png';


class AddPost extends Component {
    state = {
        post : ""
    }

    // inputing form
    onChange = (e) => {
        console.log("onChange")
        this.setState({ [e.target.id]: e.target.value});
    }

    // submiting form
    onClick = () => {
        const postData = {
            user_id: 2,
            content: this.state.post,
            image: "weadasd"
        }

        console.log(this.state.post);
        posting(postData)
        // .then(res => console.log(res))
        // .catch(err => console.log(err));
    }

    // componentWillReceiveProps(nextProps){
    //     if(nextProps.auth.isAuthenticated){
    //         this.props.history.push('/dashboard')
    //     }
    // }

    // componentDidMount(){
    //     if(this.props.isAuthenticated){
    //         this.props.history.push('/dashboard')
    //     }
    // }

    render(){
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose} size="lg">
                <Modal.Body>
                    <Row>
                        <Col sm={1}><Image width="50px" height="50px" src={userIcon} rounded /></Col>
                        <Col sm={11}>
                            <Form.Group controlId="post">
                                <Form.Control value={this.state.post} onChange={(e) => this.onChange(e)} as="textarea" rows={3} placeholder="What happen today dear ?" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-between">
                        <div>
                            <Image src={iconEmoji}/>
                            <Image src={iconImage}/>
                        </div>
                        <Button className="w-25" variant="outline-dark" size="sm" onClick={this.onClick} block>
                            POST
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
}

// AddPost.prototype = {
//     auth: PropTypes.object.isRequired,
//     posting: PropTypes.func.isRequired
// }

// const mapStateToProps = state => {
//     auth: state.auth
// }

// export default connect(mapStateToProps, {posting}) (AddPost);
export default AddPost;