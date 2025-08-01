import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const FooterProfile = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    window.history.back();
  };

  const handleLogout = () => {
    // perform logout logic here
    navigate('/');
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
      <Button variant="contained" onClick={handleBack}>
        Back
      </Button>
      <Button variant="contained" onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  );
};

export default FooterProfile;
