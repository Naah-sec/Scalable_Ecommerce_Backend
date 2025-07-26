import { useEffect, useState } from 'react';
import {
  Container, Typography, List, ListItem, ListItemText,
  CircularProgress, Alert, Box, Chip, Divider,
  useTheme, Paper
} from '@mui/material';
import axios from 'axios';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

interface Order {
  id: number;
  status: string;
  created_at: string;
  items: { product: { name: string }, quantity: number }[];
}

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'pending': return 'warning';
    case 'paid': return 'info';
    case 'shipped': return 'primary';
    case 'completed': return 'success';
    case 'cancelled': return 'error';
    default: return 'default';
  }
};

const getStatusIcon = (status: string) => {
  switch (status.toLowerCase()) {
    case 'shipped': return <LocalShippingIcon />;
    default: return <ShoppingBagIcon />;
  }
};

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const theme = useTheme();

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:8000/api/orders/', { 
      headers: { Authorization: `Token ${token}` }
    })
      .then(res => setOrders(res.data))
      .catch(() => setError('You must be logged in to view your orders.'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <Box sx={{ mt: 8, display: 'flex', justifyContent: 'center' }}>
      <CircularProgress size={60} />
    </Box>
  );

  if (error) return (
    <Container sx={{ mt: 8 }}>
      <Alert severity="error" sx={{ maxWidth: 600, mx: 'auto' }}>{error}</Alert>
    </Container>
  );

  if (orders.length === 0) return (
    <Container maxWidth="md" sx={{ mt: 8, textAlign: 'center' }}>
      <ShoppingBagIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
      <Typography variant="h5" color="text.secondary" gutterBottom>
        No orders yet
      </Typography>
      <Typography color="text.secondary">
        Start shopping to create your first order!
      </Typography>
    </Container>
  );

  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: 600,
          mb: 4,
          textAlign: 'center'
        }}
      >
        My Orders
      </Typography>

      <List sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {orders.map(order => (
          <Paper 
            key={order.id} 
            elevation={2}
            sx={{ 
              borderRadius: 2,
              overflow: 'hidden',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
              }
            }}
          >
            <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', p: 0 }}>
              <Box sx={{ 
                p: 2, 
                bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.50',
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}>
                <Chip
                  icon={getStatusIcon(order.status)}
                  label={order.status}
                  color={getStatusColor(order.status)}
                  sx={{ fontWeight: 500 }}
                />
                <Typography variant="subtitle2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <AccessTimeIcon fontSize="small" />
                  {new Date(order.created_at).toLocaleString()}
                </Typography>
              </Box>

              <Divider />

              <Box sx={{ p: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                  Order #{order.id}
                </Typography>
                <List dense>
                  {order.items.map((item, idx) => (
                    <ListItem key={idx} sx={{ px: 0 }}>
                      <ListItemText
                        primary={
                          <Typography variant="body1">
                            {item.quantity} × {item.product.name}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </ListItem>
          </Paper>
        ))}
      </List>
    </Container>
  );
}

