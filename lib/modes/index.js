import { getElements } from '../helpers';
export const typewriter = async (node, options) => {
    const { default: mode } = (options.loop && (await import('./loop'))) ||
        (options.loopRandom && (await import('./loopRandom'))) ||
        (options.cascade && (await import('./cascade'))) ||
        (options.scramble && (await import('./scramble'))) ||
        (await import('./default'));
    const elements = getElements(node);
    if (options.delay > 0) {
        const { sleep } = await import('../helpers');
        await sleep(options.delay);
        node.classList.remove('delay');
    }
    mode({ node, elements }, options);
};
