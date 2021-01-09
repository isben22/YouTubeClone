import React from 'react';
import axios from 'axios';
import SearchField from 'react-search-field';
// import SearchBar from './Components/SearchBar/searchBar';
//import youtube from '';
import VideoList from './Components/VideoList/videoList';
import VideoDetail from './Components/VideoDetail/videoDetail';


class App extends React.Component {
  constructor (props) {
    super (props) 
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      // bind selectedvideo
    
  }
  state = {
    videos: [], //need a function to pass in each video into videoitem
    selectedVideo: null, //need a function that sets this passed into videoitem
    videoSearch: "",
  
  }


  getYoutube() {
    axios.get ("https://www.googleapis.com/youtube/v3/search?q=car&key=AIzaSyDqJUbsYQtd9qQMfBfpF3ZA5LDqCya1hng&type=video")
    .then(response => {
    this.setState({videoSearch: response.data});
      console.log(this.state.videoSearch);
      console.log(this.state.videos);
    });
  }

  
  handleChange = (event) => {
    event.preventDefault();
    this.setState({
        videoSearch: event.target.value
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
  }


  
  // handleSubmit = async (termFromSearchBar) => {
  //   const response = await youtube.get('/search', {
  //     params: {
  //       q: termFromSearchBar
  //     }
  //   })
  //   this.setState({
  //     videos: response.data.items
  //   })
  // };
  // handleVideoSelect = (video) => {
  //   this.setState({selectedVideo: video})
  // }

  render () {
    return (
      <div className='ui container' style={{marginTop: '1em'}}>
        {/* <SearchBar handleSubmit={this.handleSubmit} handleChange={this.handleChange}
        videoSearch = {this.state.videoSearch} /> */}
        <SearchField  onEnter={onEnter} handleSubmit={this.handleSubmit} handleChange={this.handleChange}
        videoSearch = {this.state.videoSearch}/>
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className='five wide column'>
              <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
