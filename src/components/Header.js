import React from 'react'
import {Navbar , Nav} from 'react-bootstrap'
import Logo from '../assets/ewa.png'
import {Link} from "react-router-dom";
import menu from '../assets/menu.svg'


export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" >
            <div className="container">
                <Navbar.Brand href="#home"><img src={Logo} className='logo' alt="logo"/> Ewa's Delight</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" > <img src={menu} alt="menu"/></Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link ><Link to='/'>Home</Link> </Nav.Link>
                        <Nav.Link > <Link to='Products'>Our Menu</Link> </Nav.Link>
                        <Nav.Link > <Link to='Contact'>Contact Us</Link> </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}
