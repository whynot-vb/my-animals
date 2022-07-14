import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";

export default function AlertToDisplay() {
  //alertType
  const alertType = useSelector((state) => state.animals.alertType);
  const alertText = useSelector((state) => state.animals.alertText);
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity={alertType}>{alertText}</Alert>
    </Stack>
  );
}
