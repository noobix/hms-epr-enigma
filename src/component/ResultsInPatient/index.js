import React from "react";
import { Table } from "react-bootstrap";

const ResultsInPatient = () => {
    return(<React.Fragment>
        <Table striped hover>
            <thead>
                <tr>
                    <th>Case Number</th>
                    <th>Full Name</th>
                    <th>Gender</th>
                    <th>Date Of Birth</th>
                    <th>Admission Date</th>
                    <th>Ward Room</th>
                    <th>Bed</th>
                    <th>Add Record</th>
                </tr>
            </thead>
        </Table>
    </React.Fragment>)
}
export { ResultsInPatient }