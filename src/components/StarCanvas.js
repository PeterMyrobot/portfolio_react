import { useEffect, useRef, useState } from 'react';

const EYES_TO_SCREEN = 50;
const FLY_SPEED = 0.02;

function StarCanvas() {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const preTime = useRef(0);

  const makeStar = (count) => {
    const randomStar = [...Array(count)].map(() => {
      return {
        size: Math.random() * 10,
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        z: Math.random() * 300,
      };
    });
    starsRef.current = randomStar;
  };

  const handleResize = () => {
    if (!canvasRef) return;
    console.log('resize');
    let canvas = canvasRef.current;
    let ctx = canvas.getContext('2d');
    ctx.canvas.height = window.innerHeight;
    ctx.canvas.width = window.innerWidth;
    ctx.translate(canvas.width / 2, canvas.height / 2);
  };

  const drawStar = (x, y, r) => {
    let canvas = canvasRef.current;
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = '#fff';
    ctx.arc(x, y, r, 0, Math.PI * 2, false);
    ctx.fill();
  };

  const drawStars = () => {
    let canvas = canvasRef.current;
    let ctx = canvas.getContext('2d');
    // ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);
    starsRef.current.forEach((star) => {
      ctx.beginPath();
      const ratio = EYES_TO_SCREEN / (star.z + EYES_TO_SCREEN);
      const cx = (star.x / 100) * ctx.canvas.width * ratio;
      const cy = (star.y / 100) * ctx.canvas.height * ratio;
      const cSize = star.size * ratio;
      drawStar(cx, cy, cSize);
    });
  };
  const clear = () => {
    let canvas = canvasRef.current;
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = '#031926';
    // ctx.translate(-canvas.width / 2, -canvas.height / 2);
    ctx.fillRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
  };

  const movingStars = (distance) => {
    const nextStar = starsRef.current.map((star) => {
      const newDis = star.z - distance;
      while (newDis <= -EYES_TO_SCREEN) {
        newDis += 300;
      }
      return {
        ...star,
        z: newDis,
      };
    });
    // console.log(nextStar);
    starsRef.current = nextStar;
  };

  const renderFrame = (time) => {
    const elapsed = time - preTime.current;
    preTime.current = time;
    movingStars(elapsed * FLY_SPEED);
    clear();
    drawStars();
  };

  const requestIdRef = useRef(null);

  const tick = (time) => {
    if (!canvasRef) return;
    renderFrame(time);
    requestIdRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    handleResize();
    makeStar(100);
    window.addEventListener('resize', handleResize);
    requestIdRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(requestIdRef.current);
    };
  }, []);
  return <canvas className="absolute w-full h-screen" ref={canvasRef} />;
}

export default StarCanvas;
