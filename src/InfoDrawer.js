import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function InfoDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >

    </div>
  );

  return (
    <div className="info-drawer">
      <Button variant="outlined" onClick={toggleDrawer('bottom', true)}>Author Info</Button>
      <Drawer anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)}>
        {fullList('bottom')}
      </Drawer>
    </div>
  );
}
