import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import NavigationIcon from "@material-ui/icons/Navigation";
import EuroIcon from "@material-ui/icons/Euro";
import MailIcon from "@material-ui/icons/Mail";
import BookIcon from "@material-ui/icons/Book";
import { PlaceContext } from "../contexts/PlaceContext";
import DrawerDefaultItem from "../components/DrawerDefaultItem";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: drawerWidth
  },
  title: {
    flexGrow: 1
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: 0
  }
}));

const DrawerComponent = React.memo(props => {
  const { place } = React.useContext(PlaceContext);
  const [location, setLocation] = React.useState({
    main: "",
    contact: "",
    quotation: "",
    life: "",
    health: "",
    children: "",
    house: "",
    hospital: "",
    income: "",
    retirement: "",
    accidents: ""
  });
  React.useEffect(() => {
    setLocation({
      [place]: "highlight"
    });
  }, [place]);
  const classes = useStyles();
  const articles = [
    "life",
    "health",
    "children",
    "house",
    "hospital",
    "income",
    "retirement",
    "accidents"
  ];
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="right"
      open={props.shown}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <List>
        <DrawerDefaultItem
          href="/"
          name="Navigation"
          isHighlighted={location.main}
        >
          <NavigationIcon />
        </DrawerDefaultItem>
      </List>
      <Divider />
      <List>
        <DrawerDefaultItem
          href="/contact"
          name="Contact"
          isHighlighted={location.contact}
        >
          <MailIcon />
        </DrawerDefaultItem>
        <DrawerDefaultItem
          href="/quotation"
          name="Quotation"
          isHighlighted={location.quotation}
        >
          <EuroIcon />
        </DrawerDefaultItem>
      </List>
      <Divider />
      <List>
        {[
          "Ubezpieczenie na zycie",
          "Ubezpieczenie od chorob",
          "Ubezpieczenie dzieci",
          "Zabezpieczenie kredytu na dom",
          "Ubezpieczenie pobytu w szpitalu",
          "Ubezpieczenie dochodu",
          "Prywatna emerytura",
          "Ubezpieczenie wypadkowe"
        ].map((text, index) => (
          <DrawerDefaultItem
            href={`/article/${articles[index]}`}
            name={text}
            isHighlighted={location[articles[index]]}
          >
            <BookIcon />
          </DrawerDefaultItem>
        ))}
      </List>
    </Drawer>
  );
});

export default DrawerComponent;
