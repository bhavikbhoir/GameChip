import React from "react";
import styled from 'styled-components';
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import logo from '../assets/logo.png';
import download from '../assets/download.png';
import process from '../assets/process.png';
import special from '../assets/special.png';
import future from '../assets/future.png';


const Styles = styled.div`
.features{
    margin: 20px;
}
.row{
    margin: 10px 0px;
}
#first, #third{
    background: #25a2c3;
    color: white;
    padding: 10px;
}
#second, #fourth{
    background: #f6755e;
    color: white;
    padding: 10px;
}
#image{
    text-align: center;
}
`;

export const Section = () => (
<Styles>
    <Container>
        <div class="features">
            <Row>
                <Col md={8} id="first">
                <h1>The App</h1>
                <h3>Why download it?</h3>
                <p>You should download this app because lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Button variant="light" class="button" href="https://play.google.com/store/">Download Application</Button>
                </Col>
                <Col md={4} className="d-none d-md-block">
                    <Image src={download}
                    width={300}
                    height={300}
                    />
                </Col>            
            </Row>
            <Row>
                <Col md={4} className="d-none d-md-block" id="image">
                    <Image src={process}
                    width={300}
                    height={300}
                    />
                </Col>
                <Col md={8} id="second">
                <h1>The Process</h1>
                <h3>How does it work?</h3>
                <p>lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Button variant="light" class="button" href="https://play.google.com/store/">Download Application</Button>
                </Col>            
            </Row>
            <Row>
                <Col md={8} id="third">
                <h1>Speciality</h1>
                <h1>What is special about this app?</h1>
                <p>lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Button variant="light" class="button" href="https://play.google.com/store/">Download Application</Button>
                </Col>
                <Col md={4} className="d-none d-md-block">
                    <Image src={special}
                    width={300}
                    height={300}
                    />
                </Col>            
            </Row>
            <Row>
                <Col md={4} className="d-none d-md-block">
                    <Image src={future}
                    width={300}
                    height={300}
                    />
                </Col>
                <Col md={8} id="fourth">
                <h1>The Future</h1>
                <h1>Features to follow</h1>
                <p>lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Button variant="light" class="button" href="https://play.google.com/store/">Download Application</Button>
                </Col>            
            </Row> 
        </div>
    </Container>
</Styles>
);