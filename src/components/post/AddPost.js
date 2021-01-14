// import component react and react-bootstrap
import { Modal, Button, Form, Row, Col, Image } from 'react-bootstrap';
import React from 'react';

// import icons and images
import userIcon from '../../assets/images/user_no-pict.jpg';
import iconEmoji from '../../assets/icons/icon_emoji.png';
import iconImage from '../../assets/icons/icon_image.png';


function AddPost({show, handleClose}) {
    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Body>
                <Row>
                    <Col sm={1}><Image width="50px" height="50px" src={userIcon} rounded /></Col>
                    <Col sm={11}>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} placeholder="What happen today dear ?" />
                        </Form.Group>
                    </Col>
                </Row>
                <div className="d-flex justify-content-between">
                    <div>
                        <Image src={iconEmoji}/>
                        <Image src={iconImage}/>
                    </div>
                    <Button className="w-25" variant="outline-dark" size="sm" onClick={handleClose} block>
                        POST
                    </Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default AddPost;