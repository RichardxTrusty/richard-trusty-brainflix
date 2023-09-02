import "./App.scss";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import VideoInfo from "./components/VideoInfo/VideoInfo";
import CommentForm from "./components/CommentForm/CommentForm";
import Comments from "./components/Comments/Comments";
import Videolist from "./components/Videolist/Videolist";

import data from "./data/video-details.json";
import list from "./data/videos.json";

function App() {
  const [appState, setAppState] = useState({
    data: data,
    list: list.filter((video) => video.id !== data[0].id),
    selectedData: data[0],
    selectedId: data[0].id,
  });

  const clickHandler = (id) => {
    const newSelection = appState.data.find((entry) => entry.id === id);
    setAppState({
      ...appState,
      selectedData: newSelection,
      list: appState.list.filter((video) => video.id !== id),
    });
    console.log("clicked");
  };

  const defaultPrevent = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <Header defaultPrevent={defaultPrevent} />
      <Video content={appState.selectedData} />
      <div className="halfPage">
        <div className="halfPage-left">
          <VideoInfo content={appState.selectedData} />
          <CommentForm />
          <Comments comments={appState.selectedData.comments} />
        </div>

        <Videolist
          list={appState.list}
          selectedId={appState.selectedId}
          clickHandler={clickHandler}
        />
      </div>
    </div>
  );
}

export default App;
