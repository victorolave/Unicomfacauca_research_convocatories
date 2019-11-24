'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EntityTypesSchema extends Schema {
  up () {
    this.create('entity_types', (table) => {
      table.increments()
      table.string('name',254)
      
    })
  }

  down () {
    this.drop('entity_types')
  }
}

module.exports = EntityTypesSchema
