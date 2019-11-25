'use strict'

const ResearchGroups = use('App/Models/ResearchGroup')

class ResearchGroupController {
    async index({ view }) {

		const ResearchGroup = await ResearchGroups.all()

		return view.render('ResearchGroup.index', {
			ResearchGroups: ResearchGroup.toJSON()
		})
	}

	async add({ view }) {
		return view.render('ResearchGroup.add')
	}

	async store({ request, response, view }) {
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
		return response.redirect('/ResearchGroups')
	}
    async details({ params, view }) {
		console.log(params)
		const ResearchGroup = await ResearchGroups.find(params.id)
		return view.render('ResearchGroup.details', {
			ResearchGroup
		})
	}
	async edit({ params, view }) {
		const ResearchGroup = await ResearchGroups.find(params.id)
		return view.render('ResearchGroup.edit', {
			ResearchGroup
		})
	}

	async update ({params, request, response}){
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

        return response.redirect('/ResearchGroups')

	}
	async destroy({ params, response }) {
		const ResearchGroup = await ResearchGroups.find(params.id)
		await ResearchGroup.delete()

		return response.redirect('/ResearchGroups')
	}
}

module.exports = ResearchGroupController
