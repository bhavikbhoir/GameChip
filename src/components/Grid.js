import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { Row, Col, Image } from 'react-bootstrap';
import logo from '../assets/logo.png';

const Styles = styled.div`
.rounded-circle{
    margin-top: -30%;
    margin-bottom: -30%;
}
h4{
    color: #25a2c3;
}
p{
    text-align: justify;
}
.head1, .head2{
    text-align: right;
}
.head3, .head4{
    text-align: left;
}
.offset-md-4{
    text-align: center;
}
@media screen and (max-width: 992px){
    .rounded-circle{
        margin: 0px;
    }
    img{
        width: 250px;
        height: 250px;
    }
}
`;

export const Grid = () => (
    <Styles>
        <Container>
        <div class="Grid">    
        <Row>
            <Col md={4}>
                <h4 class="head1">Header</h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
                </p>
            </Col>
            <Col md={{ span: 4, offset: 4 }}>
                <h4 class="head3">Header</h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
                </p>
            </Col>
        </Row>
        <Row>
            <Col md={{ span: 4, offset: 4 }}>
            <Image src={logo} roundedCircle />
            </Col>
        </Row>
        <Row>
            <Col md={4}>
                <h4 class="head2">Header</h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
                </p>
            </Col>
            <Col md={{ span: 4, offset: 4 }}>
                <h4 class="head4">Header</h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
                </p>
            </Col>
        </Row>
        </div>
        </Container>
    </Styles>
);