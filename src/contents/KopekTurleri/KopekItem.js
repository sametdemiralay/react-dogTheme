import React from "react";
import {
 Grid,
 Card,
 CardActionArea,
 CardActions,
 CardContent,
 CardMedia,
 Button,
 Typography,
} from "@material-ui/core";
import { useStyles } from "./stylesKopekDetay";
import {KopekDetay} from './KopekDetay'

export const KopekItem = ({ kopek }) => {
 const classes = useStyles();

 const [open, setOpen] = React.useState(false);

 const handleOpen = () => {
  setOpen(open ? false : true);
 };

 return (
  <Grid item xs={12} sm={6} md={4}>
   <Card className={classes.cardContainer}>
    <CardActionArea>
     <CardMedia
      component="img"
      height="220"
      image={kopek.foto}
     />
     <CardContent>
      <Typography gutterBottom variant="h5">
       {kopek.isim}
      </Typography>
      <Typography variant="body2" component="p">
       {kopek.onBilgi.replace(/^(.{170}[^\s]*).*/, "$1") + "..."}
      </Typography>
     </CardContent>
    </CardActionArea>
    <CardActions style={{ justifyContent: "center" }}>
     <Button color="primary" variant="outlined" onClick={handleOpen} className={classes.root}>
      Devamını Oku
     </Button>
    </CardActions>
   </Card>

   <KopekDetay classes={classes} kopek={kopek} open={open} handleOpen={handleOpen} />
   
  </Grid>
 );
};
