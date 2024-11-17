import { useEffect, useRef, useState, useCallback } from 'react';
import { generateCircles } from './utils/circle';

function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    if (canvasRef.current) {
      generateCircles(canvasRef.current);
    }
  }, [windowSize]);

  return (
    <div className=" w-screen h-screen text-white">
      <canvas ref={canvasRef} className="w-screen h-screen bg-black fixed -z-10"></canvas>
      <div className=" w-full h-full backdrop-blur-sm  fixed -z-5"></div>
    </div>

  );
}

export default App;
