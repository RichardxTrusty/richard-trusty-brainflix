import React, { useState } from "react";
import Header from "./components /Header";
import Video from "./components /Video";
import VideoInfo from "./components /VideoInfo";
import CommentForm from "./components /CommentForm";
import Comments from "./components /Comments";
import Gallery from "./components /Gallery";

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

  const defaultPrevent = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <Header defaultPrevent />
      <Video content={appState.selectedData} />
      <VideoInfo content={appState.selectedData} />
      <CommentForm />
      <Comments comments={appState.selectedData.comments} />
      <Gallery
        list={appState.list}
        selectedId={appState.selectedId}
        clickhandler={clickHandler}
      />
    </div>
  );
}

export default App;
