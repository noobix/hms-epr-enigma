import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CurrentUserPane } from "../../component/CurrentUserPane";
import { Navbarmain } from '../../component/NavBar'

class Contract extends React.Component {
    render() {
        return(<React.Fragment>
            <Navbarmain />
            <Container fluid>
                <Row>
                    <Col lg={3} sm={12} md={4}>
                        <CurrentUserPane />
                    </Col>
                </Row>
            </Container>
        </React.Fragment>)
    }
}
export { Contract }