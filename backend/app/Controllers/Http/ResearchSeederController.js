'use strict'

const ResearchSeeders = use('App/Models/ResearchSeeder')

class ResearchSeederController {

    async index({ view }) {

		const ResearchSeeder = await ResearchSeeders.all()

		return view.render('ResearchSeeder.index', {
			ResearchSeeders: ResearchSeeder.toJSON()
		})
	}

	async add({ view }) {
		return view.render('ResearchSeeder.add')
	}

	async store({ request, response, view }) {
		const ResearchSeeder = new ResearchSeeders()
		ResearchSeeder.name = request.input('name')
        ResearchSeeder.group_id = request.input('group_id')
        ResearchSeeder.program_id = request.input('program_id')
		await ResearchSeeder.save()
		return response.redirect('/ResearchSeeders')
	}
    async details({ params, view }) {
		console.log(params)
		const ResearchSeeder = await ResearchSeeders.find(params.id)
		return view.render('ResearchSeeder.details', {
			ResearchSeeder
		})
	}
	async edit({ params, view }) {
		const ResearchSeeder = await ResearchSeeders.find(params.id)
		return view.render('ResearchSeeder.edit', {
			ResearchSeeder
		})
	}

	async update ({params, request, response}){
		const ResearchSeeder = await ResearchSeeders.find(params.id)

        await ResearchSeeder.save()
		ResearchSeeder.name = request.input('name')
        ResearchSeeder.group_id = request.input('group_id')
        ResearchSeeder.program_id = request.input('program_id')
        return response.redirect('/ResearchSeeders')

	}
	async destroy({ params, response }) {
		const ResearchSeeder = await ResearchSeeders.find(params.id)
		await ResearchSeeder.delete()

		return response.redirect('/ResearchSeeders')
	}
}

module.exports = ResearchSeederController