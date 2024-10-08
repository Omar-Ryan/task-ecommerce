import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import { useAppSelector } from "../../store/hooks";

const Header = () => {
  const { totalNum, iconWrapper, navbarShadow, pumpAnimateC } = styles;

  const cartItems = useAppSelector((status) => status.cart.items);

  const cartQuantity = Object.values(cartItems).reduce(
    (acc, curr) => acc + curr,
    0
  );

  const [pumpAnimate, setPumpAnimate] = useState(false);

  useEffect(() => {
    if (!cartQuantity) {
      return;
    }

    setPumpAnimate(true);

    const timeout = setTimeout(() => {
      setPumpAnimate(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [cartQuantity]);

  return (
    <header>
      {/* <Navbar bg="light" data-bs-theme="light"> */}
      <Navbar expand="lg" className={navbarShadow} fixed="top">
        <Container>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Navbar.Brand as={NavLink} to="/">
            Ryan
          </Navbar.Brand>
          <Nav className="me-auto flex-row gap-3">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="products">
              Products
            </Nav.Link>
          </Nav>
          <Nav className="">
            <Nav.Link as={NavLink} to="cart">
              {/* <button
                 type="button"
                 className="relative w-12 h-12 p-1 bg-gray-800 rounded-full text-cyan-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
               > */}
              <div className={iconWrapper}>
                <svg
                  xmlns="http:www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  fill="currentColor"
                >
                  <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                </svg>

                {cartQuantity ? (
                  <h4
                    className={`${totalNum} ${pumpAnimate ? pumpAnimateC : ""}`}
                  >
                    {cartQuantity}
                  </h4>
                ) : (
                  ""
                )}
              </div>
              {/* </button> */}
            </Nav.Link>
          </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
