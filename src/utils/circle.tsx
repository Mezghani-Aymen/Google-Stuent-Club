import { Circle } from "../types/circleInterface";

export function generateCircles(canvas: HTMLCanvasElement, isAnimated: boolean) {

    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error('Unable to get canvas context');
        return;
    }

    // Set canvas size to the window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Adjust circle count based on screen width
    const isSmallScreen = window.innerWidth < 768;
    const minCircles = isSmallScreen ? 5 : 15;
    const maxCircles = isSmallScreen ? 10 : 30;

    const circlesCount = Math.floor(Math.random() * (maxCircles - minCircles + 1)) + minCircles;

    const circles: (Circle & { speed: number })[] = [];

    // Colors
    const colors = ['#DB4437', '#4285F4', '#F4B400', '#0F9D58'];

    // Helper function to check overlap
    function isOverlapping(newCircle: Circle): boolean {
        return circles.some(circle => {
            const dx = newCircle.x - circle.x;
            const dy = newCircle.y - circle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            return distance < (newCircle.radius + circle.radius);
        });
    }

    // Generate circles
    for (let i = 0; i < circlesCount; i++) {
        let circle: Circle & { speed: number };
        do {
            const radius = Math.floor(Math.random() * (65 - 20 + 1)) + 20;
            const x = Math.floor(Math.random() * (canvas.width - radius * 2)) + radius;
            const y = Math.floor(Math.random() * (canvas.height - radius * 2)) + radius;

            const color = colors[Math.floor(Math.random() * colors.length)];
            const speed = isAnimated ? Math.random() * 1 : 0

            circle = { x, y, radius, color, speed };
        } while (isOverlapping(circle));

        circles.push(circle);
    }

    // Animation loop
    function animate() {
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        circles.forEach(circle => {
            circle.x += circle.speed;

            // If a circle moves beyond the canvas width, wrap it to the other side
            if (circle.x - circle.radius > canvas.width) {
                circle.x = -circle.radius;
            }

            ctx.beginPath();
            ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
            ctx.fillStyle = circle.color;
            ctx.fill();
        });

        requestAnimationFrame(animate)

    }

    animate();
}
