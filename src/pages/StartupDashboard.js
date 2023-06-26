import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Overview from './SOverview';
import AddStartup from './AddStartup';
import StartupStatus from './StartupStatus';

export default function StartupDashboard() {
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
            <Tab label="Register My Startup" value="add" />
            <Tab label="Startup Status" value="status" />
            
          </TabList>
        </Box>
        <TabPanel value="overview">
          <Overview />
        </TabPanel>
        <TabPanel value="add">
          <AddStartup />
        </TabPanel>
        <TabPanel value="status">
          <StartupStatus />
        </TabPanel>
        
      </TabContext>
    </Box>
  );
}
