import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { A } from "hookrouter";

const DrawerDefaultItem = props => {
  return (
    <A href={props.href}>
      <ListItem button key={props.name} className={props.isHighlighted}>
        <ListItemIcon>{props.children}</ListItemIcon>
        <ListItemText primary={props.name} />
      </ListItem>
    </A>
  );
};

export default DrawerDefaultItem;
