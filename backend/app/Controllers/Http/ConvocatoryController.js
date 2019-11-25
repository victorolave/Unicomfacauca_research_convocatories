'use strict'

const Convocatory = use('App/Models/Convocatory')

class ConvocatoryController {

    async index() {

		const Convocatoria = await Convocatory.all()

		return Convocatoria.toJSON();
		
	}
/**
 * @deprecated
 * @param {*} param0 
 */
	async add({ view }) {
		return view.render('Convocatory.add')
	}

	async store({ request }) {
		const Convocatoria = new Convocatory()
		Convocatoria.name = request.input('name')
        Convocatoria.type = request.input('type')
        Convocatoria.year = request.input('year')
		Convocatoria.start_date = request.input('start_date')
		Convocatoria.end_date = request.input('end_date')
		await Convocatoria.save()
		return Convocatoria.toJSON();
	}
    async details({ params }) {
		console.log(params)
		const Convocatoria = await Convocatory.find(params.id)

		return Convocatoria.toJSON();
	}
	/**
	 * @deprecated
	 * @param {} param0 
	 */
	async edit({ params }) {
		const Convocatoria = await Convocatory.find(params.id)
		return Convocatoria
		
	}

	async update ({params, request}){
		const Convocatoria = await Convocatory.find(params.id)
		Convocatoria.name = request.input('name')
		Convocatoria.type = request.input('type')
		Convocatoria.year = request.input('year')
		Convocatoria.start_date = request.input('start_date')
		Convocatoria.end_date = request.input('end_date')

        await Convocatoria.save()

        return Convocatoria.toJSON();

	}
	async destroy({ params }) {
		const Convocatoria = await Convocatory.find(params.id)
		await Convocatoria.delete()

		return Convocatoria.toJSON();
	}
}

module.exports = ConvocatoryController
