import { useEffect, useRef, useState, useCallback } from 'react';
import { generateCircles } from './utils/circle';
import Header from "./components/header";
import Hero from "./components/hero/hero";

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

  const navLink = [
    { label: 'Home', href: 'HOME' },
    { label: 'Events', href: '#' },
    { label: 'Teams', href: '#' },
    { label: 'Glory', href: '#' },
    { label: 'Contact', href: '#CONTACT' },
  ]

  return (
    <div className="text-white">
      <canvas ref={canvasRef} className="w-screen h-screen bg-black fixed -z-10"></canvas>
      <div className="w-full h-full  fixed -z-5 bg-white backdrop-filter backdrop-blur-sm bg-opacity-10 "></div>
      <div>
        <Header
          navLinks={navLink}
          signupButton={{ label: 'Glory', href: '#' }}
        />
      </div>
    </div>
  );
}

export default App;