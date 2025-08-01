import * as React from "react";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Login from "../pages/Log";
import SLogin from "../pages/SLog";

const transition = { duration: 1.5, ease: "easeInOut" };

export default function LoginBox() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const variants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: "0%" },
  };

  return (
    <>
      <div className="container center">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="All Tabs for Login to MICMARKET"
                variant="scrollable"
                scrollButtons="auto"
              >
                <Tab label="USER" value="1" />
                <Tab label="STARTUP" value="2" />
              </TabList>
            </Box>
            <TabPanel
              value="1"
            >
              <Login />
            </TabPanel>
            <TabPanel
              value="2"
            >
              <SLogin />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </>
  );
}
