import React from "react";
import "./Pages.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Container } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import t1 from "../../../../Images/t-1.jpg";
import t2 from "../../../../Images/t-2.jpg";
import t3 from "../../../../Images/t-3.jpg";
import Paginat from "../Paginat/Paginat";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import MobileFriendlyOutlinedIcon from "@mui/icons-material/MobileFriendlyOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import { AntSwitch, FormControlLabel, Stack } from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const JobTitle = () => {
  const [value, setValue] = React.useState(2);
  // Checkbox
  const [checked, setChecked] = React.useState([true, false]);

  const handleChange1 = (event) => {
    setChecked([
      event.target.checked,
      event.target.checked,
      event.target.checked,
    ]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };
  const handleChange4 = (event) => {
    setChecked([checked[1], event.target.checked]);
  };

  const childrenOne = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        control={<Checkbox color="default" checked={checked[0]} onChange={handleChange2} />}
      />
    </Box>
  );
  const childrenTwo = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        control={<Checkbox color="default" checked={checked[1]} onChange={handleChange3} />}
      />
    </Box>
  );
  const childrenThree = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        control={<Checkbox color="default" checked={checked[1]} onChange={handleChange4} />}
      />
    </Box>
  );

  // AntSwitch
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "black",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));

  return (
    <Container className="Title-Jobs">
      <section style={{ paddingBottom: 40, borderBottom: "1px solid gray", marginTop: 20 }}>
        <div className="job-title">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <FormControlLabel
              control={
                <Checkbox
                  color="default"
                  checked={checked[0] && checked[1]}
                  indeterminate={checked[0] !== checked[1]}
                  onChange={handleChange1}
                />
              }
            />
            <Tab label="All" />
            <Tab label="Active" />
            <Tab label="Pendings" />
            <Tab label="Archived" />
          </Tabs>
        </div>
        <div className="tab-icon">
          <DeleteIcon
            className="single-icon"
            style={{ width: 23, height: 33, color: "red", marginRight: 10 }}
          />
          <Inventory2OutlinedIcon
            className="single-icon"
            style={{
              width: 23,
              height: 33,
              color: "rgb(124, 124, 124)",
              marginRight: 10,
            }}
          />
          <MobileFriendlyOutlinedIcon
            className="single-icon"
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
              {childrenOne}
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
                  <button className="full-active">FULL TIME</button>
                  <button className="full-active">Active</button>
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
                <Stack direction="row" spacing={1} alignItems="center">
                  <AntSwitch inputProps={{ "aria-label": "ant design" }} />
                </Stack>

                <DeleteIcon
                  className="single-icon"
                  style={{ width: 40, height: 32, color: "red" }}
                />
                <Inventory2OutlinedIcon
                  className="single-icon"
                  style={{ width: 40, height: 29, color: "rgb(124, 124, 124)" }}
                />
                <MobileFriendlyOutlinedIcon
                  className="single-icon"
                  style={{
                    width: 40,
                    height: 29,
                    color: "green",
                    marginRight: 10,
                  }}
                />
                <RemoveRedEyeRoundedIcon
                  className="single-icon"
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
              {childrenTwo}
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
                  <button className="full-active">FULL TIME</button>
                  <button className="full-active">Active</button>
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
                <Stack direction="row" spacing={1} alignItems="center">
                  <AntSwitch
                    defaultChecked
                    inputProps={{ "aria-label": "ant design" }}
                  />
                </Stack>
                <DeleteIcon
                  className="single-icon"
                  style={{ width: 40, height: 32, color: "red" }}
                />
                <Inventory2OutlinedIcon
                  className="single-icon"
                  style={{ width: 40, height: 29, color: "rgb(124, 124, 124)" }}
                />
                <MobileFriendlyOutlinedIcon
                  className="single-icon"
                  style={{
                    width: 40,
                    height: 29,
                    color: "gray",
                    marginRight: 10,
                  }}
                />
                <RemoveRedEyeRoundedIcon
                  className="single-icon"
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
              {childrenThree}
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
                  <button className="full-active">FULL TIME</button>
                  <button className="full-active">Active</button>
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
                <Stack direction="row" spacing={1} alignItems="center">
                  <AntSwitch inputProps={{ "aria-label": "ant design" }} />
                </Stack>
                <DeleteIcon
                  className="single-icon"
                  style={{ width: 40, height: 32, color: "red" }}
                />
                <Inventory2OutlinedIcon
                  className="single-icon"
                  style={{ width: 40, height: 29, color: "green" }}
                />
                <MobileFriendlyOutlinedIcon
                  className="single-icon"
                  style={{
                    width: 40,
                    height: 29,
                    color: "rgb(124, 124, 124)",
                    marginRight: 10,
                  }}
                />
                <RemoveRedEyeRoundedIcon
                  className="single-icon"
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
