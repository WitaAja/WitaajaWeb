import React, {Component,useState,useEffect} from 'react'
import {DropzoneArea} from 'material-ui-dropzone'
import { makeStyles } from '@material-ui/core/styles';
import { Container,MenuItem,TextField,Grid,Paper } from '@material-ui/core';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    flexGrow:1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));


export default function DropzoneAreaExample(){
  const classes = useStyles();
  const [files,setFiles] = useState([]);
  const [prov, setProv] = React.useState('EUR');
  const [kota, setKota] = React.useState('EUR');

  const handleChange = ()=>{
    setFiles(files)
  }

  const handleChangeProv = (event) => {
    setProv(event.target.value);
  };

  const handleChangeKota = (event) => {
    setKota(event.target.value);
  };

  return(
    <div className={classes.root} >
        <h1>Upload</h1>
        <div>
        <DropzoneArea
        filesLimit={7}    
        dropzoneText={"Select Your Image"}
        onChange={handleChange}
        />
        </div>       
        
          
      <h1>Select Provinsi</h1>
      <Grid container >
      <Grid item xs={6}>
          <Paper className={classes.paper}>
            <TextField
            id="filled-select-prov"
            select
            label="Select"
            value={prov}
            onChange={handleChangeProv}
            helperText="Provinsi"
            variant="filled"
            >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
            </TextField>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
              <TextField
              id="filled-select-kota"
              select
              label="Select"
              value={kota}
              onChange={handleChangeKota}
              helperText="Kab/kota"
              variant="filled"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
          </Paper>
        </Grid>        
      </Grid>   
      </div>
  )
}