'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ResearcherTypesSchema extends Schema {
  up () {
    this.create('researcher_types', (table) => {
      table.increments()
      table.string('name',254)
      
    })
  }

  down () {
    this.drop('researcher_types')
  }
}

module.exports = ResearcherTypesSchema
