import Header from "./components /Header";
import Video from "./components /Video";
import VideoInfo from "./components /VideoInfo";
import CommentForm from "./components /CommentForm";
import Comments from "./components /Comments";
import Gallery from "./components /Gallery";

import data from "./data/video-details.json";
import list from "./data/videos.json";

import { Component } from "react";

class App extends Component {
  state = {
    data: data,
    list: list.filter((video) => video.id !== data[0].id),
    selectedData: data[0],
    selectedId: data[0].id,
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Video content={this.state.selectedData} />
        <VideoInfo content={this.state.selectedData} />
        <CommentForm />
        <Comments comments={this.state.selectedData.comments} />
        <Gallery list={this.state.list} selectedId={this.state.selectedId} />
      </div>
    );
  }
}
export default App;
