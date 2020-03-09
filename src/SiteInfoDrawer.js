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

export default function SiteInfoDrawer() {
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
          <h3>How this do things?</h3>
          <p>This site was built in ReactJS using the boilerplate <a href="https://github.com/facebook/create-react-app">
              create-react-app</a> repo and hosted on Github pages. I initally was going to use the <a href="https://developers.google.com/youtube/v3">YouTube Data API</a> to randomly grab a Funhaus videoId but YouTube limits the amount
              of calls you can make per day so I nixed that plan. I decided to use the same YouTubeAPI to scrape all of
              the Funhaus videoIds (There are currently <b>~2700</b> videos on their YouTube channel) and store them in a <a href="https://firebase.google.com/">Firebase database</a>.</p>
              <p>This app randomly grabs a videoId from said database each time this site loads and each time a video ends. I plan to update this database as they add more content to their YouTube channel - maybe biweekly.
              I plan to keep this site up to date as long as FunhausTV does not exist on YouTube. I have ideas/plans to eventually move this logic all to the server side so there is one stream so 
              people can comment and watch the same stream in real-time - This is all TBD.</p>
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
      <Button variant="outlined" size="large" onClick={toggleDrawer('bottom', true)}>How this do things?</Button>
      <Drawer className="info-open" anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)}>
        {fullList('bottom')}
      </Drawer>
    </div>
  );
}
