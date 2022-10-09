import React from "react";
import usePagination from "@mui/material/usePagination";
import { styled } from "@mui/material/styles";

const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  border: "none",
});

const Paginat = () => {
  const { items } = usePagination({
    count: 10,
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
                <button
                  type="button"
                  style={{
                    fontWeight: selected ? "bold" : undefined,
                    border: "none",
                    margin: "0px 10px",
                  }}
                  {...item}
                >
                  {page}
                </button>
              );
            } else {
              children = (
                <button
                  style={{
                    backgroundColor: "white",
                    border: "1px solid rgb(124, 124, 124)",
                    padding: "10px 20px",
                    margin: "0px 170px",
                    color: "gray",
                    borderRadius: 5,
                  }}
                  type="button"
                  {...item}
                >
                  {type}
                </button>
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
