import React from 'react';
import { Button, Container, Form, FormControl, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    
    return (
        <Container className="nav-bar">

       
        <Navbar expand="lg">
        <Navbar.Brand href="#home"><span>Nandita</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link><Link to ="/"><span>Home</span></Link></Nav.Link>
            <Nav.Link><Link to ="/projects"><span>Projects</span></Link></Nav.Link>
            <Nav.Link><Link to ="/blog"><span>Blogs</span></Link></Nav.Link>
            <Nav.Link><Link to ="/contact"><span>Contact</span></Link></Nav.Link>
        
            
          </Nav>
          <Form inline>
            <Button variant="outline-success">
            <a href="https://drive.google.com/file/d/1SKPtRZH-LAxhCUD_dSV-vZYMkoYyDo1U/view?usp=sharing" target='_blank'><span>Resume</span></a>
           
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      </Container>
    );
};

export default Header;