import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const styles = {
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  };

class BurgerMenu extends React.Component {
  state = {
    top: false
  };
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };
  render() {
    const { classes } = this.props;

    const fullList = (
      <div className={classes.fullList}>
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );
    return (
      <div>
        <Button onClick={this.toggleDrawer("top", true)}>Open Top</Button>
        <Drawer
          anchor="top"
          open={this.state.top}
          onClose={this.toggleDrawer("top", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("top", false)}
            onKeyDown={this.toggleDrawer("top", false)}
          >
            {fullList}
          </div>
        </Drawer>
      </div>
    );
  }
}
export default withStyles(styles)(BurgerMenu);
