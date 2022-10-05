import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { MdLocalHospital } from 'react-icons/md';

const Navbarmain = () => {
    let navigate = useNavigate()
    return(<React.Fragment>
        <Navbar bg="primary" expand="md" variant="dark">
            <Container fluid>
                <Navbar.Brand onClick={() => navigate("/")}><i><MdLocalHospital /></i> Enigma HMS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavDropdown title="Patient" id="patient-dropdown">
                        <NavDropdown.Item onClick={() => navigate("/patient/patientsearch")}>Search</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate("/patient/patientregistration")}>Registration</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate("/patient/patientdependant")}>Dependants</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => navigate("/patient/patientreferal")}>Referal</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Inpatient" id="inpatient-dropdown">
                        <NavDropdown.Item onClick={() => navigate("/inpatient/inpatientsearch")}>Search</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate("/inpatient/inpatientepr")}>EPR</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate("/inpatient/inpatientadmission")}>Admissions</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate("/inpatient/inpatientdischarge")}>Dischargess</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate("/inpatient/inpatientward")}>Ward</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => navigate("/inpatient/inpatientreferal")}>Referal</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Accounts" id="accounts-dropdown">
                        <NavDropdown.Item onClick={() => navigate("/accounts/procedure")}>Procedure</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate("/accounts/supplier")}>Suppliers</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate("/accounts/addressbook")}>Address Book</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => navigate("/accounts/taxcharges")}>Tax and Charges</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate("/accounts/patientbill")}>Patient Bill</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => navigate("/accounts/transactions")}>Transactions</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Pharmacy" id="pharmacy-dropdown">
                        <NavDropdown.Item onClick={() => navigate("/pharmacy/drugitem")}>Drug Item</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate("/pharmacy/drugstore")}>Drug Store</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate("/pharmacy/prescription")}>Prescription</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => navigate("/pharmacy/requisition")}>Requisition</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate("/pharmacy/recieveddrugs")}>Recieve Drugs</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate("/pharmacy/pharmarcystock")}>Stock</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Records" id="records-dropdown">
                        <NavDropdown.Item onClick={() => navigate("/records/patientSearcch")}>Search</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate("/records/epr")}>EPR</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate("/records/service")}>Procedure</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate("/records/appointment")}>Appointment</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => navigate("/records/diagnosis")}>Diagnosis</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Contract" id="contract-dropdown">
                        <NavDropdown.Item onClick={() => navigate("/contract/purchaser")}>Purchaser</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate("/contract/contract")}>Contract</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate("/contract/itemsapproved")}>Items Approved</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Store" id="store-dropdown">
                        <NavDropdown.Item onClick={() => navigate("/store/medicalstore")}>Medical Store</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => navigate("/store/generalstore")}>General Store</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => navigate("/store/recievedstock")}>Recieved Stock</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate("/store/tickets")}>Tickets</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Administration" id="administration-dropdown">
                        <NavDropdown.Item onClick={() => navigate("/administration/staff")}>Staff</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate("/administration/department")}>Department</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate("/administration/system")}>System</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate("/administration/useraccounts")}>User Accounts</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => navigate("/administration/roaster")}>Roaster</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </React.Fragment>)
}
export { Navbarmain }