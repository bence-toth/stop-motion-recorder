import { useState, useMemo, useCallback } from "react";

import type { FrameType } from "./App";

const useFrames = () => {
  const [frames, setFrames] = useState<FrameType[]>([]);

  const lastFrame = useMemo(
    () => (frames.length > 0 ? frames[frames.length - 1] : null),
    [frames]
  );

  const onAddFrame = useCallback((newFrame: FrameType) => {
    setFrames((previousFrames) => [...previousFrames, newFrame]);
  }, []);

  const onDeleteFrame = useCallback((frameId: number) => {
    setFrames((previousFrames) =>
      previousFrames.filter((frame) => frame.id !== frameId)
    );
  }, []);

  const onDeleteSelectedFrames = useCallback(() => {
    setFrames((previousFrames) =>
      previousFrames.filter((frame) => !frame.isSelected)
    );
  }, []);

  const onToggleFrameSelection = useCallback((frameId: number) => {
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

  return {
    frames,
    lastFrame,
    onAddFrame,
    onDeleteFrame,
    onDeleteSelectedFrames,
    onToggleFrameSelection,
  };
};

export default useFrames;
