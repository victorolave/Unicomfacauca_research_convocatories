'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ResearchLinesSchema extends Schema {
  up () {
    this.create('research_lines', (table) => {
      table.increments()
      table.string('name',254)
      
    })
  }

  down () {
    this.drop('research_lines')
  }
}

module.exports = ResearchLinesSchema
