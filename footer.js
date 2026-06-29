(function () {

  /* ─── 1. Footer CSS ─── */
  const css = `
    section#contact {
      padding: 0;
      position: relative;
      background: #065B5C;
      overflow: hidden;
      cursor: none;
    }
    section#contact::before {
      content: '';
      position: absolute;
      inset: -40px;
      background-image: radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px);
      background-size: 18px 18px;
      animation: footerDrift 14s ease-in-out infinite alternate;
      pointer-events: none;
      z-index: 0;
    }
    @keyframes footerDrift {
      0%   { transform: translate(0px, 0px) scale(1); }
      33%  { transform: translate(8px, -6px) scale(1.02); }
      66%  { transform: translate(-6px, 10px) scale(0.98); }
      100% { transform: translate(4px, -4px) scale(1.01); }
    }
    .footer-inner {
      position: relative;
      z-index: 1;
      max-width: 1320px;
      margin: 0 auto;
      padding: 40px 64px 24px;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 64px;
      align-items: center;
    }
    .footer-tagline {
      font-family: 'Bricolage Grotesque', sans-serif;
      font-size: clamp(18px, 2vw, 26px);
      font-weight: 600;
      letter-spacing: -0.8px;
      line-height: 1.2;
      color: #fff;
      margin-bottom: 16px;
      text-wrap: balance;
    }
    .footer-type-cursor {
      display: inline-block;
      width: 2px;
      height: 1em;
      background: rgba(255,255,255,0.75);
      vertical-align: middle;
      margin-left: 3px;
      border-radius: 1px;
      animation: cursorBlink 0.85s step-end infinite;
    }
    @keyframes cursorBlink {
      0%, 100% { opacity: 1; }
      50%       { opacity: 0; }
    }
    .footer-right {
      display: flex;
      gap: 40px;
      align-items: flex-start;
    }
    .footer-link-col-label {
      font-size: 9px;
      font-weight: 700;
      letter-spacing: 1.8px;
      text-transform: uppercase;
      color: rgba(255,255,255,0.4);
      margin-bottom: 10px;
    }
    .footer-link-col ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 7px;
      padding: 0; margin: 0;
    }
    .footer-link-col a {
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0.4px;
      color: rgba(255,255,255,0.65);
      text-decoration: none;
      text-transform: uppercase;
      transition: color 0.2s;
    }
    .footer-link-col a:hover { color: #fff; }
    .footer-bottom {
      position: relative;
      z-index: 1;
      padding: 14px 64px 24px;
      border-top: 1px solid rgba(255,255,255,0.1);
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 8px;
    }
    .footer-copy { font-size: 12px; color: rgba(255,255,255,0.35); letter-spacing: 0.3px; }
    .footer-burst {
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
      z-index: 10;
      animation: burstOut 0.7s cubic-bezier(0.25,0.46,0.45,0.94) forwards;
    }
    @keyframes burstOut {
      0%   { opacity: 1; transform: translate(0,0) scale(1); }
      100% { opacity: 0; transform: translate(var(--tx), var(--ty)) scale(0.3); }
    }
    #footer-cursor {
      position: fixed;
      width: 10px; height: 10px;
      border-radius: 50%;
      background: rgba(255,255,255,0.8);
      pointer-events: none;
      z-index: 99998;
      opacity: 0;
      transform: translate(-50%, -50%);
      transition: opacity 0.15s;
    }
    @media (max-width: 768px) {
      .footer-inner { grid-template-columns: 1fr; gap: 28px; padding: 36px 24px 20px; }
      .footer-tagline { font-size: 22px; letter-spacing: -0.5px; }
      .footer-bottom { padding: 14px 24px 24px; flex-direction: column; align-items: flex-start; gap: 4px; }
    }
  `;
  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  /* ─── 2. Footer HTML ─── */
  const target = document.getElementById('site-footer');
  if (!target) return;

  target.innerHTML = `
    <div id="footer-cursor"></div>
    <section id="contact">
      <div class="footer-inner">
        <div class="footer-left">
          <p class="footer-tagline"><span class="footer-typed"></span><span class="footer-type-cursor"></span></p>
        </div>
        <div class="footer-right">
          <div class="footer-link-col">
            <p class="footer-link-col-label">Connect</p>
            <ul>
              <li><a href="https://www.linkedin.com/in/eeza" target="_blank" rel="noopener">LinkedIn</a></li>
              <li><a href="mailto:eezasheren@gmail.com">Email</a></li>
              <li><a href="Eeza 2026 CV May 02_compressed (1).pdf" target="_blank" rel="noopener">Download CV</a></li>
            </ul>
          </div>
          <div class="footer-link-col">
            <p class="footer-link-col-label">Navigate</p>
            <ul>
              <li><a href="index.html#work">Work</a></li>
              <li><a href="index.html#about">About</a></li>
              <li><a href="index.html#method">Experience</a></li>
              <li><a href="index.html#blog">Blog</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-copy">© 2026 Eeza Sheren. All rights reserved.</p>
        <p class="footer-copy">Based in Singapore · Open to opportunities</p>
      </div>
    </section>
  `;

  /* ─── 3. Footer JS — cursor + click burst ─── */
  const cur    = document.getElementById('footer-cursor');
  const footer = target.querySelector('section#contact');
  if (!cur || !footer) return;

  /* ─── 4. Typewriter effect on tagline ─── */
  const typedEl = footer.querySelector('.footer-typed');
  const LINES = [
    'You cannot understand good design if you do not understand people'
  ];
  const TOTAL = LINES.reduce((s, l) => s + l.length, 0);

  function renderTyped(n) {
    let html = '';
    let rem = n;
    for (let i = 0; i < LINES.length; i++) {
      const take = Math.min(rem, LINES[i].length);
      html += LINES[i].slice(0, take).replace(/&/g,'&amp;').replace(/</g,'&lt;');
      rem -= take;
      if (rem > 0 && i < LINES.length - 1) { html += '<br>'; }
      if (rem <= 0) break;
    }
    typedEl.innerHTML = html;
  }

  let typed = 0, typeStarted = false;
  function startTyping() {
    if (typeStarted) return;
    typeStarted = true;
    function tick() {
      if (typed >= TOTAL) return;
      typed++;
      renderTyped(typed);
      // slight variance: a touch slower at line break for natural feel
      const atBreak = typed === LINES[0].length;
      setTimeout(tick, atBreak ? 120 : 28 + Math.random() * 22);
    }
    tick();
  }

  const typeObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) { startTyping(); typeObs.disconnect(); }
  }, { threshold: 0.25 });
  typeObs.observe(footer);

  const BURST_COUNT = 14;
  const COLORS = ['#fff', '#c5f135', '#80ffea', '#ffd166', '#ff6b9d'];

  footer.addEventListener('mouseenter', () => { cur.style.opacity = '1'; });
  footer.addEventListener('mouseleave', () => { cur.style.opacity = '0'; });
  footer.addEventListener('mousemove',  e  => {
    cur.style.left = e.clientX + 'px';
    cur.style.top  = e.clientY + 'px';
  });
  footer.addEventListener('click', e => {
    const rect = footer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    for (let i = 0; i < BURST_COUNT; i++) {
      const p = document.createElement('div');
      p.className = 'footer-burst';
      const angle = (360 / BURST_COUNT) * i + Math.random() * 20 - 10;
      const dist  = 40 + Math.random() * 60;
      const rad   = (angle * Math.PI) / 180;
      const tx    = Math.cos(rad) * dist;
      const ty    = Math.sin(rad) * dist;
      const size  = 5 + Math.random() * 7;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      p.style.cssText = `left:${x}px;top:${y}px;width:${size}px;height:${size}px;background:${color};--tx:${tx}px;--ty:${ty}px;animation-duration:${0.5 + Math.random() * 0.4}s;`;
      footer.appendChild(p);
      p.addEventListener('animationend', () => p.remove());
    }
  });

})();
