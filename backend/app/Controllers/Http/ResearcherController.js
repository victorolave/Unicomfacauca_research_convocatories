'use strict'

const Researchers = use('App/Models/Research')

class ResearcherController {
    async index() {

		const Researcher = await Researchers.all()

		return Researcher.toJSON()
	
	}
	/**
	 * @deprecated
	 * @param {*} param0 
	 */
	async add({ view }) {
		return view.render('Researcher.add')
	}

	async store({ request }) {
		const Researcher = new Researchers()
		Researcher.person_id = request.input('person_id')
        Researcher.type_id = request.input('type_id')
        Researcher.rol_id = request.input('rol_id')
		Researcher.academic_program_id = request.input('academic_program_id')
        Researcher.research_group_seeder_id = request.input('research_group_seeder_id')
        Researcher.weeks = request.input('weeks')
        Researcher.hours_per_week = request.input('hours_per_week')
		await Researcher.save()
		return Researcher.toJSON();
	}
    async details({ params }) {
		console.log(params)
		const Researcher = await Researchers.find(params.id)
		return Researcher.toJSON();
		
	}
	/**
	 * @deprecated
	 * @param {*} param0 
	 */
	async edit({ params, view }) {
		const Researcher = await Researchers.find(params.id)
		return view.render('Researcher.edit', {
			Researcher
		})
	}

	async update ({params, request}){
		const Researcher = await Researchers.find(params.id)
        Researcher.person_id = request.input('person_id')
        Researcher.type_id = request.input('type_id')
        Researcher.rol_id = request.input('rol_id')
		Researcher.academic_program_id = request.input('academic_program_id')
        Researcher.research_group_seeder_id = request.input('research_group_seeder_id')
        Researcher.weeks = request.input('weeks')
        Researcher.hours_per_week = request.input('hours_per_week')
        await Researcher.save()

        return Researcher.toJSON();

	}
	async destroy({ params }) {
		const Researcher = await Researchers.find(params.id)
		await Researcher.delete()

		return Researcher.toJSON();
	}
}

module.exports = ResearcherController
