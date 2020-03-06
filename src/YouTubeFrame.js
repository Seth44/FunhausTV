import React from 'react';
import YouTube from 'react-youtube';

function YouTubeFrame({ videoId, getVideoId } ) {
  const opts = {
    height: '390',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };
  return (
    <div className="YouTubeFrame">
        <YouTube
          videoId={videoId}
          opts={opts}
          onEnd={getVideoId}
        />
    </div>
  );
}

export default YouTubeFrame;