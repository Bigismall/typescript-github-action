/**
 * Unit tests for src/wait.ts
 */

import { wait } from '../src/wait'
import { expect } from '@jest/globals'

describe('wait.ts', () => {
  it('throws an invalid number', async () => {
    const input = parseInt('foo', 10)
    expect(Number.isNaN(input)).toBe(true)

    await expect(wait(input)).rejects.toThrow('seconds is not a number')
  })

  it('waits with a valid number', async () => {
    const start = new Date()
    await wait(3)
    const end = new Date()

    const delta = Math.abs(end.getTime() - start.getTime())

    expect(delta).toBeGreaterThan(250)
  })
})
