'use strict'

const Entityy = use('App/Models/Entity')

class EntityController {

    async index() {

		const Entity = await Entityy.all()

		return Entity.toJSON()
		
	}

	/**
	 * @deprecated
	 * @param {*} param0 
	 */

	async add({ view }) {
		return view.render('Entity.add')
	}

	async store({ request }) {
		const Entity = new Entityy()
		Entity.name = request.input('name')
        Entity.nit = request.input('nit')
        Entity.legal_representative_id = request.input('legal_representative_id')
		Entity.sector = request.input('sector')
        Entity.entity_type_id = request.input('entity_type_id')
        Entity.rol_id = request.input('rol_id')
        Entity.country = request.input('country')
        Entity.city = request.input('city')
        Entity.address = request.input('address')
        Entity.email = request.input('email')
        Entity.web = request.input('web')
        Entity.contact_person_id = request.input('contact_person_id')
		await Entity.save()
		return Entity.toJSON()
	}
    async details({ params, view }) {
		console.log(params)
		const Entity = await Entityy.find(params.id)
		return Entity.toJSON();
		
	}
	/**
	 * @deprecated
	 * @param {*} param0 
	 */
	
	async edit({ params, view }) {
		const Entity = await Entityy.find(params.id)
		return view.render('Entity.edit', {
			Entity
		})
	}

	async update ({params, request, response}){
		const Entity = await Entityy.find(params.id)
		Entity.name = request.input('name')
        Entity.nit = request.input('nit')
        Entity.legal_representative_id = request.input('legal_representative_id')
		Entity.sector = request.input('sector')
        Entity.entity_type_id = request.input('entity_type_id')
        Entity.rol_id = request.input('rol_id')
        Entity.country = request.input('country')
        Entity.city = request.input('city')
        Entity.address = request.input('address')
        Entity.email = request.input('email')
        Entity.web = request.input('web')
        Entity.contact_person_id = request.input('contact_person_id')

        await Entity.save()

        return Entity.toJSON()

	}
	async destroy({ params, response }) {
		const Entity = await Entityy.find(params.id)
		await Entity.delete()

		return Entity.toJSON()
	}
}

module.exports = EntityController
