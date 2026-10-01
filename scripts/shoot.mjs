import { chromium } from 'playwright';

const BASE = process.env.BASE || 'http://localhost:3001';
const shots = [
  { path: '/', name: 'home', full: true, w: 1440, h: 900 },
  { path: '/', name: 'home-hero', full: false, w: 1440, h: 900 },
  { path: '/about', name: 'about', full: true, w: 1440, h: 900 },
  { path: '/blog', name: 'blog', full: true, w: 1440, h: 900 },
  { path: '/blog/scaling-1000-concurrent-calls', name: 'post', full: true, w: 1440, h: 900 },
  { path: '/', name: 'home-mobile', full: true, w: 390, h: 844 },
];

const browser = await chromium.launch();
for (const s of shots) {
  const page = await browser.newPage({
    viewport: { width: s.w, height: s.h },
    deviceScaleFactor: 2,
    reducedMotion: process.env.MOTION === 'on' ? 'no-preference' : 'reduce',
  });
  await page.goto(BASE + s.path, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1800); // let 3D + reveals settle
  await page.screenshot({ path: `/tmp/dj-${s.name}.png`, fullPage: s.full });
  console.log(`✓ /tmp/dj-${s.name}.png  (${s.path})`);
  await page.close();
}
await browser.close();
