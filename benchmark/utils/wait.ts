/**
 * Wait for a given amount of time before resolving a Promise.
 *
 * @param ms - The number of milliseconds to wait.
 * @returns A Promise that resolves when the time has elapsed.
 */
export function wait(ms: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
