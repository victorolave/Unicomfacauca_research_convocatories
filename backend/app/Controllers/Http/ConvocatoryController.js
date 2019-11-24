'use strict'

const Convocatory = use('App/Models/Convocatory')

class ConvocatoryController {

    async index({ view }) {

		const Convocatoria = await Convocatory.all()

		return view.render('Convocatory.index', {
			Convocatorias: Convocatoria.toJSON()
		})
	}

	async add({ view }) {
		return view.render('Convocatory.add')
	}

	async store({ request, response, view }) {
		const Convocatoria = new Convocatory()
		Convocatoria.name = request.input('name')
        Convocatoria.type = request.input('type')
        Convocatoria.year = request.input('year')
		Convocatoria.start_date = request.input('start_date')
		Convocatoria.end_date = request.input('end_date')
		await Convocatoria.save()
		return response.redirect('/Convocatories')
	}
    async details({ params, view }) {
		console.log(params)
		const Convocatoria = await Convocatory.find(params.id)
		return view.render('Convocatory.details', {
			Convocatoria
		})
	}
	async edit({ params, view }) {
		const Convocatoria = await Convocatory.find(params.id)
		return view.render('Convocatory.edit', {
			Convocatoria
		})
	}

	async update ({params, request, response}){
		const Convocatoria = await Convocatory.find(params.id)
		Convocatoria.name = request.input('name')
		Convocatoria.type = request.input('type')
		Convocatoria.year = request.input('year')
		Convocatoria.start_date = request.input('start_date')
		Convocatoria.end_date = request.input('end_date')

        await Convocatoria.save()

        return response.redirect('/Convocatories')

	}
	async destroy({ params, response }) {
		const Convocatoria = await Convocatory.find(params.id)
		await Convocatoria.delete()

		return response.redirect('/Convocatories')
	}
}

module.exports = ConvocatoryController
