'use strict'

const Project = use('App/Models/Project')

class ProjectController {

    async create({request, response}){
        const{title,area_id,line_id,campus,action_place,duration,unicomfacauca_net_cash,unicomfacauca_species,entity_id,entity_net_cash,entity_species,project_type_id,keywords,convocatories_id}=request.only([
            'title',
            'area_id',
            'line_id',
            'campus',
            'action_place',
            'duration',
            'unicomfacauca_net_cash',
            'unicomfacauca_species',
            'entity_id',
            'entity_net_cash',
            'entity_species',
            'project_type_id',
            'keywords',
            'convocatories_id'
        ])

        await Project.create({
            title,
            area_id,
            line_id,
            campus,
            action_place,
            duration,
            unicomfacauca_net_cash,
            unicomfacauca_species,
            entity_id,
            entity_net_cash,
            entity_species,
            project_type_id,
            keywords,
            convocatories_id


        })
        return response.send({message: 'Proyecto creado con exito!'})
    }
    async update ({params, request, response}){
		const Project = await Project.find(params.id)
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

        return response.send({message:'Proyecto editado con exito!'})

	}
	async destroy({ params, response }) {
		const Project = await Project.find(params.id)
		await Project.delete()

		return response.send({message: 'Proyecto eliminado con exito!'})
	}
}

module.exports = ProjectController
