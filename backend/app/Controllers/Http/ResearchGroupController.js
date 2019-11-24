'use strict'

const ResearchGroup = use('App/Models/ResearchGroup')

class ResearchGroupController {
    async create({request, response}){
        const{name,linea_id,colciencias_classification,cocliencias_status,director_id,research_seedbed_id,entity_id,contact_person_id}=request.only([
            'name',
            'linea_id',
            'colciencias_classification',
            'cocliencias_status',
            'director_id',
            'research_seedbed_id',
            'entity_id',
            'contact_person_id'
        ])

        await ResearchGroup.create({
            name,
            linea_id,
            colciencias_classification,
            cocliencias_status,
            director_id,
            research_seedbed_id,
            entity_id,
            contact_person_id
        })
        return response.send({message: 'Grupo de Investigacion creado con exito!'})
    }
    async update ({params, request, response}){
		const ResearchG = await ResearchGroup.find(params.id)
		ResearchG.name = request.input('name')
		ResearchG.linea_id = request.input('linea_id')
		ResearchG.colciencias_classification = request.input('colciencias_classification')
        ResearchG.cocliencias_status = request.input('cocliencias_status')
		ResearchG.director_id = request.input('director_id')
		ResearchG.research_seedbed_id = request.input('research_seedbed_id')
        ResearchG.entity_id = request.input('entity_id')
		ResearchG.contact_person_id = request.input('contact_person_id')		
		
        await ResearchG.save()

        return response.send({message:'Grupo de Investigacion editado con exito!'})

	}
	async destroy({ params, response }) {
		const ResearchG = await ResearchGroup.find(params.id)
		await ResearchG.delete()

		return response.send({message: 'Grupo de Investigacion eliminado con exito!'})
	}
}

module.exports = ResearchGroupController
