import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../../images/avatarAnasayfa.png";

export const Header = ({classes}) => {
 return (
  <Box className={classes.typedContainer}>
   <Grid container justify="center">
    <Avatar className={classes.avatar} src={avatar} alt="samet" />
   </Grid>
   <Typography className={classes.title} variant="h2">
    <Typed strings={["Samet Demiralay"]} typeSpeed={40} />
   </Typography>
   <br />
   <Typography className={classes.subTitle} variant="h4">
    <Typed
     strings={["Web Design", "Web Development", "MERN Stack"]}
     typeSpeed={40}
     backSpeed={60}
     loop
    />
   </Typography>
  </Box>
 );
};
