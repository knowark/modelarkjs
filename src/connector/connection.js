export class Connection {
  /** @param {string} statement
   * @param {object} parameters
   * @return {Array<object>} */
  async query (statement, parameters) {
    console.assert([statement, parameters])
    return []
  }
}
