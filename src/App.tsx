import useFrames from "./useFrames";
import useCapture from "./useCapture";

import Header from "./Header";
import Frames from "./Frames";
import Toolbar from "./Toolbar";

import "./App.css";

export interface Frame {
  id: number;
  dataURL: string;
  isSelected: boolean;
}

const App = () => {
  const { frames, addFrame, toggleFrameSelection } = useFrames();
  const { videoElementRef, lastPictureElementRef, onCapture } = useCapture({
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
          {frames.length > 0 && (
            <img
              className="last-picture"
              src={frames[frames.length - 1].dataURL}
              alt=""
            />
          )}
        </div>
      </main>
      <aside className="sidebar">
        <Frames frames={frames} toggleFrameSelection={toggleFrameSelection} />
      </aside>
      <Toolbar onCapture={onCapture} />
    </div>
  );
};

export default App;
