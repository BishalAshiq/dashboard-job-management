import React from "react";
import "./SidebarHome.css";
import RoofingOutlinedIcon from "@mui/icons-material/RoofingOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import SearchIcon from "@mui/icons-material/Search";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import DeviceHubOutlinedIcon from "@mui/icons-material/DeviceHubOutlined";
import { Container } from "@mui/system";

const SidebarHome = () => {
  return (
    <div>
      <Container className="side-search-sec">
        <div className="side_search">
          <SearchIcon style={{ color: "white" }} />
          <input type="text" />
        </div>
      </Container>

      <section className="sidebar-home">
        <RoofingOutlinedIcon
          style={{ width: 30, marginLeft: 15, color: "rgb(247, 243, 238)" }}
        />
        <h3 style={{ fontWeight: 400, fontSize: 15, paddingTop: 5 }}>Home</h3>
      </section>

      <div>
        <section className="accordion-item" style={{ marginTop: -20 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              textAlign: "center",
              backgroundColor: "rgb(5, 154, 84)",
            }}
          >
            <AccountCircleOutlinedIcon
              style={{ color: "white", marginRight: -20 }}
            />
            <h4 style={{ marginRight: 4, color: "white", fontWeight: 500 }}>
              User Management
            </h4>
            <KeyboardArrowDownOutlinedIcon
              style={{ marginRight: 4, color: "white" }}
            />
          </div>
          <div style={{ paddingLeft: "50px", marginTop: -10 }}>
            <unl
              style={{
                textAlign: "justify",
                color: "white",
                fontSize: 14,
              }}
            >
              <li>View all users</li>
              <li>Create user</li>
              <li>Approval list</li>
              <li>Role Management</li>
              <li>Event registered user</li>
            </unl>
          </div>
        </section>
        <section className="accordion-item" style={{ paddingBottom: 20 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <StickyNote2OutlinedIcon
              style={{ marginRight: 4, color: "white" }}
            />
            <h4 style={{ marginRight: 4, color: "white", fontWeight: 500 }}>
              Notice & News Management
            </h4>
            <KeyboardArrowDownOutlinedIcon
              style={{ marginRight: 4, color: "white" }}
            />
          </div>
          <div style={{ paddingLeft: "50px", marginTop: -10 }}>
            <unl
              style={{
                textAlign: "justify",
                color: "white",
                fontSize: 14,
              }}
            >
              <li>View all</li>
              <li>Categories</li>
              <li>Create</li>
              <li>Approval list</li>
              <li>Archived</li>
            </unl>
          </div>
        </section>
        <section className="accordion-item">
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              textAlign: "center",
              backgroundColor: "#25583C",
              borderRadius: 5,
            }}
          >
            <DeviceHubOutlinedIcon
              style={{ marginRight: -20, color: "#C3ABAB" }}
            />
            <h4 style={{ marginRight: 4, color: "#DDD2D2", fontWeight: 500 }}>
              Job Management
            </h4>
            <KeyboardArrowDownOutlinedIcon
              style={{ marginRight: 4, color: "white" }}
            />
          </div>
          <div style={{ paddingLeft: "50px" }}>
            <unl
              style={{
                textAlign: "justify",
                color: "white",
                fontSize: 14,
              }}
            >
              <li>View all jobs</li>
              <li>job Configuration</li>
              <li>Create a job</li>
              <li>Approval list</li>
              <li>Archived</li>
            </unl>
          </div>
        </section>
        <section className="accordion-item">
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <LibraryBooksOutlinedIcon
              style={{ marginRight: -20, color: "white" }}
            />
            <h4 style={{ marginRight: 4, color: "white", fontWeight: 500 }}>
              Blogs & article
            </h4>
            <KeyboardArrowDownOutlinedIcon
              style={{ marginRight: 4, color: "white" }}
            />
          </div>
          <div style={{ paddingLeft: "50px", marginTop: -10 }}>
            <unl
              style={{
                textAlign: "justify",
                color: "white",
                fontSize: 14,
              }}
            >
              <li>View all</li>
              <li>Categories</li>
              <li>Create Post</li>
              <li>Approval list</li>
              <li>Archived</li>
            </unl>
          </div>
        </section>
        <section className="accordion-item">
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <CelebrationOutlinedIcon
              style={{ marginRight: -20, color: "white" }}
            />
            <h4 style={{ marginRight: 4, color: "white", fontWeight: 500 }}>
              Advertisement
            </h4>
            <KeyboardArrowDownOutlinedIcon
              style={{ marginRight: 4, color: "white" }}
            />
          </div>
          <div style={{ paddingLeft: "50px", marginTop: -10 }}>
            <unl
              style={{
                textAlign: "justify",
                color: "white",
                fontSize: 14,
              }}
            >
              <li>View all</li>
              <li>Categories</li>
              <li>Create post</li>
              <li>Archived</li>
            </unl>
          </div>
        </section>
        <section className="accordion-item">
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <CelebrationOutlinedIcon
              style={{ marginRight: -20, color: "white" }}
            />
            <h4 style={{ marginRight: 4, color: "white", fontWeight: 500 }}>
              Miscillenious
            </h4>
            <AddOutlinedIcon style={{ marginRight: 4, color: "white" }} />
          </div>
          <div
            style={{
              backgroundColor: "#25583C",
              display: "flex",
              alignItems: "center",
            }}
          >
            <TuneRoundedIcon style={{ marginLeft: 38, color: "white" }} />
            <h4
              className="side-settings"
              style={{ marginLeft: 14, color: "white", fontWeight: 500 }}
            >
              Settings
            </h4>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SidebarHome;
