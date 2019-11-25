'use strict'

const ResearchGroups = use('App/Models/ResearchGroup')

class ResearchGroupController {
    async index() {

		const ResearchGroup = await ResearchGroups.all()

		return ResearchGroup.toJSON()
		
	}
	/**
	 * @deprecated
	 * @param {*} param0 
	 */
	async add({ view }) {
		return view.render('ResearchGroup.add')
	}

	async store({ request }) {
		const ResearchGroup = new ResearchGroups()
		ResearchGroup.name = request.input('name')
        ResearchGroup.linea_id = request.input('linea_id')
        ResearchGroup.colciencias_classification = request.input('colciencias_classification')
		ResearchGroup.cocliencias_status = request.input('cocliencias_status')
        ResearchGroup.director_id = request.input('director_id')
        ResearchGroup.research_seedbed_id = request.input('research_seedbed_id')
        ResearchGroup.entity_id = request.input('entity_id')
        ResearchGroup.contact_person_id = request.input('contact_person_id')
        await ResearchGroup.save()
		return ResearchGroup.toJSON();
	}
    async details({ params }) {
		console.log(params)
		const ResearchGroup = await ResearchGroups.find(params.id)
		return ResearchGroup.toJSON();
		
	}
	/**
	 * @deprecated
	 * @param {*} param0 
	 */
	async edit({ params }) {
		const ResearchGroup = await ResearchGroups.find(params.id)
		return ResearchGroup
		
	}

	async update ({params, request}){
		const ResearchGroup = await ResearchGroups.find(params.id)
		ResearchGroup.name = request.input('name')
        ResearchGroup.linea_id = request.input('linea_id')
        ResearchGroup.colciencias_classification = request.input('colciencias_classification')
		ResearchGroup.cocliencias_status = request.input('cocliencias_status')
        ResearchGroup.director_id = request.input('director_id')
        ResearchGroup.research_seedbed_id = request.input('research_seedbed_id')
        ResearchGroup.entity_id = request.input('entity_id')
        ResearchGroup.contact_person_id = request.input('contact_person_id')
        await ResearchGroup.save()

        return ResearchGroup.toJSON();

	}
	async destroy({ params }) {
		const ResearchGroup = await ResearchGroups.find(params.id)
		await ResearchGroup.delete()

		return ResearchGroup.toJSON();
	}
}

module.exports = ResearchGroupController
