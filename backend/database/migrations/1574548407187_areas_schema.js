'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AreasSchema extends Schema {
  up () {
    this.create('areas', (table) => {
      table.increments()
      table.string("name",254)
    })
  }

  down () {
    this.drop('areas')
  }
}

module.exports = AreasSchema
