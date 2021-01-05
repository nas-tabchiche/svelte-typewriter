import {
  rng,
  typingInterval,
  writeEffect
} from "../chunk.EGP5BM6D.mjs";
import "../chunk.WS4VPRCC.mjs";

// src/helpers/unwriteEffect.ts
var unwriteEffect = async (currentNode, options) => {
  options.dispatch("done");
  await typingInterval(typeof options.loop === "number" ? options.loop : 1500);
  const text = currentNode.innerHTML.replaceAll("&amp;", "&");
  for (let index = text.length - 1; index >= 0; index--) {
    const letter = text[index];
    letter === ">" && (index = text.lastIndexOf("<", index));
    currentNode.innerHTML = text.slice(0, index);
    await typingInterval(options.interval);
  }
};

// src/helpers/getRandomElement.ts
var alreadyChoosenTexts = [];
var getRandomElement = (elements) => {
  while (true) {
    const randomIndex = rng(0, elements.length);
    const isTextDifferentFromPrevious = typeof alreadyChoosenTexts === "number" && randomIndex !== alreadyChoosenTexts;
    const isTextFirstTime = Array.isArray(alreadyChoosenTexts) && !alreadyChoosenTexts.includes(randomIndex);
    if (isTextFirstTime || isTextDifferentFromPrevious) {
      isTextDifferentFromPrevious && (alreadyChoosenTexts = []);
      alreadyChoosenTexts.push(randomIndex);
      const randomText = elements[randomIndex];
      return randomText;
    }
    const restartRandomizationCycle = alreadyChoosenTexts.length === elements.length;
    restartRandomizationCycle && (alreadyChoosenTexts = alreadyChoosenTexts.pop());
  }
};

// src/modes/loopTypewriter.ts
var loopTypewriter = async ({currentNode, text}, options) => {
  await writeEffect({currentNode, text}, options);
  const textWithUnescapedAmpersands = text.replaceAll("&", "&amp;");
  const fullyWritten = currentNode.innerHTML === textWithUnescapedAmpersands;
  fullyWritten && await unwriteEffect(currentNode, options);
};
var mode = async (elements, options) => {
  while (true) {
    if (options.loop) {
      for (const element of elements)
        await loopTypewriter(element, options);
    } else if (options.loopRandom) {
      const element = getRandomElement(elements);
      await loopTypewriter(element, options);
    }
  }
};
export {
  mode
};
