import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../api';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const cachedProduct = useMemo(() => {
    const savedProduct = localStorage.getItem(`product_${id}`);
    return savedProduct ? JSON.parse(savedProduct) : null;
  }, [id]);

  useEffect(() => {
    if (!cachedProduct) {
      fetchProduct();
    } else {
      setProduct(cachedProduct);
    }
  }, [cachedProduct]);

  const fetchProduct = async () => {
    try {
      const response = await getProducts(id);
      setProduct(response.data);
      localStorage.setItem(`product_${id}`, JSON.stringify(response.data));
    } catch (error) {
      console.error(error);
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={product.image || 'placeholder-image-url'}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.company}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {product.rating}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Discount: {product.discount}%
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.availability ? 'In Stock' : 'Out of Stock'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetail;
