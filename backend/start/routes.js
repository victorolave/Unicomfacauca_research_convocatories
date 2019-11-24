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

Route.delete('Entities/:id', 'ConvocatoryController.destroy')

Route.get('Entities', 'EntityController.index')

Route.get('Entities/add', 'EntityController.add')
Route.post('Entities', 'EntityController.store')

Route.get('Entities/:id', 'EntityController.details')

Route.get('Entities/edit/:id', 'EntityController.edit')
Route.put('Entities/:id', 'EntityController.update')

Route.delete('Entities/:id', 'EntityController.destroy')
