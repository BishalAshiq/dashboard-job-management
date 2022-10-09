import React from "react";
import JobDep from "./JobDep";
import JobTitle from "./JobTitle";

import "./Pages.css";

const Pages = () => {
  return (
    <section>
      <div>
        <JobDep></JobDep>
      </div>
      <div>
        <JobTitle />
      </div>
    </section>
  );
};

export default Pages;
