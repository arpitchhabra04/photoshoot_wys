import React, { Component } from 'react';
import { Divider, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import './top_part.css';
import DateAndTimePickers from '../datePicker/date-picker';
class TopPart extends Component {
  state = {};
  render() {
    return (
      <div>
        <Grid container alignItems="flex-start" justify="flex-start">
          <Grid item xs={8} className="topHead">
            <div>Photoshoot</div>
            <div className="headLabel">Home > Photoshoot</div>
          </Grid>
          <Grid item xs={4}>
            <div>
              <img
                src="img/notifications-button@2x.png"
                className="notification"
              ></img>
              <img
                src="img/notifications-button@2x.png"
                className="notification"
              ></img>
              <span className="user_name">Arpit</span>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} className="divider">
            <Divider></Divider>
          </Grid>

          <Grid item xs={9}>
            <DateAndTimePickers></DateAndTimePickers>
          </Grid>
          <Grid item xs={3} className="addButton">
            <div className="photoshootAdd">
              <span className="addSign">+</span> Add Photoshoot
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default TopPart;
