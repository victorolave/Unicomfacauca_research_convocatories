'use strict'

const Convocatory = use('App/Models/Convocatory')

class ConvocatoryController {

    /**
     * @desc  
     */
    async create({request, response}){
        const{name,type,year,start_date,end_date}=request.only([
            'name',
            'type',
            'year',
            'start_date',
            'end_date'
        ])

        await Convocatory.create({
            name,
            type,
            year,
            start_date,
            end_date
        })
        return response.send({message: 'Convocatoria creada con exito!'})
    }
    async update ({params, request, response}){
		const Convocatoria = await Convocatory.find(params.id)
		Convocatoria.name = request.input('name')
		Convocatoria.type = request.input('type')
		Convocatoria.year = request.input('year')
		Convocatoria.start_date = request.input('start_date')
		Convocatoria.end_date = request.input('end_date')
		

        await Convocatoria.save()

        return response.send({message:'Convocatoria editada con exito!'})

	}
	async destroy({ params, response }) {
		const Convocatoria = await Convocatory.find(params.id)
		await Convocatoria.delete()

		return response.send({message: 'Convocatoria eliminada con exito!'})
	}
}

module.exports = ConvocatoryController
