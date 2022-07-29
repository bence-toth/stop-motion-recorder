import { useState, useCallback } from "react";

import type { Frame } from "./App";

const useFrames = () => {
  const [frames, setFrames] = useState<Frame[]>([]);

  const addFrame = useCallback((newFrame: Frame) => {
    setFrames((previousFrames) => [...previousFrames, newFrame]);
  }, []);

  const toggleFrameSelection = useCallback((id: number) => {
    setFrames((previousFrames) =>
      previousFrames.map((frame) => {
        if (frame.id !== id) {
          return frame;
        }
        return {
          ...frame,
          isSelected: !frame.isSelected,
        };
      })
    );
  }, []);

  return { frames, addFrame, toggleFrameSelection };
};

export default useFrames;
