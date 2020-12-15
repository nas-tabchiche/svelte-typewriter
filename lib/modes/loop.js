import { loopTypewriterEffect, createElement } from '../helpers';
const cleanChildNodes = (node) => node.childNodes.forEach((el) => el.remove());
export default async ({ node, elements }, options) => {
    while (options.loop) {
        for (const { currentNode, text } of elements) {
            cleanChildNodes(node);
            const loopParagraphTag = currentNode.tagName.toLowerCase();
            const loopParagraphAttributes = [...currentNode.attributes];
            const loopParagraph = createElement(text, loopParagraphTag);
            loopParagraphAttributes.forEach(({ name, value }) => loopParagraph.setAttribute(name, value));
            node.appendChild(loopParagraph);
            await loopTypewriterEffect({ currentNode: loopParagraph, text }, options);
            cleanChildNodes(node);
        }
    }
};
