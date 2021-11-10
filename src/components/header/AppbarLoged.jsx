import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Logo from '../../assests/img/LogoOt.svg';

/*Import styles sheet*/
import '../../assests/styles/appBarResponsive.scss';

/**Import icons */
import { AiFillHome } from 'react-icons/ai';
import MenuIcon from "@material-ui/icons/Menu";
import { FaUser } from 'react-icons/fa';
import { AiFillUnlock } from 'react-icons/ai';

/**Import MUI components */
import {
  AppBar,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  IconButton,
  Drawer
} from "@material-ui/core";

import { useHistory } from "react-router";
import { Nav } from "react-bootstrap";


/**Mui make styles theme */
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
/*   navbarBrand: {
    flexGrow: 0,
    cursor: "pointer"
  }, */
  menuIcon: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  menuItems: {
    "& > *": {
      margin: theme.spacing(1)
    },
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  drawerpaper: {
    width: "270px",
    backgroundColor: "#797ba3",
    color: "white"
  }
}));

export default function AppbarLoged() {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };
  const menuItems = [
    {
      name: "Home",
      icon: <AiFillHome />,
      path: "/"
    },
    {
      name: "Ofertas",
      icon: <FaUser />,
      path: "/"
    },
    {
      name: "Ofertas",
      icon: <AiFillUnlock/>,
      path: "/"
    },
  ];

  /**Function to generate diferent menuItems list for desktop view */
  const deskMenuItems = menuItems.filter(item => item.name !== "Home")

  return (
    <div className={classes.root}>
      <AppBar elevation={0}>
        <Toolbar>
          <div className="navBrand">
            <Nav.Link as={Link} to={"/home"} className="p-0">
              <img src={Logo} alt="Logo Open Talent" />
              <h1 className="text-logo">Opent <br /> Talent </h1>
            </Nav.Link>
          </div> 
          <div className={classes.menuItems}>
            {deskMenuItems.map((item, index) => (
              <Button
                variant={item.name === "Acceder" ? "contained" : "outlined"}
                color="inherit"
                onClick={() => history.push(item.path)}
                key={index}
              >
                {item.name}
              </Button>
            ))}
          </div>
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawer}
            className={classes.menuIcon}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        anchor="right"
        classes={{ paper: classes.drawerpaper }}
      >
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              key={index}
              button
              onClick={() => history.push(item.path)}
            >
              <ListItemIcon onClick={handleDrawer}>{item.icon}</ListItemIcon>
              <ListItemText onClick={handleDrawer} primary={item.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
