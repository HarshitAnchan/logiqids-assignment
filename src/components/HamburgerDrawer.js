import React from "react";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import categories from "../data/category";

// Styles using MUI's `sx` prop
const drawerListStyles = {
  width: 200,
  paddingLeft: 10,
  paddingRight: 5,
};

const SwipeableTemporaryDrawer = ({ setCategory }) => {
  const [state, setState] = React.useState({ left: false });

  // Dark mode theme configuration
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  // Toggle drawer open/close
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  // Drawer content
  const list = (anchor) => (
    <div
      style={drawerListStyles}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <ListItemText primary="Categories" />
        </ListItem>
      </List>
      <Divider />
      <List>
        {categories.map((text) => (
          <ListItem
            button
            key={text}
            onClick={() => setCategory(text)}
            sx={{ height: 40, borderRadius: 2 }}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <Button onClick={toggleDrawer("left", true)} sx={{ minWidth: 0 }}>
        <MenuIcon />
      </Button>
      <SwipeableDrawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {list("left")}
      </SwipeableDrawer>
    </ThemeProvider>
  );
};

export default SwipeableTemporaryDrawer;
