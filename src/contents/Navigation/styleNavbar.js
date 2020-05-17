import { makeStyles } from "@material-ui/core/styles";

//CSS STYLES
export const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
   width: 250,
   background: "#09203F",
   height: "100%",
  },
  avatar: {
   display: "block",
   margin: "0.5rem auto",
   width: theme.spacing(20),
   height: theme.spacing(20),
  },
  listItem: {
   color: "#537895",
  },
 }));