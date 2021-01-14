// import icon and image
import userIcon from '../../assets/images/user_no-pict.jpg';

// import react and bootstrap
import { Row, Col, Image } from 'react-bootstrap';
import React from 'react';

function Post() {
  return (
   <>
        <Row>
            <Col sm={1}><Image width="50px" height="50px" src={userIcon} rounded /></Col>
            <Col sm={11}>
                <div className="d-flex">
                    <div>
                        <p className="mb-0">Username</p>
                        <p>name</p>
                    </div>
                        <div className="ml-auto">
                        <p className="text-muted">4.20 am - 1 Januari 2021</p>
                    </div>
                </div>
                <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </Col>
        </Row>
        <div className="d-flex">
            <p className="mb-0 text-muted">4 Comment</p>
            <p className="mb-0 ml-3 text-muted">87 Saved</p>
            <p className="mb-0 ml-3 text-muted">54 Loved</p>
            <p className="mb-0 ml-3 text-muted">46 Shared</p>
        </div>
        <hr></hr>
   </>
  );
}

export default Post;