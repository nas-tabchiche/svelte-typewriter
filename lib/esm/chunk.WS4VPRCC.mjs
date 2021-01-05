// src/helpers/sleep.ts
var sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export {
  sleep
};
