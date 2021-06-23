import React from 'react';
import {
  Box,
  Button,
  makeStyles,
  TextField,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  search: {
    width: '99px',
    backgroundColor: '#291757',
    borderRadius: '20px',
    marginLeft: '16px',
    marginTop: 12,
    marginBottom: 16
  },
  textField: {
    marginBottom: '16px',
    marginTop: '8px',
    backgroundColor: '#CCD2E3',
    borderRadius: '20px',
    borderBlockColor: 'green',
    borderColor: 'green',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#F2F7FF',
      borderRadius: '20px'
    }
  }
}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    <Box display="flex">
      <Box flexGrow={1}>
        <TextField className={classes.textField} fullWidth variant="outlined" />
      </Box>
      <Button className={classes.search}>
        <Typography style={{ color: '#fff' }}>Search</Typography>
      </Button>
    </Box>
  );
}
