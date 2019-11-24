'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjectTypesSchema extends Schema {
  up () {
    this.create('project_types', (table) => {
      table.increments()
      table.string('name',254)
      
    })
  }

  down () {
    this.drop('project_types')
  }
}

module.exports = ProjectTypesSchema
