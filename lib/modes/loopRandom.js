import { loopTypewriterEffect, createElement, rng, cleanChildNodes, hasSingleTextNode } from '../helpers';
let alreadyChoosenTexts = [];
const getRandomText = (elements) => {
    while (true) {
        const randomIndex = rng(0, elements.length);
        const isTextDifferentFromPrevious = typeof alreadyChoosenTexts === 'number' && randomIndex !== alreadyChoosenTexts;
        const isTextFirstTime = Array.isArray(alreadyChoosenTexts) && !alreadyChoosenTexts.includes(randomIndex);
        const shouldDisplayText = isTextFirstTime || isTextDifferentFromPrevious;
        if (shouldDisplayText) {
            isTextDifferentFromPrevious && (alreadyChoosenTexts = []);
            alreadyChoosenTexts.push(randomIndex);
            const randomText = elements[randomIndex];
            return randomText;
        }
        const restartRandomization = alreadyChoosenTexts.length === elements.length;
        if (restartRandomization) {
            !hasSingleTextNode
                ? (alreadyChoosenTexts = alreadyChoosenTexts.pop())
                : (alreadyChoosenTexts = []);
        }
    }
};
export default async ({ node, elements }, options) => {
    while (options.loopRandom) {
        const { currentNode, text } = getRandomText(elements);
        cleanChildNodes(node);
        const loopParagraphTag = currentNode.tagName.toLowerCase();
        const loopParagraph = createElement(text, loopParagraphTag);
        const loopParagraphAttributes = [...currentNode.attributes];
        loopParagraphAttributes.forEach(({ name, value }) => loopParagraph.setAttribute(name, value));
        node.appendChild(loopParagraph);
        await loopTypewriterEffect({ currentNode: loopParagraph, text }, options);
        cleanChildNodes(node);
    }
};
