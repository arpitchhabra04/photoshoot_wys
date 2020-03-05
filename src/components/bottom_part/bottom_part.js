import React, { Component } from 'react';
import './bottom_part.css';
import { Divider, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import IconButton from '@material-ui/core/IconButton';
import ViewStreamOutlinedIcon from '@material-ui/icons/ViewStreamOutlined';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
class BottomPart extends Component {
  state = {};
  render() {
    return (
      <div style={{ backgroundColor: '#F1F1F1' }} className="bottom">
        <Grid container>
          <Grid item xs={4}>
            <div className="searchButton">
              <Button startIcon={<SearchIcon></SearchIcon>}>
                Search by name,product...
              </Button>
            </div>
          </Grid>
          <Grid item xs={8}>
            <div className="twoButtons">
              <IconButton aria-label="list" className="sideButton">
                <ViewStreamOutlinedIcon fontSize="large" />
              </IconButton>
              {/* <IconButton aria-label="menu" className="sideButton">
                <MenuOutlinedIcon fontSize="large" />
              </IconButton> */}
            </div>
          </Grid>
        </Grid>
        <div className="bottom_main container">
          <Grid container spacing={3}>
            <Grid item xs={4} className="hotelName">
              Fab Hotel Prime Ivory Pearl II{' '}
              <span style={{ fontWeight: '100', backgroundColor: '#e4ede6' }}>
                ID 1753
              </span>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={2}>
              <div className="infoLabel">PHOTOSHOOT</div>
            </Grid>
          </Grid>
          <Grid container className="hotelInfo">
            <Grid item xs={2} className="infoItem">
              <b>5,500</b> <div className="infoLabel">Billing Amount</div>{' '}
            </Grid>
            <Grid item xs={2}>
              <b>Product Photoshoot</b>{' '}
              <div className="infoLabel">Category</div>{' '}
            </Grid>
            <Grid item xs={2}>
              <b>02/01/2020, 12:30 PM </b>{' '}
              <div className="infoLabel">Shoot Date & Time</div>{' '}
            </Grid>
            <Grid item xs={1}>
              <b>Kolkata</b> <div className="infoLabel">Location</div>{' '}
            </Grid>
            <Grid item xs={1}>
              <div className="status">Confirmed</div>{' '}
              <div className="infoLabel">Status</div>{' '}
            </Grid>
            <Grid item xs={2}>
              <b>--</b> <div className="infoLabel"> Approval Status</div>{' '}
            </Grid>
            <Grid item xs={1}>
              <b>6</b> /10 <div className="infoLabel">Rating</div>{' '}
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={11}>
              <Divider></Divider>
            </Grid>
            <Grid item xs={11}>
              <div className="view_more">
                View More <span className="arrow">></span>
              </div>
            </Grid>
          </Grid>
        </div>
        {/* // 2nd hotel */}
        <div className="bottom_main container">
          <Grid container spacing={3}>
            <Grid item xs={4} className="hotelName">
              Fab Hotel Prime Ivory Pearl II{' '}
              <span style={{ fontWeight: '100', backgroundColor: '#e4ede6' }}>
                ID 1753
              </span>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={2}>
              <div className="infoLabel">PHOTOSHOOT</div>
            </Grid>
          </Grid>
          <Grid container className="hotelInfo">
            <Grid item xs={2} className="infoItem">
              <b>5,500</b> <div className="infoLabel">Billing Amount</div>{' '}
            </Grid>
            <Grid item xs={2}>
              <b>Product Photoshoot</b>{' '}
              <div className="infoLabel">Category</div>{' '}
            </Grid>
            <Grid item xs={2}>
              <b>02/01/2020, 12:30 PM </b>{' '}
              <div className="infoLabel">Shoot Date & Time</div>{' '}
            </Grid>
            <Grid item xs={1}>
              <b>Kolkata</b> <div className="infoLabel">Location</div>{' '}
            </Grid>
            <Grid item xs={1}>
              <div className="status">Confirmed</div>{' '}
              <div className="infoLabel">Status</div>{' '}
            </Grid>
            <Grid item xs={2}>
              <b>--</b> <div className="infoLabel"> Approval Status</div>{' '}
            </Grid>
            <Grid item xs={1}>
              <b>6</b> /10 <div className="infoLabel">Rating</div>{' '}
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={11}>
              <Divider></Divider>
            </Grid>
            <Grid item xs={11}>
              <div className="view_more">
                View More <span className="arrow">></span>
              </div>
            </Grid>
          </Grid>
        </div>
        {/* //3rd hotel */}
        <div className="bottom_main container">
          <Grid container spacing={3}>
            <Grid item xs={4} className="hotelName">
              Fab Hotel Prime Ivory Pearl II{' '}
              <span style={{ fontWeight: '100', backgroundColor: '#e4ede6' }}>
                ID 1753
              </span>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={2}>
              <div className="infoLabel">PHOTOSHOOT</div>
            </Grid>
          </Grid>
          <Grid container className="hotelInfo">
            <Grid item xs={2} className="infoItem">
              <b>5,500</b> <div className="infoLabel">Billing Amount</div>{' '}
            </Grid>
            <Grid item xs={2}>
              <b>Product Photoshoot</b>{' '}
              <div className="infoLabel">Category</div>{' '}
            </Grid>
            <Grid item xs={2}>
              <b>02/01/2020, 12:30 PM </b>{' '}
              <div className="infoLabel">Shoot Date & Time</div>{' '}
            </Grid>
            <Grid item xs={1}>
              <b>Kolkata</b> <div className="infoLabel">Location</div>{' '}
            </Grid>
            <Grid item xs={1}>
              <div className="status">Confirmed</div>{' '}
              <div className="infoLabel">Status</div>{' '}
            </Grid>
            <Grid item xs={2}>
              <b>--</b> <div className="infoLabel"> Approval Status</div>{' '}
            </Grid>
            <Grid item xs={1}>
              <b>6</b> /10 <div className="infoLabel">Rating</div>{' '}
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={11}>
              <Divider></Divider>
            </Grid>
            <Grid item xs={11}>
              <div className="view_more">
                View More <span className="arrow">></span>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default BottomPart;
