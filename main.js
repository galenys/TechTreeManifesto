function drawBranch(p, x, y, length, angle, depth) {
    if (depth > 0) {
        const newX = x + length * p.cos(angle);
        const newY = y + length * p.sin(angle);
        p.stroke(0, 0, 100);
        p.strokeWeight(depth / 10);
        p.line(x, y, newX, newY);
        const newDepth = depth - 1;
        const newLength = length * 0.95;
        drawBranch(p, newX, newY, newLength, angle + p.random(-p.PI / 4, p.PI / 4), newDepth);
        drawBranch(p, newX, newY, newLength, angle + p.random(-p.PI / 4, p.PI / 4), newDepth);
    }
}

// Only initialize p5 if on a desktop
if (window.innerWidth > 800) {
    new p5((p) => {
        let drawing = false;

        p.setup = () => {
            p.createCanvas(p.windowWidth, p.windowHeight);
            p.background(255);
        };

        p.draw = () => {
            // Clear the canvas and redraw if drawing is true
            // if (drawing) {
            //     p.background(255);
            // }
        };

        p.mousePressed = () => {
            // Clear the canvas and start drawing branches
            p.background(255);
            drawBranch(p, p.mouseX, p.mouseY, 50, p.random(-p.PI, p.PI), 10);
            drawing = true;
        };

        p.mouseReleased = () => {
            drawing = false;
        };
    }, "canvas-container");
}
