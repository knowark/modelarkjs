import { describe, expect, it, beforeEach } from '@jest/globals'
import { Storer, MemoryStorer } from '../../../lib/common/storer'

describe('Storer', () => {
  let storer = /** @type {Storer} */ (null)
  beforeEach(() => {
    storer = new Storer()
  })

  it('can be instantiated', () => {
    expect(storer).toBeTruthy()
  })

  it('defines a "retrieve" method', async () => {
    try {
      await storer.retrieve('4d68cd64-d4fd-4d36-adf8-8efefd226a9a')
    } catch (error) {
      expect(error.message).toBe('Not implemented')
    }
  })

  it('defines an "store" method', async () => {
    try {
      await storer.store('4d68cd64-d4fd-4d36-adf8-8efefd226a9a', {})
    } catch (error) {
      expect(error.message).toBe('Not implemented')
    }
  })
})

describe('MemoryStorer', () => {
  let storer = /** @type {MemoryStorer} */ (null)
  beforeEach(() => {
    storer = new MemoryStorer()
  })

  it('can be instantiated', () => {
    expect(storer).toBeTruthy()
  })

  it('defines a "retrieve" method', async () => {
    const storeId = '4d68cd64-d4fd-4d36-adf8-8efefd226a9a'
    const store = await storer.retrieve(storeId)
    expect(store).toMatchObject({})
  })

  it('defines an "store" method', async () => {
    const itemId = 'ac283465-2fec-4902-84dd-d497af0aae04'
    const data = {
      [itemId]: {
        id: itemId,
        name: 'John Doe'
      }
    }
    const storeId = '4d68cd64-d4fd-4d36-adf8-8efefd226a9a'

    await storer.store(storeId, data)

    expect(storer.data[storeId]).toBe(data)
  })
})
