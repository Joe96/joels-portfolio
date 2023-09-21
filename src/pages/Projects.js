import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from "../components/Navigation";
import CardList from "../components/CardList";
import '../Style.css';

const Projects = () => {

    return (

        <div>
            <Navigation />
            <div>
                <Container>
                    <Row className="justify-content-center align-items-center vh-100">
                        <Col md={15}>
                            <CardList/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    );

}

export default Projects;