'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ResearchGroupsSchema extends Schema {
  up () {
    this.create('research_groups', (table) => {
      table.increments()
      table.string('name',254)
      table.integer('linea_id')
      table.string('colciencias_classification', 1)
      table.string('cocliencias_status', 254)
      table.integer('director_id')
      table.integer('research_seedbed_id')
      table.integer('entity_id')
      table.integer('contact_person_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('research_groups')
  }
}

module.exports = ResearchGroupsSchema
