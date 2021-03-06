import { RepositoryInterface } from './interface.js'

export class Repository extends RepositoryInterface {
  async find (values, { field = 'id', init = false } = {}) {
    if (!Array.isArray(values)) {
      values = [values]
    }

    const records = values.map(
      value => Object(value) === value ? value : { [field]: value })
    const entities = await this.search(
      [[field, 'in', records.map(record => record[field])]])
    const index = Object.fromEntries(entities.map(
      entity => [entity[field], entity]))

    return records.map(record => index[record[field]] || (
      init ? new this.model(record) : null))
  }
}
