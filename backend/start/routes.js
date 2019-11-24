'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('Convocatories', 'ConvocatoryController.index')

Route.get('Convocatories/add', 'ConvocatoryController.add')
Route.post('Convocatories', 'ConvocatoryController.store')

Route.get('Convocatories/:id', 'ConvocatoryController.details')

Route.get('Convocatories/edit/:id', 'ConvocatoryController.edit')
Route.put('Convocatories/:id', 'ConvocatoryController.update')

Route.delete('Convocatories/:id', 'ConvocatoryController.destroy')

/*_____________________________________________________________________*/

Route.get('Entities', 'EntityController.index')

Route.get('Entities/add', 'EntityController.add')
Route.post('Entities', 'EntityController.store')

Route.get('Entities/:id', 'EntityController.details')

Route.get('Entities/edit/:id', 'EntityController.edit')
Route.put('Entities/:id', 'EntityController.update')

Route.delete('Entities/:id', 'EntityController.destroy')

/*_____________________________________________________________________*/

Route.get('Persons', 'PersonController.index')

Route.get('Persons/add', 'PersonController.add')
Route.post('Persons', 'PersonController.store')

Route.get('Persons/:id', 'PersonController.details')

Route.get('Persons/edit/:id', 'PersonController.edit')
Route.put('Persons/:id', 'PersonController.update')

Route.delete('Persons/:id', 'PersonController.destroy')

/*_____________________________________________________________________*/

Route.get('Projects', 'ProjectController.index')

Route.get('Projects/add', 'ProjectController.add')
Route.post('Projects', 'ProjectController.store')

Route.get('Projects/:id', 'ProjectController.details')

Route.get('Projects/edit/:id', 'ProjectController.edit')
Route.put('Projects/:id', 'ProjectController.update')

Route.delete('Projects/:id', 'ProjectController.destroy')

/*_____________________________________________________________________*/

Route.get('Researchers', 'ProjectController.index')

Route.get('Researchers/add', 'ResearcherController.add')
Route.post('Researchers', 'ResearcherController.store')

Route.get('Researchers/:id', 'ResearcherController.details')

Route.get('Researchers/edit/:id', 'ResearcherController.edit')
Route.put('Researchers/:id', 'ResearcherController.update')

Route.delete('Researchers/:id', 'ResearcherController.destroy')

/*_____________________________________________________________________*/

Route.get('ResearchGroups', 'ResearchGroupController.index')

Route.get('ResearchGroups/add', 'ResearchGroupController.add')
Route.post('ResearchGroups', 'ResearchGroupController.store')

Route.get('ResearchGroups/:id', 'ResearchGroupController.details')

Route.get('ResearchGroups/edit/:id', 'ResearchGroupController.edit')
Route.put('ResearchGroups/:id', 'ResearchGroupController.update')

Route.delete('ResearchGroups/:id', 'ResearchGroupController.destroy')

/*_____________________________________________________________________*/

Route.get('ResearchSeeders', 'ResearchSeederController.index')

Route.get('ResearchSeeders/add', 'ResearchSeederController.add')
Route.post('ResearchSeeders', 'ResearchSeederController.store')

Route.get('ResearchSeeders/:id', 'ResearchSeederController.details')

Route.get('ResearchSeeders/edit/:id', 'ResearchSeederController.edit')
Route.put('ResearchSeeders/:id', 'ResearchSeederController.update')

Route.delete('ResearchSeeders/:id', 'ResearchSeederController.destroy')