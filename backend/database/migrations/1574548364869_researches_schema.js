'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ResearchesSchema extends Schema {
  up () {
    this.create('researches', (table) => {
      table.increments()
      table.integer("person_id")
      table.integer("type_id")
      table.integer("rol_id")
      table.integer("academic_program_id")
      table.integer("research_group_seeder_id")
      table.integer("weeks")
      table.integer("hours_per_week")
      table.timestamps()
    })
  }

  down () {
    this.drop('researches')
  }
}

module.exports = ResearchesSchema
