import React from "react";
import "./SidebarHome.css";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Container } from "@mui/system";

const SidebarHome = () => {
  return (
    <div>

      <Container className="side-search-sec">
        <div className="side_search">
          <SearchIcon style={{color:"white"}}/>
          <input type="text"/>
        </div>
      </Container>

      <section className="sidebar-home">
        <HomeIcon
          color="disabled"
          style={{ width: 30, marginRight: 10, color: "rgb(247, 243, 238)" }}
        />
        <h3>Home</h3>
      </section>

      <div>
        <section className="accordion-item">
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
              style={{ marginRight: 4, color: "white" }}
            />
            <h4 style={{ marginRight: 4, color: "white" }}>User Management</h4>
            <KeyboardArrowDownOutlinedIcon
              style={{ marginRight: 4, color: "white" }}
            />
          </div>
          <div>
            <unl
              style={{
                textAlign: "justify",
                display: "grid",
                placeItems: "center",
                color: "white",
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
        <section className="accordion-item">
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <NewspaperIcon style={{ marginRight: 4, color: "white" }} />
            <h4 style={{ marginRight: 4, color: "white" }}>
              Notice & News Management
            </h4>
            <KeyboardArrowDownOutlinedIcon
              style={{ marginRight: 4, color: "white" }}
            />
          </div>
          <div>
            <unl
              style={{
                textAlign: "justify",
                display: "grid",
                placeItems: "center",
                color: "white",
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
            }}
          >
            <Person3OutlinedIcon style={{ marginRight: 4, color: "white" }} />
            <h4 style={{ marginRight: 4, color: "white" }}>Job Management</h4>
            <KeyboardArrowDownOutlinedIcon
              style={{ marginRight: 4, color: "white" }}
            />
          </div>
          <div>
            <unl
              style={{
                textAlign: "justify",
                display: "grid",
                placeItems: "center",
                color: "white",
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
            <ArticleOutlinedIcon style={{ marginRight: 4, color: "white" }} />
            <h4 style={{ marginRight: 4, color: "white" }}>Blogs & article</h4>
            <KeyboardArrowDownOutlinedIcon
              style={{ marginRight: 4, color: "white" }}
            />
          </div>
          <div>
            <unl
              style={{
                textAlign: "justify",
                display: "grid",
                placeItems: "center",
                color: "white",
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
              style={{ marginRight: 4, color: "white" }}
            />
            <h4 style={{ marginRight: 4, color: "white" }}>Advertisement</h4>
            <KeyboardArrowDownOutlinedIcon
              style={{ marginRight: 4, color: "white" }}
            />
          </div>
          <div>
            <unl
              style={{
                textAlign: "justify",
                display: "grid",
                placeItems: "center",
                color: "white",
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
              style={{ marginRight: 4, color: "white" }}
            />
            <h4 style={{ marginRight: 4, color: "white" }}>Miscillenious</h4>
            <KeyboardArrowDownOutlinedIcon
              style={{ marginRight: 4, color: "white" }}
            />
          </div>
          <div>
            <unl
              style={{
                textAlign: "justify",
                display: "grid",
                placeItems: "center",
                color: "white",
              }}
            >
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </unl>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SidebarHome;
