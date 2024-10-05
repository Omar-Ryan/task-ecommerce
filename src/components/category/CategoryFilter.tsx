import Form from "react-bootstrap/Form";

interface CategoryFilterProps {
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({
  selectedCategories,
  onCategoryChange,
}: CategoryFilterProps) => {
  const categories = [
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];

  return (
    <Form>
      <div className="d-flex justify-content-center flex-column mb-3">
        {categories.map((category, index) => (
          <Form.Check
            key={index}
            inline
            label={category}
            type="checkbox"
            id={`inline-checkbox-${index}`}
            checked={selectedCategories.includes(category)}
            onChange={() => onCategoryChange(category)}
          />
        ))}
      </div>
    </Form>
  );
};

export default CategoryFilter;
