import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import { useProductContext } from "../context/ProductContext";
import { getProducts } from "../api";
import ProductCard from "./ProductCard"; // Import ProductCard component

const ProductList = () => {
  const { products, setProducts } = useProductContext();
  const [filters, setFilters] = useState({
    companyname: "",
    categoryname: "",
    rating: "",
    minprice: "",
    maxprice: "",
    n: 10, // Default value for the number of products
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleApplyFilters = async () => {
    try {
      const response = await getProducts(filters);
      setProducts(response); // Set products in context
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        All Products
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <TextField
            name="categoryname"
            label="Category"
            fullWidth
            onChange={handleFilterChange}
          />
          <TextField
            name="companyname"
            label="Company"
            fullWidth
            onChange={handleFilterChange}
          />
          <TextField
            name="rating"
            label="Rating"
            fullWidth
            onChange={handleFilterChange}
          />
          <TextField
            name="minprice"
            label="Min Price"
            fullWidth
            onChange={handleFilterChange}
          />
          <TextField
            name="maxprice"
            label="Max Price"
            fullWidth
            onChange={handleFilterChange}
          />
          <Select name="availability" onChange={handleFilterChange} fullWidth>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="in-stock">In Stock</MenuItem>
            <MenuItem value="out-of-stock">Out of Stock</MenuItem>
          </Select>
          <Button
            variant="contained"
            color="primary"
            onClick={handleApplyFilters}
          >
            Apply Filters
          </Button>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <ProductCard product={product} />
                <Typography variant="body1" component="div">
                  {product.productName}
                </Typography>{" "}
                {/* Display product name */}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductList;
