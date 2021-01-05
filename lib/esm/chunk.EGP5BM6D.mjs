import {
  sleep
} from "./chunk.WS4VPRCC.mjs";

// src/helpers/rng.ts
var rng = (min, max) => Math.floor(Math.random() * (max - min) + min);

// src/helpers/typingInterval.ts
var typingInterval = async (interval) => sleep(Array.isArray(interval) ? interval[rng(0, interval.length)] : interval);

// src/helpers/writeEffect.ts
var hideCursorOnAnimationEnd = (element) => element.classList.replace("typing", "finished-typing");
var writeEffect = async ({currentNode, text}, options) => {
  currentNode.classList.add("typing");
  for (let index = 0; index <= text.length; index++) {
    const char = text[index];
    char === "<" && (index = text.indexOf(">", index));
    currentNode.innerHTML = text.slice(0, index);
    await typingInterval(options.interval);
  }
  hideCursorOnAnimationEnd(currentNode);
};

export {
  rng,
  typingInterval,
  writeEffect
};
