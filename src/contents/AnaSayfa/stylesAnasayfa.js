import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
 particlesCanva: {
  position: "absolute",
  opacity: "0.4",
 },
 avatar: {
  width: theme.spacing(20),
  height: theme.spacing(20),
  margin: theme.spacing(1),
 },
 title: {
  color: "#09203F",
 },
 subTitle: {
  color: "#09203F",
  marginBottom: "3rem",
 },
 typedContainer: {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: "100vh",
  textAlign: "center",
  zIndex: 1,
 },
}));
