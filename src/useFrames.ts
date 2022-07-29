import { useState, useMemo, useCallback } from "react";

import type { FrameType } from "./App";

const useFrames = () => {
  const [frames, setFrames] = useState<FrameType[]>([]);

  const lastFrame = useMemo(
    () => (frames.length > 0 ? frames[frames.length - 1] : null),
    [frames]
  );

  const addFrame = useCallback((newFrame: FrameType) => {
    setFrames((previousFrames) => [...previousFrames, newFrame]);
  }, []);

  const deleteFrame = useCallback((frameId: number) => {
    setFrames((previousFrames) =>
      previousFrames.filter((frame) => frame.id !== frameId)
    );
  }, []);

  const toggleFrameSelection = useCallback((frameId: number) => {
    setFrames((previousFrames) =>
      previousFrames.map((frame) => {
        if (frame.id !== frameId) {
          return frame;
        }
        return {
          ...frame,
          isSelected: !frame.isSelected,
        };
      })
    );
  }, []);

  return { frames, lastFrame, addFrame, deleteFrame, toggleFrameSelection };
};

export default useFrames;
