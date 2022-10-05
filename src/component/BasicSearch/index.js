import React from "react";
import { Button, Form, Dropdown, DropdownButton } from "react-bootstrap"

const BasicSearch = () => {
    return(<React.Fragment>
        <div>
            <Form.Group className="mx-3" controlId="basicSearchName1">
                <Form.Label>Case Number</Form.Label>
                <Form.Control type="text" placeholder="Enter Case number" />
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter first name" />
                <Form.Label>Middle Name</Form.Label>
                <Form.Control type="text" placeholder="Enter middle name" />
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter last name" />
                <Form.Label>Date Of Birth</Form.Label>
                <Form.Control type="date" />
                <Form.Label>Purchaser</Form.Label>
                <DropdownButton variant="none" id="dropdown-basic-button1" title="Please select here">
                    <Dropdown.Item href="#">Provident Insurance</Dropdown.Item>
                    <Dropdown.Item href="#">Gemini Life Insurance</Dropdown.Item>
                </DropdownButton>
            </Form.Group>
        </div>
        <div className="d-flex justify-content-end">
            <Button className="m-3" variant="primary" type="submit">
                Search
            </Button>
        </div>
    </React.Fragment>)
}
export { BasicSearch }