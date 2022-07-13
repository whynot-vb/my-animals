import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// import { logout } from "../actionCreators/auth";
// import { Link } from "react-router-dom";

export default function HeaderAppBar() {
  //   const user = useSelector((state) => state.users.user);

  //   const dispatch = useDispatch();
  const handleLogout = () => {
    //if user
    if (1 > 0) {
      //   dispatch(logout());
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
              to="/auth"
              color="inherit"
              size="large"
              variant="outlined"
              onClick={handleLogout}
            >
              {/* <span>{user ? user.userName : ""}</span> &nbsp; */}
              {true ? "Register/Login" : "Logout"}
            </Button>
          </div>
        </Toolbar>
        <div>
          {true && (
            <Typography variant="h5">
              Please login to see all animals displayed on the screen
            </Typography>
          )}
        </div>
      </AppBar>
    </Box>
  );
}
