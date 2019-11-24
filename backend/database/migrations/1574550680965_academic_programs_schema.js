'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AcademicProgramsSchema extends Schema {
  up () {
    this.create('academic_programs', (table) => {
      table.increments()
      table.string('name', 254)
    })
  }

  down () {
    this.drop('academic_programs')
  }
}

module.exports = AcademicProgramsSchema
