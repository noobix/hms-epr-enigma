import React from "react";
import { Container, Row, Col, Form, Button, Dropdown, DropdownButton, Table } from "react-bootstrap"

const InPatientEPR = () => {
    return(<React.Fragment>
        <Container fluid>
            <Row>
                <Col>
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
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped hover bordered>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Owner</th>
                                <th>Date Admit</th>
                                <th>Gender</th>
                                <th>Age</th>
                                <th>Ward Room</th>
                                <th>Bed</th>
                                <th>Doctor Admit</th>
                                <th>Diagnosis</th>
                                <th>Capture Items</th>
                                <th>Nurse Records</th>
                                <th>Doctors Records</th>
                            </tr>
                        </thead>
                    </Table>
                </Col>
            </Row>
        </Container>
    </React.Fragment>)
}
export { InPatientEPR }