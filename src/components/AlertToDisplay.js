import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

export default function AlertToDisplay() {
  //alertType
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity={true}>
        <AlertTitle>{true}</AlertTitle>
        {true}
      </Alert>
    </Stack>
  );
}
