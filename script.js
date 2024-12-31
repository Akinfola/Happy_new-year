const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Adjust canvas size on window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Array to hold particles
let particles = [];

// Function to create a particle
class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.radius = Math.random() * 2 + 1;
    this.alpha = 1;
    this.speedX = (Math.random() - 0.5) * 4;
    this.speedY = (Math.random() - 0.5) * 4;
    this.decay = Math.random() * 0.02 + 0.01;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.alpha -= this.decay;
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore();
  }
}

// Function to create a burst of particles
function createFirework(x, y) {
  const colors = ['#ff5959', '#ffad33', '#32ed4e', '#32c9ed', '#7a32ed'];
  const numParticles = Math.random() * 50 + 50;

  for (let i = 0; i < numParticles; i++) {
    const color = colors[Math.floor(Math.random() * colors.length)];
    particles.push(new Particle(x, y, color));
  }
}

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles = particles.filter((particle) => particle.alpha > 0);

  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });

  requestAnimationFrame(animate);
}

// Generate fireworks at random intervals
setInterval(() => {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height * 0.5;
  createFirework(x, y);
}, 500);

// Start the animation
animate();







let h2 = document.querySelector('h2');
let container = document.querySelector('.container');

h2.onclick = function() {
    container.classList.toggle('newyear');
    this.classList.toggle('active'); 
}