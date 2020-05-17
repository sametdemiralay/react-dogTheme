import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  root:{
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 200
    },
    "& .MuiSvgIcon-root": {
      fill: "#09203F",
      "&:hover": {
        fill: "#FFF",
        fontSize: "1.8rem"
      }
    }
  }
})