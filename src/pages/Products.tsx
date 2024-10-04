import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Product from "../components/product/Product";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { actGetProducts } from "../store/product/productsSlice";

const Products = () => {
  const { loading, records, error } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actGetProducts());
  }, [dispatch]);

  const productsList =
    records.length > 0
      ? records.map((record) => (
          <Col
            key={record.id}
            xs={3}
            className="d-flex justify-content-center mt-2 mb-5"
          >
            <Product {...record} />
          </Col>
        ))
      : "there are not products";

  return (
    <>
      <Container>
        <Row>
          {productsList}
          {/* <Col xs={3} className="d-flex justify-content-center mt-2 mb-5">
            <Product />
          </Col> */}
        </Row>
      </Container>
    </>
  );
};

export default Products;
