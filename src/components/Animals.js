import React from "react";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { GiHummingbird } from "react-icons/gi";
import { BsGenderAmbiguous } from "react-icons/bs";
import { GiLibertyWing } from "react-icons/gi";
import { GiSittingDog } from "react-icons/gi";
import { GiEnergyArrow } from "react-icons/gi";
import { BsSpeedometer2 } from "react-icons/bs";
import { GiLifeBar } from "react-icons/gi";
import { GoGlobe } from "react-icons/go";
import { IoMdColorPalette } from "react-icons/io";

import dog from "../images/dog.jpg";
import horse from "../images/horse.png";
import bird from "../images/bird.png";

const Animals = () => {
  const animals = useSelector((state) => state.animals.animals);
  return (
    <Grid container alignItems="stretch" spacing={2} sx={{ marginTop: "20px" }}>
      {animals?.map((animal) => (
        <Grid
          item
          key={`${animal?.type}${animal?.origin}${animal?.averageLifeExpectancy}${animal?.gender}${animal?.energyLevel}${animal?.breed}${animal?.maxSpeed}${animal?.wingSpan}`}
          xs={6}
          sm={3}
        >
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
            {animal?.type === "Dog" && (
              <CardMedia
                sx={{
                  height: 0,
                  paddingTop: "60%",
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                }}
                image={dog}
                title={animal?.type}
              />
            )}
            {animal?.type === "Horse" && (
              <CardMedia
                sx={{
                  height: 0,
                  paddingTop: "60%",
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                }}
                image={horse}
                title={animal?.type}
              />
            )}
            {animal?.type === "Bird" && (
              <CardMedia
                sx={{
                  height: 0,
                  paddingTop: "60%",
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                }}
                image={bird}
                title={animal?.type}
              />
            )}

            <Typography
              sx={{ padding: "0 16px" }}
              gutterBottom
              variant="h5"
              component="h5"
            >
              {animal?.type}
            </Typography>
            <Typography
              sx={{ padding: "0 16px" }}
              gutterBottom
              variant="h6"
              component="h6"
            >
              <GoGlobe /> Origin: {animal?.origin}
            </Typography>
            <Typography
              sx={{ padding: "0 16px" }}
              gutterBottom
              variant="h6"
              component="h6"
            >
              <GiLifeBar /> Expected to live: {animal?.averageLifeExpectancy}{" "}
              years
            </Typography>
            <Typography
              sx={{ padding: "0 16px" }}
              gutterBottom
              variant="h6"
              component="h6"
            >
              <BsGenderAmbiguous /> Gender: {animal?.gender}
            </Typography>
            {animal?.type === "Dog" && (
              <>
                <Typography
                  sx={{ padding: "0 16px" }}
                  gutterBottom
                  variant="h6"
                  component="h6"
                >
                  <GiSittingDog /> Breed: {animal?.breed}
                </Typography>
                <Typography
                  sx={{ padding: "0 16px" }}
                  gutterBottom
                  variant="h6"
                  component="h6"
                >
                  <GiEnergyArrow /> Energy Level: {animal?.energyLevel}
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
                  <BsSpeedometer2 /> Maximum speed: {animal?.maxSpeed} km/h
                </Typography>
                <Typography
                  sx={{ padding: "0 16px" }}
                  gutterBottom
                  variant="h6"
                  component="h6"
                >
                  <IoMdColorPalette /> Color: {animal?.color}
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
                  <GiHummingbird /> Flying:{" "}
                  {animal?.flying === true ? "Yes" : "No"}
                </Typography>
                <Typography
                  sx={{ padding: "0 16px" }}
                  gutterBottom
                  variant="h6"
                  component="h6"
                >
                  <GiLibertyWing /> Wing span: {animal?.wingSpan} cm
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
