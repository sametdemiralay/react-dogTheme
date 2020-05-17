import React from "react";
import { Header } from "./Header";
import Particles from "react-particles-js";
import {useStyles} from './stylesAnasayfa'

export const Home = () => {
 const classes = useStyles();
 return (
  <>
   <Header classes={classes} />
   <Particles
    canvasClassName={classes.particlesCanva}
    params={{
     particles: {
      number: { value: 45, density: { enable: true, value_area: 900 } },
      shape: {
       type: "star", //circle
       stroke: {
        width: 1,
        color: "#FFF",
       },
      },
      size: {
       value: 8,
       random: true,
       anim: {
        enable: true,
        speed: 3,
        size_min: 0.1,
        sync: true,
       },
      },
      Opacity: {
       value: 1,
       random: true,
       anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: true,
       },
      },
     },
    }}
   />
  </>
 );
};
