import React from "react";
import { Container, Row, Col, Table, Form, Dropdown, DropdownButton, Button } from "react-bootstrap";

const Admissions = () => {
    return(<React.Fragment>
        <Container>
            <Row>
                <Col>
                    <h3>Admissions</h3>
                    <Form className="d-flex">
                    <Form.Group className="w-100 mb3" controlId="formBasicSearch">
                        <Form.Label>Search</Form.Label>
                        <Form.Control type="text" placeholder="Search patient" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicSelect">
                        <Form.Label>Filter</Form.Label>
                        <DropdownButton variant="none" id="dropdown-basic-button1" title="Please select here">
                            <Dropdown.Item href="#">Case Number</Dropdown.Item>
                            <Dropdown.Item href="#">Folder Number</Dropdown.Item>
                            <Dropdown.Item href="#">Full Name</Dropdown.Item>
                            <Dropdown.Item href="#">Date of Birth</Dropdown.Item>
                        </DropdownButton>
                    </Form.Group>
                    <div className="m-4">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                    </Form>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Case Number</th>
                            <th>Full Name</th>
                            <th>Date Admit</th>
                            <th>Doctor Admit</th>
                            <th>Ward Room</th>
                            <th>Bed</th>
                            <th>Purchaser</th>
                            </tr>
                        </thead>
                    </Table>
                </Col>
            </Row>
        </Container>
    </React.Fragment>);
}
export { Admissions }