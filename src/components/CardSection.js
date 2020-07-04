import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
import CardColumns from 'react-bootstrap/CardColumns';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const Styles = styled.div`

    .Card{
        font-family:"Adobe Garamond Pro Bold", Georgia, "Times New Roman", Times, serif;
        font-size: 18px;
    }
    .bg-primary {
        background-color: #25a2c3!important;
        text-align: center;
        font-size: 18px;
    }
    .border-primary {
        border-color: #25a2c3!important;
        box-shadow: 0px 8px 8px 0px grey;
    }
`;

export const CardSection = () => (
    <Styles>
    <div>
        <Container>
        <CardColumns>
            <Card border="primary">
                <Card.Header class="p-3 mb-2 bg-primary text-white">Header</Card.Header>
                <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card border="primary">
                <Card.Header class="p-3 mb-2 bg-primary text-white">Header</Card.Header>
                <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card border="primary">
                <Card.Header class="p-3 mb-2 bg-primary text-white">Header</Card.Header>
                <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Card.Text>
                </Card.Body>
            </Card>
        </CardColumns>
        </Container>
    </div>
    </Styles>
)