import React from "react";
import { Button, Container, Row, Col, Form, Dropdown, DropdownButton } from "react-bootstrap";

const Registration = () => {
    return(<React.Fragment>
        <Container fliud>
            <Row>
                <Col>
                    <Form>
                        <div className="d-flex flex-row">
                            <Form.Group className="mx-3 w-50" controlId="formRegistartion1">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="First name" />
                                <Form.Label>Middle Name</Form.Label>
                                <Form.Control type="text" placeholder="Middle name" />
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last name" />
                                <Form.Label>Gender</Form.Label>
                                <DropdownButton variant="none" id="dropdown-basic-button1" title="Please select here">
                                    <Dropdown.Item href="#">Male</Dropdown.Item>
                                    <Dropdown.Item href="#">Female</Dropdown.Item>
                                    <Dropdown.Item href="#">Other</Dropdown.Item>
                                </DropdownButton>
                                <Form.Label>Marrital Status</Form.Label>
                                <DropdownButton variant="none" id="dropdown-basic-button2" title="Please select here">
                                    <Dropdown.Item href="#">Married</Dropdown.Item>
                                    <Dropdown.Item href="#">Divorced</Dropdown.Item>
                                    <Dropdown.Item href="#">Single</Dropdown.Item>
                                    <Dropdown.Item href="#">Other</Dropdown.Item>
                                </DropdownButton>
                                <Form.Label>Date Of Birth</Form.Label>
                                <Form.Control type="date" />
                                <Form.Label class="form-label">Browse to Select Picture</Form.Label>
                                <input class="form-control form-control" type="file" />
                                <Form.Label>Occupation</Form.Label>
                                <Form.Control type="text" placeholder="Occupation" />
                                <Form.Label>Street Address 1</Form.Label>
                                <Form.Control type="text" placeholder="Street address 1" />
                                <Form.Label>Street Address 2</Form.Label>
                                <Form.Control type="text" placeholder="Street adress 2" />
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="City" />
                            </Form.Group>
                            <Form.Group className="mx-3 w-50" controlId="formRegistration2">
                            <Form.Label>Region/State/Province</Form.Label>
                                <Form.Control type="text" placeholder="Region State Province" />
                                <Form.Label>Postal Address</Form.Label>
                                <Form.Control type="text" placeholder="Postal address" />
                                <Form.Label>Country</Form.Label>
                                <Form.Control type="text" placeholder="Country" />
                                <Form.Label>Phone Number Home</Form.Label>
                                <Form.Control type="text" placeholder="Phone number home" />
                                <Form.Label>Phone Number Work</Form.Label>
                                <Form.Control type="text" placeholder="Phone number work" />
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder="Email" />
                                <Form.Label>Emergency Contact</Form.Label>
                                <Form.Control type="text" placeholder="Next of kin" />
                                <Form.Label>Relationship</Form.Label>
                                <Form.Control type="text" placeholder="Relationship" />
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control type="text" placeholder="Contact Number" />
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Address" />
                                <Form.Label>Country</Form.Label>
                                <Form.Control type="text" placeholder="Country" />
                            </Form.Group>
                        </div>
                        <div className="d-flex justify-content-end">
                            <Button className="m-3" variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    </React.Fragment>)
}
export { Registration }