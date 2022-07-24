import { useState, useCallback } from "react";

import type { Frame } from "./App";

const useFrames = () => {
  const [frames, setFrames] = useState<Frame[]>([]);

  const addFrame = useCallback((newFrame: Frame) => {
    setFrames((previousFrames) => [...previousFrames, newFrame]);
  }, []);

  return { frames, addFrame };
};

export default useFrames;
