import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import './side_drawer.css';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Grid } from '@material-ui/core';
class SideDrawer extends Component {
  state = {};
  render() {
    return (
      <div variant="permanent" anchor="left" className="side-drawer">
        <Grid conatianer>
          <Grid item xs={12}>
            <img src="img/Proimg.jfif" className="proIcon"></img>
          </Grid>
          <Grid item xs={12}>
            <img src="img/dashboard.png" className="dashboardIcon"></img>
          </Grid>
          <Grid item xs={12}>
            <img src="img/camera.png" className="cameraIcon"></img>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SideDrawer;
