
'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PersonsSchema extends Schema {
  up () {
    this.create('persons', (table) => {
      table.increments()
      table.string('first_name', 254)
      table.string('second_name', 254)
      table.string('last_name', 254)
      table.string('second_last_name', 254)
      table.integer('age')
      table.integer('identification_type_id')
      table.string('idetification',254)
      table.date('birthday')
      table.string('address', 254)
      table.string('email', 254)
      table.string('phone_number', 254)
      table.integer('entity_id')
      table.string('ocupation', 254)
      table.timestamps()
    })
  }

  down () {
    this.drop('persons')
  }
}

module.exports = PersonsSchema