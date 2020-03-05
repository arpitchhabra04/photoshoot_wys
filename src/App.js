import React from 'react';
import './App.css';
import TopPart from './components/top_part/top_part';

import BottomPart from './components/bottom_part/bottom_part';
import { Tab, Grid } from '@material-ui/core';
import SimpleTabs from './components/tabs/tabs';
import SideDrawer from './components/side_drawer/side_drawer';
import DateAndTimePickers from './components/datePicker/date-picker';
function App() {
  return (
    <div className="App" style={{ backgroundColor: '#F1F1F1' }}>
      {/* <datePicker></datePicker> */}
      {/* <MaterialUIPickers></MaterialUIPickers> */}
      {/* <DateAndTimePickers></DateAndTimePickers> */}
      <Grid container>
        <Grid item xs={0.5}>
          <SideDrawer></SideDrawer>
        </Grid>

        <Grid item xs={11}>
          <TopPart></TopPart>
          <SimpleTabs></SimpleTabs>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
