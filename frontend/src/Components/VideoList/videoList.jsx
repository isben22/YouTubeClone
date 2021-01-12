import React from 'react';
import VideoItem from '../VideoItem/videoItem';


const VideoList = (props) => {
  
    if (props.videos !== null){
        console.log("video list - videos", props.videos);
          const renderedVideos = props.videos.items.map((video) => {
        return <VideoItem handleVideoSelect={props.handleVideoSelect}  key = {video.id.videoId} video={video} />
          });
        return <div className='ui relaxed divided list'>{renderedVideos}</div>

    
    }
    else{
        return <div>videolist no videos</div>
            
    }


    
};
export default VideoList;