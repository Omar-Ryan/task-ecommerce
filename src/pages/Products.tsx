import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Spinner, Alert } from "react-bootstrap";
import Product from "../components/product/Product";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { actGetProducts } from "../store/product/productsSlice";
import CategoryFilter from "../components/category/CategoryFilter";

const Products = () => {
  const { loading, records, error } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.includes(category)
        ? prevSelectedCategories.filter((cat) => cat !== category)
        : [...prevSelectedCategories, category]
    );
  };

  const filteredProducts = records.filter(
    (item) =>
      selectedCategories.length === 0 ||
      selectedCategories.includes(item.category as string)
  );

  useEffect(() => {
    if (!records.length) {
      dispatch(actGetProducts());
    }
  }, [dispatch, records]);

  if (loading === "pending") {
    return <Spinner animation="border" />;
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <Container>
      <Row>
        <Col xs={12} md={3} className="my-2">
          <CategoryFilter
            selectedCategories={selectedCategories}
            onCategoryChange={handleCategoryChange}
          />
        </Col>
        <Col xs={12} md={9}>
          <Row>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((record) => (
                <Col
                  key={record.id}
                  xs={12}
                  md={4}
                  className="d-flex justify-content-center mt-2 mb-5"
                >
                  <Product {...record} />
                </Col>
              ))
            ) : (
              <p>No products found.</p>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
