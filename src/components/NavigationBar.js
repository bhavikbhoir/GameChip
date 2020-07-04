import React from "react";
import styled from 'styled-components';
import { Container } from "react-bootstrap";
import { slide as Menu } from "react-burger-menu";


const Styles = styled.div`
@charset "UTF-8";
@import url(font-awesome.min.css);
@import "https://fonts.googleapis.com/css?family=Montserrat:700|Open+Sans:300,400|Pacifico";

#page-wrap {
    text-align: center;
  
/* Prevent sidebar from showing a scrollbar on page */
    overflow: auto;
  }
  
/* Individual item */
  .bm-item {
    display: inline-block;
    text-decoration: none;
    margin-bottom: 10px;
    color: #fff;
    font-size: 22px;
    padding: 15px;
    transition: color 0.2s;
    outline: none;
  }

/* Change color on hover */
  .bm-item:hover {
    color: #f6755e;
  }

/* Position and sizing of burger button */
  .bm-burger-button {
    position: absolute;
    width: 36px;
    height: 30px;
    left: 20px;
    top: 20px;
  }
  
/* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #25a2c3;
  }
  
/* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }
  
/* Color/shape of close button cross */
  .bm-cross {
    background: white;
  }
/* General sidebar styles */
  .bm-menu {
    color: white;
    background: #25a2c3;
    padding: 2em 1.5em 0;
    font-size: 1.15em;
  }
  
/* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }
  
/* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
  }
  
/* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
.Bar{
    text-align: center;
}
/*App Logo*/
.Logo{
    width: 100%;
    text-align: center;
}
.logo{
    color: #f6755e;
    font-family: "Pacifico", cursive;
    font-size: 2.5em;
    letter-spacing: 2px;
    margin-top: 25px;
    text-decoration: none;
}
/*Login Button*/
.login{
    float: right;
    margin-top: 15px;
    margin-right: 15px;
    text-decoration: none;
    width: 100px;
    font-size: 18px;
    padding: 5px;
    background-color: white;
    color: #25a2c3;
    border: 1px solid #25a2c3;
    box-shadow: 1px 1px #25a2c3;
}
@media screen and (max-width: 500px){
    .login{
        width: 80px;
    }
    .logo{ 
        margin-left: 30px;
    }
}
`;


export const NavigationBar = () => (
    <Styles>
    <div className="Navbar">
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/About">
        About
      </a>

      <a className="menu-item" href="/Features">
        Features
      </a>

      <a className="menu-item" href="/Research">
        Research
      </a>
    </Menu>
    <div className="Bar">
        <a className="login" href="/Form">LOG IN</a>
    </div>

    </div>
    <div className="Logo">
        <Container>
            <a className="logo" href="">Game Chip</a>  
        </Container>
    </div>     
    </Styles>
);