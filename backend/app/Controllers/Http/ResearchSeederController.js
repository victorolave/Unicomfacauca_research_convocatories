'use strict'

const ResearchSeeder = use('App/Models/ResearchSeeder')

class ResearchSeederController {
    async create({ request, response }) {
        const { name, group_id, program_id } = request.only([
            'name',
            'group_id',
            'program_id'
        ])

        await ResearchSeeder.create({
            name,
            group_id,
            program_id
        })
        return response.send({ message: 'Semillero de Investigacion creado con exito!' })
    }
    async update({ params, request, response }) {
        const Semillero = await ResearchSeeder.find(params.id)
        Semillero.name = request.input('name')
        Semillero.group_id = request.input('group_id')
        Semillero.program_id = request.input('program_id')


        await Semillero.save()

        return response.send({ message: 'Semillero de Investigacion editado con exito!' })

    }
    async destroy({ params, response }) {
        const Semillero = await ResearchSeeder.find(params.id)
        await Semillero.delete()

        return response.send({ message: 'Semillero de Investigacion eliminado con exito!' })
    }
}

module.exports = ResearchSeederController
