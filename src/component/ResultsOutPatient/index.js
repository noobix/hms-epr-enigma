import React from "react";
import { Table } from "react-bootstrap";

const ResultsOutPatient = () => {
    return(<React.Fragment>
        <Table striped hover>
            <thead>
                <tr>
                    <th>Case Number</th>
                    <th>Full Name</th>
                    <th>Gender</th>
                    <th>Date Of Birth</th>
                    <th>Marrital Status</th>
                    <th>Occupation</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
        </Table>
    </React.Fragment>)
}
export { ResultsOutPatient }