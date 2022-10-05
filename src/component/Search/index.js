import React from "react";
import { Button, Container, Row, Col, Form, Dropdown, DropdownButton } from "react-bootstrap";

const Search = () => {
    return(<React.Fragment>
        <Container fluid>
            <Row>
                <Col>
                    <Form>
                        <div className="d-flex flex-row">
                            <Form.Group className="mx-3 w-50" controlId="basicSearchName1">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter first name" />
                                <Form.Label>Middle Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter middle name" />
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter last name" />
                            </Form.Group>
                            <Form.Group className="mx-3 w-50" controlId="basicSearchName2">
                                <Form.Label>Date Of Birth</Form.Label>
                                <Form.Control type="date" />
                                <Form.Label>Case Number</Form.Label>
                                <Form.Control type="text" placeholder="Case Number" />
                                <Form.Label>Folder Number</Form.Label>
                                <Form.Control type="text" placeholder="Enter folder number" />
                            </Form.Group>
                            <Form.Group className="mx-3 w-50" controlId="basicSearchName3">
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
                                <Form.Label>Registration Date</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>
                        </div>
                        <div className="d-flex justify-content-end">
                            <Button className="m-3" variant="primary" type="submit">
                                Search
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    </React.Fragment>)
}
export { Search }