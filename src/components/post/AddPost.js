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
        post : {}
    }

    // inputing form
    onChange = (e) => {
        let dataValue = this.state.post
        if(e.target.id === 'post')
        {
            dataValue.content = e.target.value
        } 
        else if(e.target.id === 'postImage'){
            dataValue.image = e.target.files[0]
        }

        this.setState({post: dataValue})
        console.log(this.state.post)
    }

    // submiting form
    onClick = () => {
        // const formData = new FormData();
        // formData.append(
        //     "images", this.state.post.image
        // )
        // formData.append(
        //     "content", this.state.post.content
        // )
        // formData.append(
        //     "user_id", this.props.auth.user.user_id
        // )
        const postData = {
            user_id: this.props.auth.user.user_id,
            content: this.state.post.content,
            // images: this.state.post.image
        }

        console.log(postData);
        posting(postData)
        .then(res => res.data)
        .then(data => window.location.reload())
        .catch(err => console.log(err))

        // window.location.reload();
    }

    render(){
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose} size="lg">
                <Modal.Body>
                    <Row>
                        <Col sm={1}><Image width="50px" height="50px" src={userIcon} rounded /></Col>
                        <Col sm={11}>
                            <Form.Group controlId="post">
                                <Form.Control value={this.state.post.content} onChange={(e) => this.onChange(e)} as="textarea" rows={3} placeholder="What happen today dear ?" />
                            </Form.Group>
                            {/* <Form.Group controlId="postImage">
                                <Form.File onChange={(e) => this.onChange(e)}/>
                            </Form.Group> */}
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

AddPost.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(AddPost);