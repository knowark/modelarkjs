import { describe, expect, it, beforeEach } from '@jest/globals'
import { Entity } from '../../lib/common/entity.js'
import { Portal, MemoryRepository } from '../../lib/repository'

class Alpha extends Entity {}

class Beta extends Entity {}

describe('Portal', () => {
  let portal = null

  beforeEach(function () {
    const alphaRepository = new MemoryRepository({ model: Alpha })
    portal = new Portal({
      repositories: [alphaRepository]
    })
  })

  it('is defined', function () {
    expect(portal).toBeTruthy()
  })

  it('can be instantiated without respositories', () => {
    portal = new Portal()

    expect(portal).toBeTruthy()
    expect(() => portal.get('Alpha')).toThrow(
      "A repository for 'Alpha' has not been provided.")
  })

  it('gets the repository associated to the given model', () => {
    const repository = portal.get('Alpha')

    expect(repository.model).toBe(Alpha)
  })

  it('sets the repository associated to the given model', () => {
    const betaRepository = new MemoryRepository({ model: Beta })

    portal.put(betaRepository)

    const repository = portal.get('Beta')
    expect(repository.model).toBe(Beta)
    expect(repository).toBe(betaRepository)
  })
})
