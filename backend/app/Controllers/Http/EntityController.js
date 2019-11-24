'use strict'

const Entity = use('App/Models/Entity')

class EntityController {
    async create({request, response}){
        const{name,nit,legal_representative_id,sector,entity_type_id,rol_id,country,address,email,web,contact_person_id}=request.only([
            'name',
            'nit',
            'legal_representative_id',
            'sector',
            'entity_type_id',
            'rol_id',
            'country',
            'address',
            'email',
            'web',
            'contact_person_id'
        ])

        await Entity.create({
            name,
            nit,
            legal_representative_id,
            sector,
            entity_type_id,
            rol_id,
            country,
            address,
            email,
            web,
            contact_person_id
        })
        return response.send({message: 'Entidad creada con exito!'})
    }
    async update ({params, request, response}){
		const Entidad = await Entity.find(params.id)
		Entidad.name = request.input('name')
		Entidad.nit = request.input('nit')
		Entidad.legal_representative_id = request.input('legal_representative_id')
		Entidad.sector = request.input('sector')
		Entidad.entity_type_id = request.input('entity_type_id')
		Entidad.rol_id = request.input('rol_id')
		Entidad.country = request.input('country')
		Entidad.address = request.input('address')
		Entidad.email = request.input('email')
        Entidad.web = request.input('web')
        Entidad.contact_person_id = request.input('contact_person_id')

        await Entidad.save()

        return response.send({message:'Entidad editada con exito!'})

	}
	async destroy({ params, response }) {
		const Entidad = await Entity.find(params.id)
		await Entidad.delete()

		return response.send({message: 'Entidad eliminada con exito!'})
	}
}


module.exports = EntityController
