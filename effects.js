
const messages = [
  "Today isn’t just a regular day…",
  "It’s the day the most beautiful soul was born, the one who changed my life forever.",
  "From the moment you came into my world, everything became brighter.",
  "Your smile lights up my darkest moments. Your voice calms every storm inside me.",
  "Your eyes? They hold the whole universe. And your heart… oh, your heart is the safest place I’ve ever known.",
  "I want you to know that today, I don’t just celebrate the day you were born…",
  "I celebrate you.",
  "I celebrate your laughter, your kindness, your softness, your strength, your silly jokes, your deep thoughts, your warmth, your tears, your dreams — everything that makes you Irem.",
  "You are not just my girlfriend.",
  "You are my best friend, my support, my peace, my safe place.",
  "You are the reason I believe in love, in fate, in magic.",
  "If I had one wish, it wouldn’t be for money or success or anything else…",
  "I’d wish to have you, in every lifetime, in every world, again and again and again.",
  "Because without you, nothing feels complete. With you, even the ordinary becomes special.",
  "So, my love… I hope your birthday is filled with joy, surprises, hugs, smiles, and love — because that’s what you give to me every single day.",
  "You deserve everything good in this world.",
  "And I promise, I’ll spend my life trying to give it to you — or even more.",
  "🎂 Happy Birthday, my queen. 👑",
  "I love you more than words can ever say. And I always will. 💋"
];

let index = 0;
const messageBox = document.getElementById("messageBox");
const messageText = document.getElementById("messageText");

function showNextMessage() {
  if (index < messages.length) {
    messageText.innerText = messages[index];
    index++;
  } else {
    messageText.innerText = "💖 The End... but my love for you never ends 💖";
  }
}

// Canvas animation
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const emojis = ["🌹", "💖", "💋", "🌸", "💕", "💐"];
let particles = [];

function createParticle() {
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];
  particles.push({
    x: Math.random() * canvas.width,
    y: canvas.height + 30,
    size: Math.random() * 28 + 22,
    speed: Math.random() * 1.5 + 0.5,
    emoji: emoji,
    opacity: 1,
    rotate: Math.random() * 360
  });
}

function drawParticle(p) {
  ctx.save();
  ctx.font = `${p.size}px serif`;
  ctx.globalAlpha = p.opacity;
  ctx.translate(p.x, p.y);
  ctx.rotate((p.rotate * Math.PI) / 180);
  ctx.fillText(p.emoji, 0, 0);
  ctx.restore();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    p.y -= p.speed;
    p.opacity -= 0.003;
    p.rotate += 1;
    drawParticle(p);
    if (p.opacity <= 0) {
      particles.splice(i, 1);
    }
  });
  requestAnimationFrame(animate);
}

// Generate particles continuously
setInterval(createParticle, 400);
animate();
