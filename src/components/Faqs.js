import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
import CardColumns from 'react-bootstrap/CardColumns';
import InputGroup from 'react-bootstrap/InputGroup';
import { FormControl, Button  } from "react-bootstrap";


const Styles = styled.div`
.faqs{
    text-align: center;
}
h1, h3, h4, h6 {
    color: #25a2c3;
    padding: 5px;
    margin: 5px;
}
.card{
    border: 1px solid #25a2c3;
    background: white;
    text-align: left;
}
.card-header{
    background: white;
}
.card-body{
    color: white;
    background: #f6755e;
}
.email .container{
    width: 60%;
}
.form-control{
    border: 1px solid #25a2c3;
}
.btn-outline-secondary{
    color: #25a2c3;
    border-color: #25a2c3;
}
.btn-outline-secondary:hover{
    color: white;
    border-color: white;
    background: #f6755e;
}
`;

export const Faqs = () => (
    <Styles>
        <div class="faqs">
            <div>
                <h1>Questions?</h1>
                <h4>Here are some commonly asked questions.</h4>
            </div>
            <Container class="card">
                <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                    1. What is Game chip?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>Answer: </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    2. Why use it?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>Answer: </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                    3. How can I download the app?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>Answer: </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                    4. Which operating systems are compatible with the app?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>Answer: </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
            </Container>
            <div class="email">
                <h3>Still have questions?</h3>
                <h6>Drop your email address and we'll get back to you soon.</h6>
                <Container>
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Email address"
                    aria-label="Email address"
                    aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                    <Button variant="outline-secondary">Submit</Button>
                    </InputGroup.Append>
                </InputGroup> 
                </Container>
            </div>
        </div>
    </Styles>
);