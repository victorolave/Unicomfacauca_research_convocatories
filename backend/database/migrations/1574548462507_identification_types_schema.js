'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class IdentificationTypesSchema extends Schema {
  up () {
    this.create('identification_types', (table) => {
      table.increments()
      table.string('name',254)
      
    })
  }

  down () {
    this.drop('identification_types')
  }
}

module.exports = IdentificationTypesSchema
