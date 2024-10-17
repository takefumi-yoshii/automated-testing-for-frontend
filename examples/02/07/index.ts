//# examples/02/07/index.ts
export function wait(duration: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(duration);
    }, duration);
  });
}
