import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Tabs, Tab, Box } from '@mui/material';

const SpecialOfferGallery = () => {
  return (
    <div>
      <Box textAlign="center" mb={2}>
        <Typography variant="h4" gutterBottom>
          Special Offers
        </Typography>
      </Box>

      <Tabs centered value={0} indicatorColor="primary" textColor="primary" aria-label="offers category tabs">
        <Tab label="All" />
        <Tab label="Discounts" />
        <Tab label="Packages" />
        <Tab label="Events" />
      </Tabs>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <img src="https://placekitten.com/300/200" alt="Offer" />
            <CardContent>
              <Typography variant="h6" component="div">
                Offer Title
              </Typography>
              <Typography color="text.secondary">
                Brief description of the offer.
              </Typography>
              <Typography variant="h6" color="primary">
                20% Off
              </Typography>
              <Button variant="contained" color="primary">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <img src="https://placekitten.com/300/200" alt="Offer" />
            <CardContent>
              <Typography variant="h6" component="div">
                Offer Title
              </Typography>
              <Typography color="text.secondary">
                Brief description of the offer.
              </Typography>
              <Typography variant="h6" color="primary">
                20% Off
              </Typography>
              <Button variant="contained" color="primary">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <img src="https://placekitten.com/300/200" alt="Offer" />
            <CardContent>
              <Typography variant="h6" component="div">
                Offer Title
              </Typography>
              <Typography color="text.secondary">
                Brief description of the offer.
              </Typography>
              <Typography variant="h6" color="primary">
                20% Off
              </Typography>
              <Button variant="contained" color="primary">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </div>
  );
};

export default SpecialOfferGallery;
