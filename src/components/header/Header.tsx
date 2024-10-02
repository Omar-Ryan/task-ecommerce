import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <header>
      {/* <Navbar bg="light" data-bs-theme="light"> */}
      <Navbar expand="lg" className="bg-body-light">
        <Container>
          <Navbar.Brand href="#home">Ryan</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#pricing">cart</Nav.Link>
            {/* <Nav.Link href="#features">Features</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
