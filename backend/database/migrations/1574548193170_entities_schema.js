'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EntitiesSchema extends Schema {
  up () {
    this.create('entities', (table) => {
      table.increments()
      table.string('name', 254)
      table.string('nit', 254)
      table.integer('legal_representative_id')
      table.string('sector', 254)
      table.integer('entity_type_id')
      table.integer('rol_id')
      table.string('country',254)
      table.string('city',254)
      table.string('address',254)
      table.string('email',254)
      table.string('web',254)
      table.integer('contact_person_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('entities')
  }
}

module.exports = EntitiesSchema
