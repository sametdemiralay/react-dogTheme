import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
 container: { 
  background: 'linear-gradient(to bottom, #537895, #09203F)',
   height: "100vh" 
  },
 form: {
  marginTop: "10rem",
 },
 button: {
  marginTop: "1rem",
  color: "tomato",
  borderColor: "tomato",
 },
}));

export const InputField = withStyles({
 root: {
  "& label.Mui-focused": {
   color: "tomato",
  },
  "& label": {
   color: "#FFF",
  },
  "& .MuiOutlinedInput-root": {
   "& fieldset": {
    borderColor: "#FFF",
   },
   "&:hover fieldset": {
    borderColor: "#FFF",
   },
   "&.Mui-focused fieldset": {
    borderColor: "#ce3",
   },
  },
 },
})(TextField);
