import React, { useState, useEffect } from 'react';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";
import "firebase/database";

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import logo from './Funhaus_circle_logo.svg';
import './App.css';
import YouTubeFrame from './YouTubeFrame';
import InfoDrawer from './InfoDrawer';

import { getRandomVideo } from './utils';

function App() {

  // function saveVideoIds(nextPageToken = null) {
  //   const API_KEY = '';

  //   // playlistItem url
  //   let url;
  //   if (nextPageToken) {
  //     url = `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=50&pageToken=${nextPageToken}&playlistId=UUboMX_UNgaPBsUOIgasn3-Q&key=${API_KEY}`;
  //   } else {
  //     url = `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=50&playlistId=UUboMX_UNgaPBsUOIgasn3-Q&key=${API_KEY}`;
  //   }
  //   debugger;
  //   fetch(url, { 
  //     method: 'GET', 
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log('Success:', data);

  //     data.items.forEach(item => {
  //       // Get a key for a new Post.
  //       const newVidKey = firebase.database().ref().child('videos').push().key;
  //       debugger;
  //       firebase.database().ref('videos/' + newVidKey).set({
  //         videoId: item.contentDetails.videoId
  //       });
  //     })

  //     debugger;
  //     const pageToken = data.nextPageToken;
  //     if (pageToken) saveVideoIds(pageToken);
  //   })
  //   .catch((error) => {
  //     console.error('Error:', error);
  //   });
  // }

  const [videoId, setVideoId]=useState(0) //initialize your state here

  function getVideoId() {
    let videos;
    firebase.database().ref('/videos/').once('value').then(function(snapshot) {
      videos = snapshot.val();
      const video = getRandomVideo(videos);
      setVideoId(video.videoId);
      console.log(video)
    });
  }

  useEffect(() => {
    // Set the configuration for your app
    // TODO: Replace with your project's config object
    const config = {
      apiKey: "AIzaSyANrcGcG1YM9pzL-c5r4DgaRw-sYQkEkSc",
      authDomain: "funhaustv-270301.firebaseapp.com",
      databaseURL: "https://funhaustv-270301.firebaseio.com/",
      storageBucket: "bucket.appspot.com"
    };
    firebase.initializeApp(config);    
    // saveVideoIds();

    getVideoId(setVideoId);
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
