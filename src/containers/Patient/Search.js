import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { CurrentUserPane } from '../../component/CurrentUserPane';
import { Navbarmain } from '../../component/NavBar';
import { Search } from '../../component/Search'
import { ResultsOutPatient } from '../../component/ResultsOutPatient'

class PatientSearch extends React.Component {
    render() {
        return(<React.Fragment>
            <Navbarmain />
            <Container fluid>
                <Row>
                    <Col lg={3} sm={12} md={4}>
                        <CurrentUserPane />
                    </Col>
                    <Col lg={9} sm={12} md={8}>
                        <Search />
                        <ResultsOutPatient />
                    </Col>
                </Row>
            </Container>
        </React.Fragment>)
    }
}
export {PatientSearch}