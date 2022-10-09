import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Container } from "@mui/system";
import "./Pages.css";
import DeleteIcon from "@mui/icons-material/Delete";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import MobileFriendlyOutlinedIcon from "@mui/icons-material/MobileFriendlyOutlined";

const JobTitle = () => {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container>
      <section>
        <div>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="All" />
            <Tab label="Active" disabled />
            <Tab label="Pendings" disabled />
            <Tab label="Archived" disabled />
          </Tabs>
        </div>
        <div className="tab-icon">
          <DeleteIcon style={{ width: 40, height: 32, color: "red" }} />
          <Inventory2OutlinedIcon
            style={{ width: 40, height: 29, color: "rgb(124, 124, 124)" }}
          />
          <MobileFriendlyOutlinedIcon
            style={{ width: 40, height: 29, color: "green" }}
          />
        </div>
      </section>
    </Container>
  );
};

export default JobTitle;
