import React from "react";
import { Box, Grid } from "@material-ui/core";

import { useStyles } from "./stylesKopekDetay";

import { KopekItem } from "./KopekItem"

import { data } from "../../database/db";

export const KopekList = () => {
 const classes = useStyles();
 return (
  <Box component="div" className={classes.mainContainer}>
   <Grid container justify="center">
    {data.map((item) => (
     <KopekItem key={item.id} kopek={item} />
    ))}
   </Grid>
  </Box>
 );
};
