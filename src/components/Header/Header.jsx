import React, {Component} from 'react';
import '../../stylesheets/Header.css'
import logo from '../../images/A2HeaderFMTLogo.png'
import bell from '../../images/A2HeaderBell.png'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export class Header extends Component {
    render() {
        return(
            <section>
                <header>
                    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                        <section>
                            <Navbar.Brand className="header-info" href="/Home">
                                <img
                                    alt=""
                                    src={logo}
                                    width="40"
                                    height="40"
                                    className="align-top"
                                />{' '}
                                Find My Travelmate
                                <section className="slogan"> Let's reach there togther</section>
                            </Navbar.Brand>
                        </section>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <ul className="navbar-nav mr-auto">
                            </ul>
                            <ul className="navbar-nav">
                                <Nav.Link className="header-info" href="/Home">Home</Nav.Link>
                                <Nav.Link className="header-info" href="/underimplementation">Car Journey</Nav.Link>
                                <Nav.Link className="header-info" href="/underimplementation">Air Journey</Nav.Link>
                                <Nav.Link className="header-info" href="/user/register">Sign Up</Nav.Link>
                                <Nav.Link className="header-info" href="/user/login">Login</Nav.Link>
                                <Nav.Link className="header-info" href="/user/notifications">
                                    <img
                                        alt=""
                                        src={bell}
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-top"
                                    />
                                </Nav.Link>
                            </ul>
                        </Navbar.Collapse>
                    </Navbar>
                </header>
            </section>
        )
    }
}