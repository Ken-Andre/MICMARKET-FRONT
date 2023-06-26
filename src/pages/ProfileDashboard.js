import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Overview from './Overview';
import ChangeLocation from './ChangeLocation';
import ChangePassword from './ChangePassword';
import Cart from './Cart';

export default function ProfileDashboard() {
  const [value, setValue] = React.useState('overview');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Overview" value="overview" />
            <Tab label="Change Location" value="change-location" />
            <Tab label="Change Password" value="change-password" />
            <Tab label="Cart" value="4" />
          </TabList>
        </Box>
        <TabPanel value="overview">
          <Overview />
        </TabPanel>
        <TabPanel value="change-location">
          <ChangeLocation />
        </TabPanel>
        <TabPanel value="change-password">
          <ChangePassword />
        </TabPanel>
        <TabPanel value="4">
          <Cart />*/ A Cart Panel
        </TabPanel>
      </TabContext>
    </Box>
  );
}
