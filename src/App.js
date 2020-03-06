import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import logo from './Funhaus_circle_logo.svg';
import './App.css';
import YouTubeFrame from './YouTubeFrame';
import InfoDrawer from './InfoDrawer';

import { getRandomDate, getRandomVideoId } from './utils';

function App() {
  const [videoId, setVideoId]=useState(0) //initialize your state here

  function getVideoId() {
    const API_KEY = 'AIzaSyCohx22ge29KSVrGwayOszC21PomdrJ1V8';
    const randomDate = getRandomDate();
    console.log(randomDate);
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCboMX_UNgaPBsUOIgasn3-Q&maxResults=50&order=date&publishedBefore=${randomDate}T00%3A00%3A00Z&type=video&key=${API_KEY}`;
    fetch(url, { 
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      const randomVideoId = getRandomVideoId(data.items);
      setVideoId(randomVideoId);
      console.log(randomVideoId);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  useEffect(() => {
    getVideoId(setVideoId)
  }, []);

  console.log("App videoId:", videoId);

  return (
    <div className="App">
      <header className="App-header">
        <h2>FunhausTV</h2>
        {/* <a
            className="App-link"
            href="https://www.youtube.com/channel/UCboMX_UNgaPBsUOIgasn3-Q/featured"
            target="_blank"
            rel="noopener noreferrer"
        >
          <img src={logo} className="App-logo" alt="logo" />
        </a> */}
        <YouTubeFrame videoId={videoId} getVideoId={getVideoId} />
        <Button
          className="skip-button"
          variant="contained"
          color="default"
          size="large"
          onClick={getVideoId}
          endIcon={<Icon>skip_next</Icon>}
        >
          Skip
        </Button>
        <InfoDrawer />
      </header>
    </div>
  );
}

export default App;
