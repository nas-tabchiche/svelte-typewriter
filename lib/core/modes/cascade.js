import{writeEffect as e}from"../helpers/writeEffect.js";export default async({elements:t},o)=>{t.forEach((e=>e.currentNode.textContent=""));for(const r of t)await e(r,o);o.dispatch("done")};
