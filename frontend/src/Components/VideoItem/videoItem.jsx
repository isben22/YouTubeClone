import React from 'react';

const VideoItem = (props) => {
    console.log(props.video);
    return(
        <div onClick = {() => props.handleVideoSelect(props.video.id.videoId)} className = 'video-item item'>
            <img className = 'ui image' src = {props.video.snippet.thumbnails.medium.url} 
            alt = {props.video.snippet.description}/>
            <div className = 'content'>
                <div className = 'header' >{props.video.snippet.title}</div>
            </div>
        </div>
    )
};
export default VideoItem;