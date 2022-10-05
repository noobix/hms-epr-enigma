import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { CurrentUserPane } from "../../component/CurrentUserPane";
import { Navbarmain } from '../../component/NavBar';
import { BasicSearch } from '../../component/BasicSearch'

class PatientDependant extends React.Component {
    render() {
        return(<React.Fragment>
            <Navbarmain />
            <Container fluid>
                <Row>
                    <Col lg={3} sm={12} md={4}>
                        <CurrentUserPane />
                    </Col>
                    <Col lg={4} sm={12} md={4}>
                        <BasicSearch />
                    </Col>
                    <Col lg={5} sm={12} md={4}>
                    <Table striped hover bordered>
                        <thead>
                            <tr>
                                <th>Case Number</th>
                                <th>Full Name</th>
                                <th>Gender</th>
                                <th>Date Of Birth</th>
                                <th>Add Sponsor</th>
                            </tr>
                        </thead>
                    </Table>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>)
    }
}
export { PatientDependant }