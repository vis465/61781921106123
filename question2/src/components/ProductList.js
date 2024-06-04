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
      <Grid container spacing={1} alignItems="center">
  <Grid item xs={12} sm={2}>
    <TextField
      name="categoryname"
      label="Category"
      fullWidth
      size="small"
      onChange={handleFilterChange}
    />
  </Grid>
  <Grid item xs={12} sm={2}>
    <TextField
      name="companyname"
      label="Company"
      fullWidth
      size="small"
      onChange={handleFilterChange}
    />
  </Grid>
  <Grid item xs={12} sm={1}>
    <TextField
      name="rating"
      label="Rating"
      fullWidth
      size="small"
      onChange={handleFilterChange}
    />
  </Grid>
  <Grid item xs={12} sm={1}>
    <TextField
      name="minprice"
      label="Min Price"
      fullWidth
      size="small"
      onChange={handleFilterChange}
    />
  </Grid>
  <Grid item xs={12} sm={1}>
    <TextField
      name="maxprice"
      label="Max Price"
      fullWidth
      size="small"
      onChange={handleFilterChange}
    />
  </Grid>
  <Grid item xs={12} sm={1}>
    <Select name="availability" onChange={handleFilterChange} fullWidth size="small">
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value="in-stock">In Stock</MenuItem>
      <MenuItem value="out-of-stock">Out of Stock</MenuItem>
    </Select>
  </Grid>
  <Grid item xs={12} sm={2}>
    <Button
      variant="contained"
      color="primary"
      onClick={handleApplyFilters}
    >
      Apply Filters
    </Button>
  </Grid>
</Grid>


    </Box>
  );
};

export default ProductList;
