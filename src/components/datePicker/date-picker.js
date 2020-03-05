import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './date-picker.css';
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingLeft: '70px',
    paddingBottom: '30px'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

export default function DateAndTimePickers() {
  const classes = useStyles();

  return (
    <form
      className={classes.container}
      noValidate
      // style={{ backgroundColor: 'white' }}
      // className="datePick"
    >
      <TextField
        id="datetime-local"
        label="From Date"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
      />
      <span className="month">
        <div>01</div>
        <div>Month</div>
      </span>
      <TextField
        id="datetime-local"
        label="To Date"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
      />
    </form>
  );
}
