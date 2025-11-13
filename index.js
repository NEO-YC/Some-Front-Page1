const phrases = ["FASTER", "FOR LIFE", "SMARTER"];

  const sleep = ms => new Promise(r => setTimeout(r, ms));

  async function typeWord(el, word, step = 100, hold = 600) {
    el.textContent = "";
    for (let i = 1; i <= word.length; i++) {
      el.textContent = word.slice(0, i);
      await sleep(step);
    }
    await sleep(hold);
    for (let i = word.length; i >= 0; i--) {
      el.textContent = word.slice(0, i);
      await sleep(step);
    }
    await sleep(step);
  }

  (async function cycle() {
    let i = 0;
    while (true) {
      await typeWord(fasterEl, phrases[i % phrases.length], 80, 800);
      i++;
    }
  })();
;
