import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { logout } from "../actionTypesAndCreators";
import { Link } from "react-router-dom";

export default function HeaderAppBar() {
  const user = useSelector((state) => state.animals.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    if (user) {
      dispatch(logout());
    } else return;
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary" align="center">
        <Toolbar>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            MY ANIMALS
          </Typography>
          <div>
            <Button
              component={Link}
              to="/auth"
              color="inherit"
              size="large"
              variant="outlined"
              onClick={handleLogout}
            >
              <span>{user ? user?.username : ""}</span> &nbsp;
              {!user ? "Register/Login" : "Logout"}
            </Button>
          </div>
        </Toolbar>
        <div>
          {!user && (
            <Typography variant="h4">
              Please login to see all animals displayed on the screen.
            </Typography>
          )}
        </div>
      </AppBar>
    </Box>
  );
}
