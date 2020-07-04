import React from "react";
import styled from 'styled-components';
import { Container } from "react-bootstrap";
import Media from 'react-bootstrap/Media';
import first from '../assets/first.png';
import second from '../assets/second.png';
import { auto } from "async";


const Styles = styled.div`
.timeline{
    padding: 25px;
}
.timeline h1, h4{
    text-align: center;
    padding: 10px;
}
h1, h4{
    color: #25a2c3;    
}
img{
    margin: auto;
}
.one{
    background: #25a2c3;
    color: white;
    padding: 5px;
    margin: 15px 0px 15px 15px;
    width: auto;
    height: 150px;
    overflow: auto;
}
.two{
    background: #f6755e;
    color: white;
    padding: 5px;
    margin: 15px 15px 15px 0px;
    width: auto;
    height: 150px;
    overflow: auto;
}
@media screen and (max-width: 500px){
    h3{
        font-size: 16px;
    }
    p{
        font-size: 12px;
    }
} 
`;

export const Timeline = () => (
    <Styles>
        <div class="timeline">
            <Container>
                <h1>Want to know how it all happened?</h1>
                <h4>You have come to the right place.</h4>
            <ul className="list-unstyled">
            <Media as="li">
                <img
                width={150}
                height={150}
                className="mr-3"
                src={first}
                alt="Generic placeholder"
                />
                <Media.Body class="one">
                <h3>THE IDEA</h3>
                <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                    fringilla. Donec lacinia congue felis in faucibus.
                </p>
                </Media.Body>
            </Media>

            <Media as="li">
                <Media.Body class="two">
                <h3>THE PLAN</h3>
                <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                    fringilla. Donec lacinia congue felis in faucibus.
                </p>
                </Media.Body>
                <img
                width={150}
                height={150}
                className="ml-3"
                src={second}
                alt="Generic placeholder"
                />
            </Media>
            <Media as="li">
                <img
                width={150}
                height={150}
                className="mr-3"
                src={first}
                alt="Generic placeholder"
                />
                <Media.Body class="one">
                <h3>START OF THE PROJECT</h3>
                <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                    fringilla. Donec lacinia congue felis in faucibus.
                </p>
                </Media.Body>
            </Media>

            <Media as="li">
                <Media.Body class="two">
                <h3>DEVELOPMENT</h3>
                <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                    fringilla. Donec lacinia congue felis in faucibus.
                </p>
                </Media.Body>
                <img
                width={150}
                height={150}
                className="ml-3"
                src={second}
                alt="Generic placeholder"
                />
            </Media>
            </ul>
            </Container>    
        </div>
    </Styles>
);



