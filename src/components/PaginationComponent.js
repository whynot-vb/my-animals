import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

import { changePage } from "../actionTypesAndCreators";

export default function PaginationComponent() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.animals.page);
  const handleChange = (event, value) => {
    dispatch(changePage(value));
  };
  return (
    <Grid
      container
      style={{
        marginTop: "20px",
        marginBottom: "20px",
      }}
      spacing={1}
      direction="column"
      alignItems="center"
    >
      <Stack spacing={2}>
        <Pagination
          count={6}
          page={page}
          color="secondary"
          size="large"
          onChange={handleChange}
        />
      </Stack>
    </Grid>
  );
}
