import { ReactNode } from 'react'
import { Button, Container,Nav, Navbar, NavDropdown, Form, FormControl } from 'react-bootstrap'

import Link from 'next/link'
import Image from 'next/image'

export type HeaderProps = {
    children?: ReactNode
}

export default function Header({ children }: HeaderProps) {
    return (
        <header>
            <Navbar bg="primary" variant="dark" expand="lg" fixed='top' >
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="/logo_2.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    <span className="text-uppercase font-weight-bold">Funders Watch</span>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/" className="text-light font-weight-bold">Home</Nav.Link>
                        <Nav.Link href="/blog" className="text-light font-weight-bold">Blog</Nav.Link>
                        <NavDropdown title="Features" id="basic-nav-dropdown" bsPrefix="nav-link text-light font-weight-bold" >
                            <NavDropdown.Item href="/features#address-labels" className="text-dark font-weight-bold" >Address Labels</NavDropdown.Item>
                            <NavDropdown.Item href="/features#mailshots" className="text-dark font-weight-bold" >Mailshots</NavDropdown.Item>
                            <NavDropdown.Item href="/features#message-tracking" className="text-dark font-weight-bold" >Message Tracking</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/features#others" className="text-dark font-weight-bold" >Others</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/funds" className="text-light font-weight-bold">Funds</Nav.Link>
                        <Nav.Link href="/pricing" className="text-light font-weight-bold">Pricing</Nav.Link>
                        <NavDropdown title="Ampersand" id="basic-nav-dropdown" bsPrefix="nav-link text-light font-weight-bold" >
                            <NavDropdown.Item href="/features#address-labels" className="text-dark font-weight-bold" >Address Labels</NavDropdown.Item>
                            <NavDropdown.Item href="/features#mailshots" className="text-dark font-weight-bold" >Mailshots</NavDropdown.Item>
                            <NavDropdown.Item href="/features#message-tracking" className="text-dark font-weight-bold" >Message Tracking</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/features#others" className="text-dark font-weight-bold" >Others</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/tutorials" className="text-light font-weight-bold">Tutorials</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Navbar>
        </header>
    )
}