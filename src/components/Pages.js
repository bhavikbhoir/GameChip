import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Emojify from 'react-emojione';

const Styles = styled.div`

.forms{
    margin: 100px 0px;
}
#first{
    margin: 5px 15px;
    border: 2px solid #25a2c3;
    box-shadow: 0px 8px 8px 0px grey;
    padding: 10px;
}
#first h1{
    color: #25a2c3;
    text-align: center;
    margin: 15px 0px;
}
#first .btn-primary {
    background: #25a2c3;
    border-color: #25a2c3;
}
#first .btn-primary:hover {
    color: #25a2c3;
    background: white;
    border-color: #25a2c3;
}
#first .form-text{
    font-size: 16px;
    text-align: center;
    color: #25a2c3;
}
#second{
    margin: 5px 15px;
    border: 2px solid #f6755e;
    box-shadow: 0px 8px 8px 0px grey;
    padding: 10px;
}
#second h1{
    color: #f6755e;
    text-align: center;
    margin: 15px 0px;
}
#second .btn-primary {
    background: #f6755e;
    border-color: #f6755e;
}
#second .btn-primary:hover {
    color: #f6755e;
    background: white;
    border-color: #f6755e;
}
#second .form-text{
    font-size: 16px;
    text-align: center;
    color: #f6755e;
}
#button{
    text-align: center;
}
`;


export const Pages = () => (
    <Styles>
        <Container>
            <div class="forms">
            <Row>
                <Col id="first">
                <h1>Login</h1>
                <Container>
                <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
                
                <Form.Group id="button">
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form.Group>
                </Form>  
                </Container>
                <Form.Group>
                    <Form.Text>
                        Don't have an account? Register here <Emojify><span>:point_right:</span></Emojify>
                    </Form.Text>
                </Form.Group>  
                </Col>

                <Col id="second">
                <h1>Sign Up</h1>
                <Container>
                <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter Full Name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    Your email is safe with us.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Retype Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

               
                <Form.Group id="button">
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form.Group>
                </Form>  
                </Container>
                 <Form.Group>
                    <Form.Text>
                       Already have an account? Login here <Emojify><span>:point_left:</span></Emojify>
                    </Form.Text>
                </Form.Group>

                </Col>
            </Row> 
            </div>
   
        </Container>
    </Styles>
);