/**
 * Wait for a number of seconds.
 * @param seconds The number of seconds to wait.
 * @returns {Promise<string>} Resolves with 'done!' after the wait is over.
 */
export async function wait(seconds: number): Promise<string> {
  return new Promise(resolve => {
    if (Number.isNaN(seconds)) {
      throw new Error('seconds is not a number')
    }

    setTimeout(() => resolve('done!'), seconds * 1000)
  })
}
