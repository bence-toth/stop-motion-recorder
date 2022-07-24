import useFrames from "./useFrames";
import useCapture from "./useCapture";

import Header from "./Header";
import Frames from "./Frames";
import Toolbar from "./Toolbar";

import "./App.css";

export interface Frame {
  timestamp: number;
  dataURL: string;
}

const App = () => {
  const { frames, addFrame } = useFrames();
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
          <canvas className="last-picture" ref={lastPictureElementRef} />
        </div>
      </main>
      <aside className="sidebar">
        <Frames frames={frames} />
      </aside>
      <Toolbar onCapture={onCapture} />
    </div>
  );
};

export default App;
