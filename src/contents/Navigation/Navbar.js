import React, { useState } from "react";
import {Link} from 'react-router-dom'
import {useStyles} from './styleNavbar'
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import {
 AppBar,
 Toolbar,
 ListItem,
 IconButton,
 ListItemText,
 Avatar,
 Divider,
 List,
 Typography,
 Box,
 ListItemIcon,
} from "@material-ui/core";
import {
 Pets,
 Home,
 Menu,
 ContactMail,
} from "@material-ui/icons";
import avatar from "../../images/avatarNav.png";
import { Footer } from "./Footer";


const menuItems = [
 {
  listIcon: <Home />,
  listText: "Anasayfa",
  listPath: "/"
 },
 {
  listIcon: <Pets />,
  listText: "Köpek Türleri",
  listPath: "/kopekList"
 },
 {
  listIcon: <ContactMail />,
  listText: "İletişim",
  listPath: "/iletisim"
 },
];

export const Navbar = () => {
 const classes = useStyles();
 const [state, setstate] = useState({
  right: false,
 });

 const toggleSlider = (slider, open) => () => {
  setstate({ ...state, [slider]: open });
 };

 const sideList = (slider) => (
  <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider(slider, false)}>
   <Avatar className={classes.avatar} src={avatar} />
   <Divider />
   <List>
    {menuItems.map((lsItem, key) => (
     <ListItem button key={key} component={Link} to={lsItem.listPath}>
      <ListItemIcon className={classes.listItem}>
       {lsItem.listIcon}
      </ListItemIcon>
      <ListItemText className={classes.listItem} primary={lsItem.listText} />
     </ListItem>
    ))}
   </List>
  </Box>
 );
 return (
  <>
   <Box component="nav">
    <AppBar position="fixed" style={{ background: "#09203F" }}>
     <Toolbar>
      <IconButton onClick={toggleSlider("right", true)}>
       <Menu style={{ color: "#537895" }} />
      </IconButton>
      <Typography variant="h5" style={{ color: "#537895" }}>
       Kişisel Deneme
      </Typography>
      <MobilRightMenuSlider
       anchor="left"
       open={state.right}
       onClose={toggleSlider("right", false)}
      >
       {sideList("right")}
       <Footer/>
      </MobilRightMenuSlider>
     </Toolbar>
    </AppBar>
   </Box>
  </>
 );
};
