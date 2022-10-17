import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Container } from "@mui/system";
import "./Pages.css";
import Paginat from "../Paginat/Paginat";
import DeleteIcon from "@mui/icons-material/Delete";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import MobileFriendlyOutlinedIcon from "@mui/icons-material/MobileFriendlyOutlined";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import t1 from "../../../../Images/t-1.jpg";
import t2 from "../../../../Images/t-2.jpg";
import t3 from "../../../../Images/t-3.jpg";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const JobTitle = () => {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container className="Title-Jobs">
      <section style={{ paddingBottom: 40 }}>
        <div className="job-title">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Checkbox {...label} defaultChecked />
            <Tab label="All" />
            <Tab label="Active" />
            <Tab label="Pendings" />
            <Tab label="Archived" />
          </Tabs>
        </div>
        <div className="tab-icon">
          <DeleteIcon className="single-icon"  style={{ width: 23, height: 33, color: "red", marginRight:10 }} />
          <Inventory2OutlinedIcon className="single-icon"
            style={{ width: 23, height: 33, color: "rgb(124, 124, 124)", marginRight:10 }}
          />
          <MobileFriendlyOutlinedIcon className="single-icon"
            style={{ width: 23, height: 33, color: "green" }}
          />
        </div>
      </section>

      <section>
        <Box sx={{ flexGrow: 1 }} className="box-1">
          <Grid container spacing={3}>
            <Grid
              item
              xs="auto"
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                marginLeft: 20,
              }}
            >
              <Checkbox {...label} defaultChecked />
              <img
                style={{
                  width: 130,
                  height: 50,
                  marginLeft: 20,
                  borderRadius: 5,
                }}
                src={t1}
                alt=""
              />
            </Grid>
            <Grid item xs={6}>
              <div className="calender-button">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <CalendarMonthOutlinedIcon style={{ marginLeft: "-93" }} />
                  <p style={{ fontSize: 13 }}>13 oct 2022</p>
                </div>
                <div>
                  <button>FULL TIME</button>
                  <button>Active</button>
                </div>
              </div>
              <div>
                <h3 style={{ textAlign: "justify" }}>Job Title Here</h3>
                <p style={{ textAlign: "justify" }}>
                  Job Description Job DescriptionJob DescriptionJob
                  DescriptionJob DescriptionJob DescriptionJob DescriptionJob
                  DescriptionJob DescriptionJob DescriptionJob Description
                </p>
              </div>
            </Grid>
            <Grid item xs>
              <div className="title-icon">
                <ToggleOnOutlinedIcon className="single-icon" />
                <DeleteIcon className="single-icon" style={{ width: 40, height: 32, color: "red" }} />
                <Inventory2OutlinedIcon className="single-icon"
                  style={{ width: 40, height: 29, color: "rgb(124, 124, 124)" }}
                />
                <MobileFriendlyOutlinedIcon className="single-icon"
                  style={{
                    width: 40,
                    height: 29,
                    color: "green",
                    marginRight: 10,
                  }}
                />
                <RemoveRedEyeRoundedIcon className="single-icon"
                  style={{
                    borderRadius: "100%",
                    width: 40,
                    height: 37,
                    padding: 5,
                    boxShadow: "1px 1px 30px -8px",
                    color: "rgb(124, 124, 124)",
                  }}
                />
              </div>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ flexGrow: 1 }} className="box-2">
          <Grid container spacing={3}>
            <Grid
              item
              xs="auto"
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                marginLeft: 20,
              }}
            >
              <Checkbox {...label} defaultChecked />
              <img
                style={{
                  width: 130,
                  height: 50,
                  marginLeft: 20,
                  borderRadius: 5,
                }}
                src={t2}
                alt=""
              />
            </Grid>
            <Grid item xs={6}>
              <div className="calender-button">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <CalendarMonthOutlinedIcon style={{ marginLeft: "-93" }} />
                  <p style={{ fontSize: 13 }}>13 oct 2022</p>
                </div>
                <div>
                  <button>FULL TIME</button>
                  <button>Active</button>
                </div>
              </div>
              <div>
                <h3 style={{ textAlign: "justify" }}>Job Title Here</h3>
                <p style={{ textAlign: "justify" }}>
                  Job Description Job DescriptionJob DescriptionJob
                  DescriptionJob DescriptionJob DescriptionJob DescriptionJob
                  DescriptionJob DescriptionJob DescriptionJob Description
                </p>
              </div>
            </Grid>
            <Grid item xs>
              <div className="title-icon">
                <ToggleOnOutlinedIcon className="single-icon" />
                <DeleteIcon className="single-icon" style={{ width: 40, height: 32, color: "red" }} />
                <Inventory2OutlinedIcon className="single-icon"
                  style={{ width: 40, height: 29, color: "rgb(124, 124, 124)" }}
                />
                <MobileFriendlyOutlinedIcon className="single-icon"
                  style={{
                    width: 40,
                    height: 29,
                    color: "gray",
                    marginRight: 10,
                  }}
                />
                <RemoveRedEyeRoundedIcon className="single-icon"
                  style={{
                    borderRadius: "100%",
                    width: 40,
                    height: 37,
                    padding: 5,
                    boxShadow: "1px 1px 30px -8px",
                    color: "gray",
                  }}
                />
              </div>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ flexGrow: 1 }} className="box-3">
          <Grid container spacing={3}>
            <Grid
              item
              xs="auto"
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                marginLeft: 20,
              }}
            >
              <Checkbox {...label} defaultChecked />
              <img
                style={{
                  width: 130,
                  height: 50,
                  marginLeft: 20,
                  borderRadius: 5,
                }}
                src={t3}
                alt=""
              />
            </Grid>
            <Grid item xs={6}>
              <div className="calender-button">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <CalendarMonthOutlinedIcon style={{ marginLeft: "-93" }} />
                  <p style={{ fontSize: 13 }}>13 oct 2022</p>
                </div>
                <div>
                  <button>FULL TIME</button>
                  <button>Active</button>
                </div>
              </div>
              <div>
                <h3 style={{ textAlign: "justify" }}>Job Title Here</h3>
                <p style={{ textAlign: "justify" }}>
                  Job Description Job DescriptionJob DescriptionJob
                  DescriptionJob DescriptionJob DescriptionJob DescriptionJob
                  DescriptionJob DescriptionJob DescriptionJob Description
                </p>
              </div>
            </Grid>
            <Grid item xs>
              <div className="title-icon">
                <ToggleOnOutlinedIcon className="single-icon" />
                <DeleteIcon className="single-icon" style={{ width: 40, height: 32, color: "red" }} />
                <Inventory2OutlinedIcon className="single-icon"
                  style={{ width: 40, height: 29, color: "green" }}
                />
                <MobileFriendlyOutlinedIcon className="single-icon"
                  style={{
                    width: 40,
                    height: 29,
                    color: "rgb(124, 124, 124)",
                    marginRight: 10,
                  }}
                />
                <RemoveRedEyeRoundedIcon className="single-icon"
                  style={{
                    borderRadius: "100%",
                    width: 40,
                    height: 37,
                    padding: 5,
                    boxShadow: "1px 1px 30px -8px",
                    color: "rgb(124, 124, 124)",
                  }}
                />
              </div>
            </Grid>
          </Grid>
        </Box>

        <div className="paginat">
          <Paginat />
        </div>
      </section>
    </Container>
  );
};

export default JobTitle;
