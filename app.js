const cube = document.querySelector('.cube');
let startX,
  startY,
  currentX = 0,
  currentY = 0;

// Listen for touch start to record initial position
document.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
});

// Listen for touch move to calculate direction
document.addEventListener('touchmove', (e) => {
  const moveX = e.touches[0].clientX - startX;
  const moveY = e.touches[0].clientY - startY;

  // Update rotation angles
  currentX += moveY * 0.1; // Y-axis swipe affects X-rotation
  currentY += moveX * 0.1; // X-axis swipe affects Y-rotation

  // Apply transformations
  cube.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;
});
