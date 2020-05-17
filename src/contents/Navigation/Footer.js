import React from "react";
import {useStyles} from './stylesFooter'
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";

export const Footer = () => {
  const classes = useStyles()
 return (
  <BottomNavigation width="auto" style={{ background: "#537895" }}>
   <BottomNavigationAction className={classes.root} style={{ padding: 0 }} icon={<Facebook />} href="https://www.facebook.com/" target="_blank" />
   <BottomNavigationAction className={classes.root} style={{ padding: 0 }} icon={<Twitter />} href="https://twitter.com/" target="_blank" />
   <BottomNavigationAction className={classes.root} style={{ padding: 0 }} icon={<Instagram />} href="https://www.instagram.com/" target="_blank" />
  </BottomNavigation>
 );
};
