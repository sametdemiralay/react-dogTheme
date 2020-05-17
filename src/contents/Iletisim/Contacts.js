import React from "react";
import {useStyles, InputField} from './stylesContacts'
import { Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

export const Contacts = () => {
 const classes = useStyles();
 return (
  <Box component="div" className={classes.container}>
   <Grid container justify="center" alignItems="center">
    <Box component="form" className={classes.form}>
     <Typography
      style={{
       color: "tomato",
       textAlign: "center",
       textTransform: "uppercase",
      }}
      variant="h4"
     >
      İLETİŞİM
     </Typography>
     <InputField
      fullWidth={true}
      label="İsim"
      variant="outlined"
      inputProps={{ style: { color: "#FFF" } }}
      margin="dense"
      size="medium"
     />
     <br />
     <InputField
      fullWidth={true}
      label="Email"
      variant="outlined"
      inputProps={{ style: { color: "#FFF" } }}
      margin="dense"
      size="medium"
     />
     <br />
     <InputField
      fullWidth={true}
      label="Mesaj"
      variant="outlined"
      inputProps={{ style: { color: "#FFF" } }}
      margin="dense"
      multiline
      rows={4}
      size="medium"
     />
     <br />
     <Button
      className={classes.button}
      variant="outlined"
      fullWidth={true}
      endIcon={<SendIcon />}
     >
      Gönder
     </Button>
    </Box>
   </Grid>
  </Box>
 );
};
