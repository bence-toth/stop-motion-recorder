import { useCallback, useRef } from "react";

import type { FrameType } from "./App";

interface UseCaptureParamsType {
  addFrame: (frame: FrameType) => void;
}

const useCapture = ({ addFrame }: UseCaptureParamsType) => {
  const videoElement = useRef<HTMLVideoElement | null>(null);

  const videoElementRef = useCallback(
    (renderedVideoElement: HTMLVideoElement) => {
      videoElement.current = renderedVideoElement;
      window.navigator.mediaDevices
        .getUserMedia({
          video: { width: 1280, height: 720 },
          audio: false,
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

  const framesEndRef = useRef<HTMLDivElement | null>(null);

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
      addFrame({
        dataURL: imageDataURL,
        id: Date.now(),
        isSelected: false,
      });
      requestAnimationFrame(() => {
        if (framesEndRef.current !== null) {
          framesEndRef.current.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    }
  }, [addFrame]);

  return {
    videoElementRef,
    lastPictureElementRef,
    onCapture,
    framesEndRef,
  };
};

export default useCapture;
