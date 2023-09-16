import React from 'react';
import { Box, Typography, Container, Grid, Link, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer>
      <Box bgcolor="primary.main" py={4} color="white">
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6">About Us</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6">Need Help</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6">About</Typography>
              <Link href="#">Features</Link>
              <Link href="#">News</Link>
              <Link href="#">Menu</Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6">Company</Typography>
            </Grid>
          </Grid>
          <Divider my={3} />
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6">Support</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6">FAQ</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6">Blog</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6">We Accept Payments</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box bgcolor="primary.dark" py={2} color="white" textAlign="center">
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Your Brac. All rights reserved.
        </Typography>
        <Box mt={2}>
          <Link href="#">
            <FacebookIcon fontSize="large" />
          </Link>
          <Link href="#">
            <TwitterIcon fontSize="large" />
          </Link>
          <Link href="#">
            <InstagramIcon fontSize="large" />
          </Link>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
