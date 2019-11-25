'use strict'

const Projects = use('App/Models/Project')


class ProjectController {
    
    async index() {

		const Project = await Projects.all()

		return Project.toJSON()
		
	}
/**
 * @deprecated
 * @param {*} param0 
 */
	async add({ view }) {
		return view.render('Project.add')
	}

	async store({ request }) {
		const Project = new Projects()
		Project.title = request.input('title')
        Project.area_id = request.input('area_id')
        Project.line_id = request.input('line_id')
		Project.campus = request.input('campus')
        Project.action_place = request.input('action_place')
        Project.duration = request.input('duration')
        Project.unicomfacauca_net_cash = request.input('unicomfacauca_net_cash')
        Project.unicomfacauca_species = request.input('unicomfacauca_species')
        Project.entity_id = request.input('entity_id')
        Project.entity_net_cash = request.input('entity_net_cash')
        Project.entity_species = request.input('entity_species')
        Project.project_type_id = request.input('project_type_id')
        Project.keywords = request.input('keywords')
        Project.convocatories_id = request.input('convocatories_id')
		await Project.save()
		return Project.toJSON();
	}
    async details({ params }) {
		console.log(params)
		const Project = await Projects.find(params.id)
		return Project.toJSON();
	
	}
	/**
	 * @deprecated
	 * @param {*} param0 
	 */
	async edit({ params, view }) {
		const Project = await Projects.find(params.id)
		return view.render('Project.edit', {
			Project
		})
	}

	async update ({params, request, response}){
		const Project = await Projects.find(params.id)
		Project.title = request.input('title')
        Project.area_id = request.input('area_id')
        Project.line_id = request.input('line_id')
		Project.campus = request.input('campus')
        Project.action_place = request.input('action_place')
        Project.duration = request.input('duration')
        Project.unicomfacauca_net_cash = request.input('unicomfacauca_net_cash')
        Project.unicomfacauca_species = request.input('unicomfacauca_species')
        Project.entity_id = request.input('entity_id')
        Project.entity_net_cash = request.input('entity_net_cash')
        Project.entity_species = request.input('entity_species')
        Project.project_type_id = request.input('project_type_id')
        Project.keywords = request.input('keywords')
        Project.convocatories_id = request.input('convocatories_id')
        await Project.save()

        return Project.toJSON();

	}
	async destroy({ params }) {
		const Project = await Projects.find(params.id)
		await Project.delete()

		return Project.toJSON();
	}
}

module.exports = ProjectController
