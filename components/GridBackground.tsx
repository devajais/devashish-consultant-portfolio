import React, { useRef, useEffect } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    const numberOfParticles = 80;

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    
    class Particle {
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;

        constructor(x: number, y: number, size: number, speedX: number, speedY: number) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.speedX = speedX;
            this.speedY = speedY;
        }

        update() {
            if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
            if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
            this.x += this.speedX;
            this.y += this.speedY;
        }
        draw() {
            ctx.fillStyle = 'rgba(0, 245, 255, 0.8)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    const init = () => {
        particlesArray = [];
        for (let i = 0; i < numberOfParticles; i++) {
            let size = Math.random() * 1.5 + 1;
            let x = Math.random() * (window.innerWidth - size * 2) + size;
            let y = Math.random() * (window.innerHeight - size * 2) + size;
            let speedX = Math.random() * 0.4 - 0.2;
            let speedY = Math.random() * 0.4 - 0.2;
            particlesArray.push(new Particle(x, y, size, speedX, speedY));
        }
    };
    
    const connect = () => {
        let opacityValue = 1;
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
                             + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                    opacityValue = 1 - (distance / 20000);
                    ctx.strokeStyle = `rgba(0, 184, 217, ${opacityValue})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    };

    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        connect();
        requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
        mouse.current.x = event.clientX;
        mouse.current.y = event.clientY;
    };

    resizeCanvas();
    init();
    animate();

    window.addEventListener('resize', () => {
        resizeCanvas();
        init();
    });
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />;
};

export default ParticleBackground;