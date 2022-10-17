import React from "react";
import usePagination from "@mui/material/usePagination";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  border: "none",
});

const Paginat = () => {
  const { items } = usePagination({
    count: 66,
  });

  return (
    <div>
      <nav>
        <List>
          {items.map(({ page, type, selected, ...item }, index) => {
            let children = null;

            if (type === "start-ellipsis" || type === "end-ellipsis") {
              children = "…";
            } else if (type === "page") {
              children = (
                <Button
                  color="success"
                  style={{
                    fontWeight: selected ? "bold" : undefined,
                    border: "none",
                    cursor: "pointer",
                  }}
                  {...item}
                >
                  {page}
                </Button>
              );
            } else {
              children = (
                <Button
                  variant="outlined"
                  color="success"
                  style={{
                    backgroundColor: "white",
                    border: "1px solid rgb(124, 124, 124)",
                    margin: "0px 170px",
                    color: "gray",
                    borderRadius: 5,
                    cursor: "pointer",
                  }}
                  type="button"
                  {...item}
                >
                  <WestIcon />
                  {type}
                  <EastIcon />
                </Button>
              );
            }

            return <li key={index}>{children}</li>;
          })}
        </List>
      </nav>
    </div>
  );
};

export default Paginat;
