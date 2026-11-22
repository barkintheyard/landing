const clock = document.getElementById('clock');

function tick() {
  const now = new Date();
  const weekday = now.toLocaleDateString('en-GB', { weekday: 'long' });
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  const time = now.toLocaleTimeString('en-GB', { hour12: false });
  clock.textContent = `${weekday}, ${y}-${m}-${d}, ${time}`;
}

tick();
setInterval(tick, 1000);

const workLink = document.getElementById('work-with-us');
if (workLink) {
  workLink.href = ['mailto:', ['gun', 'barkintheyard.com'].join('@')].join('');
}

