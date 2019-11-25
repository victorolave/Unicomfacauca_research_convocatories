'use strict'

const Researchers = use('App/Models/Research')

class ResearcherController {
    async index({ view }) {

		const Researcher = await Researchers.all()

		return view.render('Researcher.index', {
			Researchers: Researcher.toJSON()
		})
	}

	async add({ view }) {
		return view.render('Researcher.add')
	}

	async store({ request, response, view }) {
		const Researcher = new Researchers()
		Researcher.person_id = request.input('person_id')
        Researcher.type_id = request.input('type_id')
        Researcher.rol_id = request.input('rol_id')
		Researcher.academic_program_id = request.input('academic_program_id')
        Researcher.research_group_seeder_id = request.input('research_group_seeder_id')
        Researcher.weeks = request.input('weeks')
        Researcher.hours_per_week = request.input('hours_per_week')
		await Researcher.save()
		return response.redirect('/Researchers')
	}
    async details({ params, view }) {
		console.log(params)
		const Researcher = await Researchers.find(params.id)
		return view.render('Researcher.details', {
			Researcher
		})
	}
	async edit({ params, view }) {
		const Researcher = await Researchers.find(params.id)
		return view.render('Researcher.edit', {
			Researcher
		})
	}

	async update ({params, request, response}){
		const Researcher = await Researchers.find(params.id)
        Researcher.person_id = request.input('person_id')
        Researcher.type_id = request.input('type_id')
        Researcher.rol_id = request.input('rol_id')
		Researcher.academic_program_id = request.input('academic_program_id')
        Researcher.research_group_seeder_id = request.input('research_group_seeder_id')
        Researcher.weeks = request.input('weeks')
        Researcher.hours_per_week = request.input('hours_per_week')
        await Researcher.save()

        return response.redirect('/Researchers')

	}
	async destroy({ params, response }) {
		const Researcher = await Researchers.find(params.id)
		await Researcher.delete()

		return response.redirect('/Researchers')
	}
}

module.exports = ResearcherController
