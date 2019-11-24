'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjectsSchema extends Schema {
  up () {
    this.create('projects', (table) => {
      table.increments()
      table.string('title', 128)
      table.integer('area_id', 254)
      table.integer('line_id', 254)
      table.string('campus', 254)
      table.string('action_place', 254)
      table.integer('duration')
      table.integer('unicomfacauca_net_cash')
      table.integer('unicomfacauca_species')
      table.integer('entity_id')
      table.integer('entity_net_cash')
      table.integer('entity_species')
      table.integer('project_type_id')
      table.string('keywords',255)
      table.integer('convocatories_id',10)
      table.timestamps()
    })
  }

  down () {
    this.drop('projects')
  }
}

module.exports = ProjectsSchema
