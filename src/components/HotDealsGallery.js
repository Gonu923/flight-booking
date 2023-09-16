import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Tabs, Tab, Box } from '@mui/material';

const HotDealsGallery = () => {
  return (
    <div>
      <Box textAlign="center" mb={2}>
        <Typography variant="h4" gutterBottom>
          Hot Deals
        </Typography>
      </Box>

      <Tabs centered value={0} indicatorColor="primary" textColor="primary" aria-label="deals category tabs">
        <Tab label="All" />
        <Tab label="Flights" />
        <Tab label="Hotels" />
        <Tab label="Holidays" />
      </Tabs>

      <Box mb={2}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <img src="https://placekitten.com/300/200" alt="Deal" />
            <CardContent>
              <Typography variant="h6" component="div">
                Deal Title
              </Typography>
              <Typography color="text.secondary">
                Brief description of the deal.
              </Typography>
              <Typography variant="h6" color="primary">
                $199
              </Typography>
              <Button variant="contained" color="primary">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <img src="https://placekitten.com/300/200" alt="Deal" />
            <CardContent>
              <Typography variant="h6" component="div">
                Deal Title
              </Typography>
              <Typography color="text.secondary">
                Brief description of the deal.
              </Typography>
              <Typography variant="h6" color="primary">
                $199
              </Typography>
              <Button variant="contained" color="primary">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <img src="https://placekitten.com/300/200" alt="Deal" />
            <CardContent>
              <Typography variant="h6" component="div">
                Deal Title
              </Typography>
              <Typography color="text.secondary">
                Brief description of the deal.
              </Typography>
              <Typography variant="h6" color="primary">
                $199
              </Typography>
              <Button variant="contained" color="primary">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
      </Box>
    </div>
  );
};

export default HotDealsGallery;
