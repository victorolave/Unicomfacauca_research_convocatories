'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjectRolsSchema extends Schema {
  up () {
    this.create('project_rols', (table) => {
      table.increments()
      table.string('name',254)
      
    })
  }

  down () {
    this.drop('project_rols')
  }
}

module.exports = ProjectRolsSchema
