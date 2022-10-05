import React from "react";
import { Button, Container, Col, Row, Form} from 'react-bootstrap'

const LoginForm = () => {
    return (<React.Fragment>
        <Container fluid>
            <Row>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Login Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter UserName" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </React.Fragment>)
}
export { LoginForm }