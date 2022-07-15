import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { FaHome } from "react-icons/fa";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

import errorImage from "../images/error-404.webp";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Paper sx={{ width: "98%" }}>
      <Button size="large" component={Link} to="/">
        <FaHome /> Go Back &nbsp; <BsFillArrowLeftSquareFill />
      </Button>
      <img src={errorImage} alt="error" />
    </Paper>
  );
};

export default Error;
