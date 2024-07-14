// Click and drag the mouse to view the scene from different angles.

function setup() {
  createCanvas(400, 400, WEBGL);

  describe('A white cone on a gray background.');
}

function draw() {
  background(150);

  // Enable orbiting with the mouse.
  orbitControl();

  // Draw the cone.
  // Set its radius to 30 and height to 50.
  cone(120, 100);
}