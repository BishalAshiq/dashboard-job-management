import React from "react";
import "./SidebarHome.css";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import SearchIcon from "@mui/icons-material/Search";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import DeviceHubOutlinedIcon from '@mui/icons-material/DeviceHubOutlined';
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
        <HomeIcon
          style={{ width: 30, marginLeft: 15, color: "rgb(247, 243, 238)" }}
        />
        <h3 style={{fontWeight: 400, fontSize:18, paddingTop: 5}}>Home</h3>
      </section>

      <div>
        <section className="accordion-item" style={{marginTop:-20}}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              textAlign: "center",
              backgroundColor: "green",
            }}
          >
            <AccountCircleOutlinedIcon
              style={{ marginRight: 4, color: "white", marginRight:-20 }}
            />
            <h4 style={{ marginRight: 4, color: "white", fontWeight: 400  }}>User Management</h4>
            <KeyboardArrowDownOutlinedIcon
              style={{ marginRight: 4, color: "white" }}
            />
          </div>
          <div style={{ paddingLeft: "50px", marginTop:-10 }}>
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
        <section className="accordion-item" style={{paddingBottom: 20}}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <StickyNote2OutlinedIcon style={{ marginRight: 4, color: "white" }} />
            <h4 style={{ marginRight: 4, color: "white", fontWeight: 400 }}>
              Notice & News Management
            </h4>
            <KeyboardArrowDownOutlinedIcon
              style={{ marginRight: 4, color: "white" }}
            />
          </div>
          <div style={{ paddingLeft: "50px", marginTop:-10 }}>
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
              backgroundColor: "#003300",
              borderRadius: 5,
            }}
          >
            <DeviceHubOutlinedIcon style={{ marginRight: -20, color: "#C3ABAB" }} />
            <h4 style={{ marginRight: 4, color: "#C3ABAB" }}>Job Management</h4>
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
            <LibraryBooksOutlinedIcon style={{ marginRight: -20, color: "white" }} />
            <h4 style={{ marginRight: 4, color: "white", fontWeight: 400 }}>Blogs & article</h4>
            <KeyboardArrowDownOutlinedIcon
              style={{ marginRight: 4, color: "white" }}
            />
          </div>
          <div style={{ paddingLeft: "50px", 
                marginTop:-10 }}>
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
            <h4 style={{ marginRight: 4, color: "white", fontWeight: 400 }}>Advertisement</h4>
            <KeyboardArrowDownOutlinedIcon
              style={{ marginRight: 4, color: "white" }}
            />
          </div>
          <div style={{ paddingLeft: "50px", marginTop:-10 }}>
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
            <h4 style={{ marginRight: 4, color: "white", fontWeight: 400 }}>Miscillenious</h4>
            <AddOutlinedIcon style={{ marginRight: 4, color: "white" }} />
          </div>
          <div
            style={{
              backgroundColor: "#003300",
              display: "flex",
              alignItems: "center",
            }}
          >
            <TuneRoundedIcon style={{ marginLeft: 80, color: "white" }} />
            <h4 style={{ marginLeft: 10, color: "white" }}>Setting</h4>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SidebarHome;
