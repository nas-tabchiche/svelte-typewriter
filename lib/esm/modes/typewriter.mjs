import {
  writeEffect
} from "../chunk.EGP5BM6D.mjs";
import "../chunk.WS4VPRCC.mjs";

// src/helpers/onAnimationEnd.ts
var onAnimationEnd = (element, callback) => {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      const elementAttributeChanged = mutation.type === "attributes";
      const elementFinishedTyping = !mutation.target.classList.contains("typing");
      if (elementAttributeChanged && elementFinishedTyping)
        callback();
    });
  });
  observer.observe(element, {
    attributes: true,
    childList: true,
    subtree: true
  });
};

// src/modes/typewriter.ts
var cleanChildText = (elements) => elements.forEach((element) => element.currentNode.textContent = "");
var mode = async (elements, options) => {
  if (options.cascade) {
    cleanChildText(elements);
  } else {
    const {getLongestTextElement} = await import("../helpers/getLongestTextElement.mjs");
    const lastElementToFinish = getLongestTextElement(elements);
    onAnimationEnd(lastElementToFinish, () => options.dispatch("done"));
  }
  for (const element of elements)
    options.cascade ? await writeEffect(element, options) : writeEffect(element, options);
  options.cascade && options.dispatch("done");
};
export {
  mode
};
