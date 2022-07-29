import { useRef, useLayoutEffect } from "react";

import useFrames from "./useFrames";
import useCapture from "./useCapture";

import Header from "./Header";
import Frames from "./Frames";
import Toolbar from "./Toolbar";

import "./App.css";

export interface FrameType {
  id: number;
  dataURL: string;
  isSelected: boolean;
}

const App = () => {
  const { frames, lastFrame, addFrame, deleteFrame, toggleFrameSelection } =
    useFrames();

  const { videoElementRef, lastPictureElementRef, onCapture, framesEndRef } =
    useCapture({
      addFrame,
    });

  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="main-inner-wrapper">
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video className="video" autoPlay ref={videoElementRef}></video>
          <canvas className="last-picture-canvas" ref={lastPictureElementRef} />
          {lastFrame !== null && (
            <img className="last-picture" src={lastFrame.dataURL} alt="" />
          )}
        </div>
      </main>
      <aside className="sidebar">
        <Frames
          frames={frames}
          toggleFrameSelection={toggleFrameSelection}
          deleteFrame={deleteFrame}
          framesEndRef={framesEndRef}
        />
      </aside>
      <Toolbar onCapture={onCapture} />
    </div>
  );
};

export default App;
