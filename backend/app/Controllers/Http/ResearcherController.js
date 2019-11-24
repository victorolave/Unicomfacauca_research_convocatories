'use strict'

const Research = use('App/Models/Research')

class ResearcherController {

    async create({request, response}){
        const{person_id,type_id,rol_id,academic_program_id,research_group_seeder_id,weeks,hours_per_week}=request.only([
            'person_id',
            'type_id',
            'rol_id',
            'academic_program_id',
            'research_group_seeder_id',
            'weeks',
            'hours_per_week'
        ])

        await Research.create({
            person_id,
            type_id,
            rol_id,
            academic_program_id,
            research_group_seeder_id,
            weeks,
            hours_per_week

        })
        return response.send({message: 'Investigador creado con exito!'})
    }
    async update ({params, request, response}){
		const Researches = await Research.find(params.id)
		Researches.person_id = request.input('person_id')
		Researches.type_id = request.input('type_id')
		Researches.rol_id = request.input('rol_id')
		Researches.academic_program_id = request.input('academic_program_id')
		Researches.research_group_seeder_id = request.input('research_group_seeder_id')
		Researches.weeks = request.input('weeks')
		Researches.hours_per_week = request.input('hours_per_week')

        await Researches.save()

        return response.send({message:'Investigador editado con exito!'})

	}
	async destroy({ params, response }) {
		const Researches = await Research.find(params.id)
		await Researches.delete()

		return response.send({message: 'Investigador eliminado con exito!'})
	}
}

module.exports = ResearcherController
