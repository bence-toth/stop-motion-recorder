import { useCallback, useRef } from "react";

import type { Frame } from "./App";

interface UseCaptureParams {
  addFrame: (frame: Frame) => void;
}

const useCapture = ({ addFrame }: UseCaptureParams) => {
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

  const lastPictureCanvasElement = useRef<HTMLCanvasElement | null>(null);

  const lastPictureElementRef = useCallback(
    (canvasElement: HTMLCanvasElement) => {
      lastPictureCanvasElement.current = canvasElement;
    },
    []
  );

  const onCapture = useCallback(() => {
    if (
      lastPictureCanvasElement.current !== null &&
      videoElement.current !== null
    ) {
      lastPictureCanvasElement.current.width = videoElement.current.offsetWidth;
      lastPictureCanvasElement.current.height =
        videoElement.current.offsetHeight;
      lastPictureCanvasElement.current.style.width = `${videoElement.current.offsetWidth}px`;
      lastPictureCanvasElement.current.style.height = `${videoElement.current.offsetHeight}px`;
      lastPictureCanvasElement.current
        .getContext("2d")
        ?.drawImage(
          videoElement.current,
          0,
          0,
          lastPictureCanvasElement.current.width,
          lastPictureCanvasElement.current.height
        );
      const imageDataURL =
        lastPictureCanvasElement.current.toDataURL("image/jpeg");
      addFrame({ dataURL: imageDataURL, timestamp: Date.now() });
    }
  }, [addFrame]);

  return {
    videoElementRef,
    lastPictureElementRef,
    onCapture,
  };
};

export default useCapture;
