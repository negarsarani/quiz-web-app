import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { purple } from '@mui/material/colors';

const primary = purple[100];
export default function NotFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: primary,
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: 'white' }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button variant="contained" sx={{ background: '#8a2be2' }}>
        <Link style={{ textDecoration: 'none', color: '#ffff' }} to={'/'}>
          Back Home
        </Link>
      </Button>
    </Box>
  );
}
