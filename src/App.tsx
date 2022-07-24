import { useState, useCallback, useRef } from "react";
import { AiFillCamera, AiFillVideoCamera } from "react-icons/ai";

import "./App.css";

const App = () => {
  const [frames, setFrames] = useState<string[]>([]);

  const addFrame = useCallback((newFrame: string) => {
    setFrames((previousFrames) => [...previousFrames, newFrame]);
  }, []);

  const videoElement = useRef<HTMLVideoElement | null>(null);

  const videoElementRef = useCallback(
    (renderedVideoElement: HTMLVideoElement) => {
      videoElement.current = renderedVideoElement;
      window.navigator.mediaDevices
        .getUserMedia({
          video: true,
          audio: true,
        })
        .then((stream) => {
          renderedVideoElement.srcObject = stream;
          renderedVideoElement.play();
        });
    },
    []
  );

  const lastPictureCanvas = useRef<HTMLCanvasElement | null>(null);

  const lastPictureElementRef = useCallback(
    (canvasElement: HTMLCanvasElement) => {
      lastPictureCanvas.current = canvasElement;
    },
    []
  );

  const onCapture = useCallback(() => {
    if (lastPictureCanvas.current !== null && videoElement.current !== null) {
      lastPictureCanvas.current.width = videoElement.current.offsetWidth;
      lastPictureCanvas.current.height = videoElement.current.offsetHeight;
      lastPictureCanvas.current.style.width = `${videoElement.current.offsetWidth}px`;
      lastPictureCanvas.current.style.height = `${videoElement.current.offsetHeight}px`;
      lastPictureCanvas.current
        .getContext("2d")
        ?.drawImage(
          videoElement.current,
          0,
          0,
          lastPictureCanvas.current.width,
          lastPictureCanvas.current.height
        );
      const imageDataURL = lastPictureCanvas.current.toDataURL("image/jpeg");
      addFrame(imageDataURL);
    }
  }, [addFrame]);

  return (
    <div className="app">
      <header className="header">
        <h1>Stop Motion Recorder</h1>
        <span className="by-line">
          Made with ❤️ by{" "}
          <a
            href="https://github.com/bence-toth/stop-motion-recorder"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bence A. Tóth
          </a>
        </span>
      </header>
      <main className="main">
        <div className="main-inner-wrapper">
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video className="video" autoPlay ref={videoElementRef}></video>
          <canvas className="last-picture" ref={lastPictureElementRef} />
        </div>
      </main>
      <aside className="sidebar">
        {frames.length > 0 && (
          <ul className="frames">
            {frames.map((frame, frameIndex) => (
              <li key={frameIndex} className="frame">
                <img src={frame} alt="" />
              </li>
            ))}
          </ul>
        )}
      </aside>
      <footer className="toolbar">
        <div>
          <button onClick={onCapture}>
            <span className="icon">
              <AiFillCamera />
            </span>
            Capture
          </button>
        </div>
        <div>
          <button>
            <span className="icon">
              <AiFillVideoCamera />
            </span>
            Preview
          </button>
        </div>
      </footer>
    </div>
  );
};

export default App;
