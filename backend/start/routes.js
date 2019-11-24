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

Route.group(() => {

    Route.post('login', 'UserController.login')
    Route.post('register', 'UserController.register')
    Route.get('getUser/:id', 'UserController.show')

}).prefix('users')

Route.group(() => {
    Route.post('create', 'ConvocatoryController.create')
    Route.post('update','ConvocatoryController.update')
    Route.post('destroy','ConvocatoryController.destroy')
}).prefix('Convocatories')

Route.group(() => {
    Route.post('create', 'EntityController.create')
    Route.post('update','EntityController.update')
    Route.post('destroy','EntityController.destroy')
}).prefix('Entities')

Route.group(() => {
    Route.post('create', 'PersonController.create')
    Route.post('update','PersonController.update')
    Route.post('destroy','PersonController.destroy')
}).prefix('Persons')

Route.group(() => {
    Route.post('create', 'ProjectController.create')
    Route.post('update','ProjectController.update')
    Route.post('destroy','ProjectController.destroy')
}).prefix('Projects')

Route.group(() => {
    Route.post('create', 'ResearcherController.create')
    Route.post('update','ResearcherController.update')
    Route.post('destroy','ResearcherController.destroy')
}).prefix('Researches')

Route.group(() => {
    Route.post('create', 'ResearchGroupController.create')
    Route.post('update','ResearchGroupController.update')
    Route.post('destroy','ResearchGroupController.destroy')
}).prefix('ResearchesGroup')

Route.group(() => {
    Route.post('create', 'ResearchSeederController.create')
    Route.post('update','ResearchSeederController.update')
    Route.post('destroy','ResearchSeederController.destroy')
}).prefix('ResearchesSeeder')