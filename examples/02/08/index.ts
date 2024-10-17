//# examples/02/08/index.ts
export function timeout(duration: number) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(duration);
    }, duration);
  });
}
