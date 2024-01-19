import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./header.css"

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <NavDropdown title="About us" id="basic-nav-dropdown" className='mx-3'>
              <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
              <NavDropdown.Item href="/directory">
                Directory
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Gallery</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                News
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Typography</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Programms & Events" id="basic-nav-dropdown" className='mx-3'>
              <NavDropdown.Item href="#action/3.1">Contact</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Dictionary
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Gallery</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                News
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Typography</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Alumni Stories" id="basic-nav-dropdown" className='mx-3'>
              <NavDropdown.Item href="#action/3.1">Contact</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Dictionary
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Gallery</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                News
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Typography</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Career Opportunities" id="basic-nav-dropdown" className='mx-3'>
              <NavDropdown.Item href="#action/3.1">Contact</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Dictionary
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Gallery</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                News
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Typography</NavDropdown.Item>

            </NavDropdown>
          </Nav>
          <Nav.Link href="#" className='mx-2' >
            Sign in
          </Nav.Link>
          <Nav.Link href="#" className='mx-2'>
            Sign up
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;