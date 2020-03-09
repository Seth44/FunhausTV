import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function DisclaimerBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} onClose={handleClose}>
        <Alert className="disclaimer-bar" onClose={handleClose} severity="info">
          <h4>Disclaimer:</h4>
          <p>I am in no way affliated with Funhaus or RoosterTeeth. I do not gain any monetary value or profit from this website.
             I am just a huge fan trying to help out the Funhaus community. I will take this site down if anyone affliated with
             Funhaus or RoosterTeeth asks me to take it down.</p>
        </Alert>
      </Snackbar>
    </div>
  );
}
