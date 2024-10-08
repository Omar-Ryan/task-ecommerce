import { Container } from "react-bootstrap";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import styles from "./styles.module.css";
import { Outlet } from "react-router-dom";
const { container, wrapper } = styles;

const MainLayout = () => {
  return (
    <Container className={container}>
      <Header />
      <div className={wrapper}>
        <Outlet />
      </div>
      <Footer />
    </Container>
  );
};

export default MainLayout;
