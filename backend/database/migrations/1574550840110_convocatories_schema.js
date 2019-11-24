'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConvocatoriesSchema extends Schema {
  up () {
    this.create('convocatories', (table) => {
      table.increments()
      table.string('name', 254)
      table.string('type', 254)
      table.integer('year', 254)
      table.date('start_date', 254)
      table.date('end_date', 254)
      table.timestamps()
    })
  }

  down () {
    this.drop('convocatories')
  }
}

module.exports = ConvocatoriesSchema
