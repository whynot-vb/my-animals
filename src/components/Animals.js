import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Animals = () => {
  const animals = useSelector((state) => state.animals.animals);
  return (
    <Grid container alignItems="stretch" spacing={2} sx={{ marginTop: "20px" }}>
      {animals?.map((animal) => (
        <Grid item key={animal._id} xs={6} sm={3}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderRadius: "12px",
              height: "100%",
              position: "relative",
            }}
          >
            {/* <CardMedia
              sx={{
                height: 0,
                paddingTop: "60%",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
              }}
              image={
                animal.origin ||
                "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
              }
              title={animal?.name}
            /> */}

            <Typography
              sx={{ padding: "0 16px" }}
              gutterBottom
              variant="h4"
              component="h4"
            >
              {animal?.type}
            </Typography>
            <Typography
              sx={{ padding: "0 16px" }}
              gutterBottom
              variant="h6"
              component="h6"
            >
              Origin: {animal?.origin}
            </Typography>
            <Typography
              sx={{ padding: "0 16px" }}
              gutterBottom
              variant="h6"
              component="h6"
            >
              Expected to live: {animal?.averageLifeExpectancy} years
            </Typography>
            <Typography
              sx={{ padding: "0 16px" }}
              gutterBottom
              variant="h6"
              component="h6"
            >
              Gender: {animal?.gender}
            </Typography>
            {animal?.type === "Dog" && (
              <>
                <Typography
                  sx={{ padding: "0 16px" }}
                  gutterBottom
                  variant="h6"
                  component="h6"
                >
                  Breed: {animal?.breed}
                </Typography>
                <Typography
                  sx={{ padding: "0 16px" }}
                  gutterBottom
                  variant="h6"
                  component="h6"
                >
                  Energy Level: {animal?.energyLevel}
                </Typography>
              </>
            )}
            {animal?.type === "Horse" && (
              <>
                <Typography
                  sx={{ padding: "0 16px" }}
                  gutterBottom
                  variant="h6"
                  component="h6"
                >
                  Breed: {animal?.breed}
                </Typography>
                <Typography
                  sx={{ padding: "0 16px" }}
                  gutterBottom
                  variant="h6"
                  component="h6"
                >
                  Energy Level: {animal?.energyLevel}
                </Typography>
              </>
            )}
            {animal?.type === "Bird" && (
              <>
                <Typography
                  sx={{ padding: "0 16px" }}
                  gutterBottom
                  variant="h6"
                  component="h6"
                >
                  Breed: {animal?.breed}
                </Typography>
                <Typography
                  sx={{ padding: "0 16px" }}
                  gutterBottom
                  variant="h6"
                  component="h6"
                >
                  Energy Level: {animal?.energyLevel}
                </Typography>
              </>
            )}

            <CardActions
              sx={{
                padding: "0 16px 8px 16px",
                display: "flex",
                justifyContent: "space-between",
              }}
            ></CardActions>
          </Card>
        </Grid>
      ))}
      ;
    </Grid>
  );
};

export default Animals;
