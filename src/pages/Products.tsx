import { useEffect, useState } from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { Spinner, Alert } from "react-bootstrap";
import Product from "../components/product/Product";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { actGetProducts } from "../store/product/productsSlice";
import CategoryFilter from "../components/category/CategoryFilter";

const Products = () => {
  const { loading, records, error } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const [isSortingEnabled, setIsSortingEnabled] = useState(false);
  const [sortByPrice, setSortByPrice] = useState<"asc" | "desc">("asc");

  const sortedProducts = isSortingEnabled
    ? [...records].sort((a, b) => {
        if (sortByPrice === "asc") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      })
    : records;

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.includes(category)
        ? prevSelectedCategories.filter((cat) => cat !== category)
        : [...prevSelectedCategories, category]
    );
  };

  const filteredProducts = sortedProducts.filter(
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
        <Col xs={12} md={3} className="my-3">
          <CategoryFilter
            selectedCategories={selectedCategories}
            onCategoryChange={handleCategoryChange}
          />
          <Form.Check
            type="checkbox"
            label="Enable Sorting"
            checked={isSortingEnabled}
            onChange={() => setIsSortingEnabled((prev) => !prev)}
            className="my-3"
          />

          {isSortingEnabled && (
            <Col className="text-end" xs={6} md={12}>
              <FloatingLabel controlId="floatingSelect" label="Sort by Price">
                <Form.Select
                  aria-label="Floating label select example"
                  onChange={(e) => {
                    const value = e.target.value;
                    setSortByPrice(value === "1" ? "asc" : "desc");
                  }}
                >
                  <option value="1">Ascending</option>
                  <option value="2">Descending</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          )}
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
