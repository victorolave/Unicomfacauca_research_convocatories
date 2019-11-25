'use strict'

const ResearchSeeders = use('App/Models/ResearchSeeder')

class ResearchSeederController {

    async index() {

		const ResearchSeeder = await ResearchSeeders.all()

		return ResearchSeeder.toJSON()
		
	}
	/**
	 * @deprecated
	 * @param {*} param0 
	 */
	async add({ view }) {
		return view.render('ResearchSeeder.add')
	}

	async store({ request }) {
		const ResearchSeeder = new ResearchSeeders()
		ResearchSeeder.name = request.input('name')
        ResearchSeeder.group_id = request.input('group_id')
        ResearchSeeder.program_id = request.input('program_id')
		await ResearchSeeder.save()
		return ResearchSeeder.toJSON();
	}
    async details({ params }) {
		console.log(params)
		const ResearchSeeder = await ResearchSeeders.find(params.id)
		return ResearchSeeder.toJSON();
		
	}
	/**
	 * @deprecated
	 * @param {*} param0 
	 */
	async edit({ params, view }) {
		const ResearchSeeder = await ResearchSeeders.find(params.id)
		return view.render('ResearchSeeder.edit', {
			ResearchSeeder
		})
	}

	async update ({params, request}){
		const ResearchSeeder = await ResearchSeeders.find(params.id)
		
        await ResearchSeeder.save()
		ResearchSeeder.name = request.input('name')
        ResearchSeeder.group_id = request.input('group_id')
        ResearchSeeder.program_id = request.input('program_id')
        return ResearchSeeder.toJSON();

	}
	async destroy({ params }) {
		const ResearchSeeder = await ResearchSeeders.find(params.id)
		await ResearchSeeder.delete()

		return ResearchSeeder.toJSON();
	}
}

module.exports = ResearchSeederController
