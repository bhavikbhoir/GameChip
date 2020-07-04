import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .jumbotron{
        margin-top: 25px;
        margin-bottom: 25px;
        background: #25a2c3;
        color: #fff;
        width: 100%;
        height: auto;
    }

    .information{
        text-align: center;
        color: white;
        font-family:"Adobe Garamond Pro Bold", Georgia, "Times New Roman", Times, serif;
        font-size: 16px;
    }

    .information p{
        padding-top: 15px;
        color: white;
        font-family:"Adobe Garamond Pro Bold", Georgia, "Times New Roman", Times, serif;
        font-size: 18px; 
    }
`;


export const Banner = () => (
<Styles>
    <div class="jumbotron jumbotron-cover-image">
    <div class="information">
      <h1>Banner</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    </div>  
</Styles>
)