import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme=>({
 mainContainer: {
  background: 'linear-gradient(to bottom, #537895, #09203F)',
  height: "100%",
  paddingTop: "5rem"
 },
 cardContainer: {
  maxWidth: 300,
  height: 450,
  margin: "3rem auto",
  background: "#09203F",
  color: "#FFF",
  borderRadius: 10,
  boxShadow: "1px 1px 3px 1px #FFF",
 },
 root: {
  borderWidth: 1,
  borderRadius: 3,
  height: 30,
  padding: "0 20px",
  background: "#FFF"
 },
 paper: {
   position: "absolute",
  maxWidth: 600,
  backgroundColor: "#FFF",
  border: '5px solid #537895',
  padding: "1rem",
},
paperTitle:{
  color: "#09203F",
  fontWeight: "bold"
},
modal: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},
}));
