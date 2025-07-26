import { Container, Typography, Card, CardContent, Button, Box, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonIcon from '@mui/icons-material/Person';

export default function Home() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ mt: 8, minHeight: '90vh' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
          textAlign: 'center'
        }}
      >
        <Typography 
          variant="h2" 
          component="h1"
          sx={{
            fontWeight: 700,
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            backgroundClip: 'text',
            textFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2
          }}
        >
          Scalable Ecommerce
        </Typography>
        <Typography variant="h5" color="text.secondary" gutterBottom sx={{ maxWidth: '600px', mb: 4 }}>
          Discover quality products with our seamless shopping experience
        </Typography>

        <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Card sx={{ width: 300, height: '100%', transform: 'translateY(0)', transition: '0.3s', '&:hover': { transform: 'translateY(-10px)' } }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, p: 4 }}>
              <ShoppingBasketIcon sx={{ fontSize: 40, color: 'primary.main' }} />
              <Typography variant="h6" gutterBottom>Browse Products</Typography>
              <Typography color="text.secondary" paragraph>
                Explore our wide range of products with detailed information and easy ordering
              </Typography>
              <Button 
                component={Link} 
                to="/products" 
                variant="contained" 
                fullWidth
                sx={{ mt: 'auto' }}
              >
                Shop Now
              </Button>
            </CardContent>
          </Card>

          <Card sx={{ width: 300, height: '100%', transform: 'translateY(0)', transition: '0.3s', '&:hover': { transform: 'translateY(-10px)' } }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, p: 4 }}>
              <PersonIcon sx={{ fontSize: 40, color: 'secondary.main' }} />
              <Typography variant="h6" gutterBottom>Account Access</Typography>
              <Typography color="text.secondary" paragraph>
                Sign in to manage your orders and access personalized features
              </Typography>
              <Button 
                component={Link} 
                to="/login" 
                variant="outlined" 
                fullWidth
                sx={{ mt: 'auto' }}
              >
                Login / Register
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
