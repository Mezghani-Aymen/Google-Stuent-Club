import { useEffect, useRef, useState, useCallback } from 'react';
import { generateCircles } from './utils/circle';
import { useAnimation } from './contexts/animationContext';

// Components
import Header from "./components/header";
import Hero from "./components/hero/hero";
import { ToggleButton } from "./components/buttons/toggleButton";

function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { isAnimated } = useAnimation();

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
      generateCircles(canvasRef.current, isAnimated);
    }
  }, [windowSize, isAnimated]);

  const navLink = [
    { label: 'Home', href: 'HOME' },
    { label: 'Events', href: '#' },
    { label: 'Teams', href: '#' },
    { label: 'Glory', href: '#' },
    { label: 'Contact', href: '#CONTACT' },
  ]

  return (
    <div className="text-white  overflow-x-hidden">
      <canvas ref={canvasRef} className="w-screen h-screen bg-[#161616] fixed -z-10"></canvas>
      <div className="w-full h-full  fixed -z-5 bg-white backdrop-filter backdrop-blur-sm bg-opacity-10 "></div>
      <>
        <Header
          navLinks={navLink}
          signupButton={{ label: 'Glory', href: '#' }}>

          <ToggleButton />
        </Header>

        <Hero />

      </>
    </div>
  );
}

export default App;