
export class RepositoryInterface {
  /** @param {Entity | Array<Entity>} items @return {Array<Entity>} */
  async add (item) {
    throw new Error('Not implemented')
  }

  /** @param {Entity | Array<Entity>} items @return {Array<Entity>} */
  async remove (item) {
    throw new Error('Not implemented')
  }

  async count (domain) {
    throw new Error('Not implemented')
  }

  /** @param { Array<Any> } domain
   *  @param {{ limit: number | null, offset: number | null }}
    * @return {Array<Entity>} */
  async search (domain, { limit = null, offset = null } = {}) {
    throw new Error('Not implemented')
  }
}
