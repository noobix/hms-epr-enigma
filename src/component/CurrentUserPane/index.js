import React from "react";
import { Image, Container, Row, Col, Button } from "react-bootstrap";
import { BiUserCircle } from 'react-icons/bi'
import SampleQr from '../../assests/Images/qr_code_PNG25.png'
import './style.css'

const CurrentUserPane = () => {
    return(<React.Fragment>
        <Container fluid>
            <Row>
                <Col>
                    <div className="panel">
                        <BiUserCircle size={170} className="Profileimg" />
                        <span><p className="text-white">Username:</p></span>
                        <span><p className="text-white">Branch:</p></span>
                        <span><p className="text-white">Department:</p></span>
                        <span><p className="text-white">IP Address:</p></span>
                        <Image className="qr-code" fluid src={SampleQr} />
                        <div className="d-flex justify-content-between m-3">
                            <Button className="mx-1" variant="secondary">Menu</Button>
                            <Button className="mx-1" variant="success">Log Out</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </React.Fragment>)
}
export { CurrentUserPane }