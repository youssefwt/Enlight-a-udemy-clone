import React from "react";
import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { WhatYouWillLearn } from "./AboutCourse.styled";
import Grid from "@mui/material/Grid";

const AboutCourse = () => {
  return (
    <Container>
      <WhatYouWillLearn>
        <h2>What you'll learn</h2>

        <Grid container spacing={4}>
          <Grid item xs={6}>
            <List dense={true}>
              <ListItem alignItems="flex-start" sx={{ padding: 0 }}>
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  <CheckIcon />
                </ListItemIcon>
                <ListItemText primary="Work with one of the most in-demand web development programming languages" />
              </ListItem>
              <ListItem alignItems="flex-start" sx={{ padding: 0 }}>
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  <CheckIcon />
                </ListItemIcon>
                <ListItemText primary="Build modern, fast and scalable server-side web applications with NodeJS, databases like SQL or MongoDB and more" />
              </ListItem>
              <ListItem alignItems="flex-start" sx={{ padding: 0 }}>
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  <CheckIcon />
                </ListItemIcon>
                <ListItemText primary="Get a thorough introduction to DenoJS" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={6}>
            <List dense={true}>
              <ListItem alignItems="flex-start" sx={{ padding: 0 }}>
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  <CheckIcon />
                </ListItemIcon>
                <ListItemText primary="Build modern, fast and scalable server-side web applications with NodeJS, databases like SQL or MongoDB and more" />
              </ListItem>
              <ListItem alignItems="flex-start" sx={{ padding: 0 }}>
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  <CheckIcon />
                </ListItemIcon>
                <ListItemText primary="Get a thorough introduction to DenoJS" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </WhatYouWillLearn>
    </Container>
  );
};

export default AboutCourse;
