import React from "react";
import "./Pages.css";
import { Button, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

const JobDep = () => {
  return (
    <div>
      <Container>
        <section className="job-type-sec">
          <Grid container spacing={2}>
            <Grid item xs={6} md={8} style={{ marginTop: 30 }}>
              <div>
                <h2
                  style={{
                    color: "rgb(7, 177, 7)",
                    float: "left",
                    fontWeight: 500,
                  }}
                >
                  Job Type
                </h2>{" "}
                <br />
                <br />
                <br />
              </div>
              <div className="job-types">
                <div className="job-type" style={{ marginLeft: -97 }}>
                  <h5 style={{ fontWeight: 400 }}>Parmanent</h5>
                  <CloseIcon style={{ width: 30 }} />
                </div>
                <div className="job-type">
                  <h5 style={{ fontWeight: 400 }}>Part Time</h5>
                  <CloseIcon style={{ width: 30 }} />
                </div>
                <div className="job-type">
                  <h5 style={{ fontWeight: 400 }}>Contractual</h5>
                  <CloseIcon style={{ width: 30 }} />
                </div>
                <div className="button">
                  <button
                    style={{
                      backgroundColor: "green",
                      border: "none",
                      color: "white",
                    }}
                  >
                    Add New
                  </button>
                  <AddIcon style={{ color: "white" }} />
                </div>
              </div>
              <div>
                <h2
                  style={{
                    color: "rgb(7, 177, 7)",
                    float: "left",
                    fontWeight: 500,
                    marginLeft: 4,
                  }}
                >
                  Department
                </h2>{" "}
                <br />
                <br />
                <br />
                <div className="dep-types">
                  <div className="dep-type" style={{ marginLeft: -127 }}>
                    <h5 style={{ fontWeight: 400 }}>HR & Admin</h5>
                    <CloseIcon style={{ width: 30 }} />
                  </div>
                  <div className="dep-type">
                    <h5 style={{ fontWeight: 400 }}>Shipment</h5>
                    <CloseIcon style={{ width: 30 }} />
                  </div>
                  <div className="button">
                    <button
                      style={{
                        backgroundColor: "green",
                        border: "none",
                        color: "white",
                      }}
                    >
                      Add New
                    </button>
                    <AddIcon style={{ color: "white" }} />
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={6} md={4}>
              <div className="available">
                <div>
                  <h3 style={{ color: "white", fontSize: 25 }}>33</h3>
                  <p
                    style={{
                      marginTop: "-20px",
                      color: "white",
                      fontWeight: 300,
                    }}
                  >
                    Available
                  </p>
                </div>
                <div>
                  <h3 style={{ color: "white", fontSize: 25 }}>08</h3>
                  <p
                    style={{
                      marginTop: "-20px",
                      color: "white",
                      fontWeight: 300,
                    }}
                  >
                    Pending
                  </p>
                </div>
                <div>
                  <Button
                    variant="contained"
                    color="success"
                    style={{ fontWeight: 400, fontSize: 14, type: "lowercase" }}
                  >
                    Create a job
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </section>
      </Container>
    </div>
  );
};

export default JobDep;
