import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Tab,
  Tabs,
} from '@mui/material';

const SearchPanel = () => {
  const [serviceType, setServiceType] = useState('air'); // Default service type
  const [departureLocation, setDepartureLocation] = useState('');
  const [destinationLocation, setDestinationLocation] = useState('');
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [travelers, setTravelers] = useState(1);

  const handleServiceTypeChange = (event, newValue) => {
    setServiceType(newValue);
  };

  const handleSearch = () => {
    // Perform search based on selected criteria
    console.log('Search criteria:', {
      serviceType,
      departureLocation,
      destinationLocation,
      departureDate,
      returnDate,
      travelers,
    });
  };

  return (
    <Box sx={{ p: 2 }}>
      <Tabs
        value={serviceType}
        onChange={handleServiceTypeChange}
        centered
        aria-label="service type tabs"
      >
        <Tab label="Air Tickets" value="air" />
        <Tab label="Hotels" value="hotels" />
        <Tab label="Holidays" value="holidays" />
      </Tabs>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Departure Location"
            fullWidth
            value={departureLocation}
            onChange={(e) => setDepartureLocation(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Destination Location"
            fullWidth
            value={destinationLocation}
            onChange={(e) => setDestinationLocation(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Departure Date"
            type="date"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Return Date"
            type="date"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Travelers"
            type="number"
            fullWidth
            value={travelers}
            onChange={(e) => setTravelers(e.target.value)}
          />
        </Grid>
      </Grid>

      <Box mt={2}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default SearchPanel;
