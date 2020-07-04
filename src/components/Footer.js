  
import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar,NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, 
    Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl, Form, Container } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa'

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-12 col-sm-12">
              <h4>GET IN TOUCH</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="https://www.facebook.com/"><FaFacebook /></a>
                  <a href="https://www.twitter.com/"><FaTwitter /></a>
                  <a href="https://www.instagram.com/"><FaInstagram /></a>
                  <a href="https://www.linkedin.com/"><FaLinkedin /></a>
                </li>
              </ul>
              <ul class="actions">
                <li><FaPhone /><a href="#"> (000) 000-0000</a></li>
                <li><FaEnvelope /><a href="#"> information@gamechip.com</a></li>
                <li><FaMapMarker /><a href="#"> 123 Somewhere Road, xxxxx, xx 12345</a></li>
              </ul>
            </div>
            </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} Game Chip - All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}
export default Footer;

const FooterContainer = styled.footer`
    .footer-middle {
        margin-top: 25px;
        padding-top: 20px;
        background: #25a2c3;
        color: Black;
        align: center;
    }
    .footer-middle h4{
        color: #fff;
        text-align: center;
    }
    .footer-middle .list-unstyled li{
        padding-top: 10px;
        text-align: center;
    }   
    .footer-bottom {
        color: #fff;
        padding-top: 10px;
        padding-bottom: 10px;
        text-align: center;
    }
    .list-unstyled li a{
      color: #fff;
      font-size: 20px;
      padding: 10px;
    }

    .list-unstyled li a: hover{
      color: #f6755e;
    }

    .actions{
      width: 100%;
      text-align: center;
      margin-left: -15px;
    }
    .actions li{
      color: #fff;
      list-style: none;
      display: inline-block;
      padding: 10px;
    }
    .actions li a{
      color: #fff;
      font-size: 18px;
      padding: 5px;
    }

    .actions li a: hover{
      color: #f6755e;
    }
`;