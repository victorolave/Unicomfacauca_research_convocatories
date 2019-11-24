'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ResearchSeederSchema extends Schema {
  up () {
    this.create('research_seeders', (table) => {
      table.increments()
      table.string('name',254)
      table.string('group_id',10)
      table.string('program_id',10)
      table.timestamps()
    })
  }

  down () {
    this.drop('research_seeders')
  }
}

module.exports = ResearchSeederSchema
