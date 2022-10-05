import React from "react";
import { Container, Row, Col} from 'react-bootstrap'
import { Navbarmain } from '../../component/NavBar'
import { LoginForm } from "../../component/LoginForm";

class HomePage extends React.Component {
    render(){
        return(<React.Fragment>
                <Navbarmain />
                <Container fluid>
                    <Row>
                        <Col lg={4} sm={12} md={5}>
                            <LoginForm />
                        </Col>
                    </Row>
                </Container>
        </React.Fragment>)
    }
}
export { HomePage }