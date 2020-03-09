import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import logo from './Funhaus_circle_logo.svg';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    paddingTop: '24px',
    paddingBottom: '24px',
    width: 'auto',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#282c34',
  },
});

export default function AuthorInfoDrawer() {
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
      <Paper className="info-paper">
        <div className="info-content">
          <h4>A little bit about me:</h4>
          <p>My name is Seth Rauch and I'm a professional web developer living in Colorado. I've been a Funhaus fan for almost 3 years now.
            I first found their content on Reddit and became an instant fan and now I'm a RoosterTeeth First member and watch their content daily.
            This is me trying to give back to Funhaus and this fanbase/community since you all are so great.</p>
          <p>Contact: rauchseth@gmail.com</p>

          <h4>WHY?</h4>
          <p>I always loved watching FunhausTV on YouTube to catch random videos I'd probably never find on my own(They seriously have <b>~2700</b> videos on YouTube!).
            I've been sad to see the issues arise with the FunhausTV stream so I've decided to take it upon myself to create somthing similar - minus InsideGaming.
            I was suprised to find you can't just shuffle a YouTube channel so I decided to create this website which essentially replaces FunhausTV for me.
            I cast a tab to my Chromecast and let it run through random video after random video. See "How this do things?" button for implementation information and about any future plans for this site.</p>

          <h4>Disclaimers:</h4>
          <p>I am in no way affliated with Funhaus or RoosterTeeth. I do not gain any monetary value or profit from this website.
             I am just a huge fan and I will take this site down if anyone from Funhaus or RoosterTeeth asks me to.</p>
        </div>
        <a
            className="App-link"
            href="https://www.youtube.com/channel/UCboMX_UNgaPBsUOIgasn3-Q/featured"
            target="_blank"
            rel="noopener noreferrer"
        >
          <img src={logo} className="App-logo" alt="logo" />
        </a>
      </Paper>
    </div>
  );

  return (
    <div className="info-drawer">
      <Button variant="outlined" size="large" onClick={toggleDrawer('bottom', true)}>Who made this?</Button>
      <Drawer className="info-open" anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)}>
        {fullList('bottom')}
      </Drawer>
    </div>
  );
}
