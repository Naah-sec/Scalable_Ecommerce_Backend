import { useEffect, useState } from 'react';
import { 
  Container, Typography, Grid, Card, CardContent, CardActions, 
  Button, CircularProgress, Box, Chip, Alert, useTheme 
} from '@mui/material';
import axios from 'axios';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import InventoryIcon from '@mui/icons-material/Inventory';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  stock: number;
  category: { name: string };
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const theme = useTheme();

  useEffect(() => {
    axios.get('http://localhost:8000/api/products/')
      .then(res => setProducts(res.data))
      .catch(err => setError('Failed to load products. Please try again later.'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Container sx={{ mt: 8, textAlign: 'center' }}><CircularProgress /></Container>;

  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>Products</Typography>
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3, borderRadius: 3 }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>{product.name}</Typography>
                <Typography color="text.secondary" sx={{ mb: 1 }}>{product.category?.name}</Typography>
                <Typography sx={{ mb: 2, color: 'text.secondary' }}>{product.description}</Typography>
                <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 700, mb: 1 }}>${product.price}</Typography>
                <Typography variant="body2" color={product.stock > 0 ? 'success.main' : 'error.main'}>
                  Stock: {product.stock > 0 ? product.stock : 'Out of stock'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="primary" fullWidth disabled={product.stock === 0} sx={{ borderRadius: 2 }}>
                  Add to Order
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
