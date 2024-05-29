import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import TabCategories from "../TabCategories/TabCategories";
import useMenu from "../useMenu/useMenu";

function SimpleTabs() {
  const categories = ["salad", "pizza", "soup", "dessert"];
  const { category } = useParams();
  const index = categories.indexOf(category);

  const [value, setValue] = useState(index);
  const [data] = useMenu("http://localhost:5000/menu");
  const offered = data.filter((item) => item.category === "offered");
  const dessert = data.filter((item) => item.category === "dessert");
  const soup = data.filter((item) => item.category === "soup");
  const pizza = data.filter((item) => item.category === "pizza");
  const salad = data.filter((item) => item.category === "salad");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", color: "white" }}>
      <Tabs
        className="flex justify-center items-center  text-center"
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        centered
      >
        <Tab label="Salad" />
        <Tab label="Pizza" />
        <Tab label="Soup" />
        <Tab label="desert" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <TabCategories items={salad}></TabCategories>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TabCategories items={pizza}></TabCategories>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TabCategories items={soup}></TabCategories>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TabCategories items={dessert}></TabCategories>
      </TabPanel>
    </Box>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default SimpleTabs;
