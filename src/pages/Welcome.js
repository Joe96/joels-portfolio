import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from "../components/Navigation";
import Image from "../components/Image";
import '../Style.css';





const Welcome = () => {

    return (

        <div>
            <Navigation />
            <Container>
                <Row className="justify-content-center align-items-center vh-100">
                    <Col md={6} className="text-center">
                        <Image />
                        <p>Hello, welcome to my website.</p>
                        <p>I am a self taugh software developer.</p>
                    </Col>
                </Row>
            </Container>
        </div>

    );

}



export default Welcome;