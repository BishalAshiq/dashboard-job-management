import React from "react";
import "./SidebarHome.css";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const SidebarHome = () => {
  return (
    <div>
      <div className="sidebar-home">
        <HomeIcon
          color="disabled"
          style={{ width: 30, marginRight: 10, color: "rgb(247, 243, 238)" }}
        />
        <h3>Home</h3>
      </div>

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
            <AccountCircleOutlinedIcon style={{ marginRight: 4 }} />
            <h4>User Management</h4>
            <KeyboardArrowDownOutlinedIcon/>
          </div>
          <div>
            <unl>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
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
            <NewspaperIcon />
            <h4>Notice & News Management</h4>
            <KeyboardArrowDownOutlinedIcon/>
          </div>
          <div>
            <unl>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
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
            <Person3OutlinedIcon style={{ marginRight: 10, width: 30 }} />
            <h4>Job Management</h4>
            <KeyboardArrowDownOutlinedIcon/>
          </div>
          <div>
            <unl>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
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
            <ArticleOutlinedIcon style={{ marginRight: 10, width: 30 }} />
            <h4>Blogs & article</h4>
            <KeyboardArrowDownOutlinedIcon/>
          </div>
          <div>
            <unl>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
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
            <CelebrationOutlinedIcon style={{ marginRight: 10, width: 30 }} />
            <h4>Advertisement</h4>
            <KeyboardArrowDownOutlinedIcon/>
          </div>
          <div>
            <unl>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
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
            <CelebrationOutlinedIcon style={{ marginRight: 10, width: 30 }} />
            <h4>Miscillenious</h4>
            <KeyboardArrowDownOutlinedIcon/>
          </div>
          <div>
            <unl>
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
