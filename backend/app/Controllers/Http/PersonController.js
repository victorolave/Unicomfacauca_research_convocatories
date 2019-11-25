'use strict'

const Persons = use('App/Models/Person')

class PersonController {

    async index() {

		const Person = await Persons.all()

		return Person.toJSON()
		
	}
	/**
	 * @deprecated
	 * @param {*} param0 
	 */

	async add({ view }) {
		return view.render('Person.add')
	}

	async store({ request }) {
		const Person = new Persons()
		Person.first_name = request.input('first_name')
        Person.second_name = request.input('second_name')
        Person.last_name = request.input('last_name')
		Person.second_last_name = request.input('second_last_name')
        Person.age = request.input('age')
        Person.identification_type_id = request.input('identification_type_id')
        Person.idetification = request.input('idetification')
        Person.birthday = request.input('birthday')
        Person.address = request.input('address')
        Person.email = request.input('email')
        Person.phone_number = request.input('phone_number')
        Person.entity_id = request.input('entity_id')
        Person.ocupation = request.input('ocupation')
		await Person.save()
		return Person.toJSON();
	}
    async details({ params }) {
		console.log(params)
		const Person = await Persons.find(params.id)
		return Person.toJSON
		
	}
	/**
	 * @deprecated
	 * @param {*} param0 
	 */

	async edit({ params, view }) {
		const Person = await Persons.find(params.id)
		return view.render('Person.edit', {
			Person
		})
	}

	async update ({params, request}){
		const Person = await Persons.find(params.id)
		Person.first_name = request.input('first_name')
        Person.second_name = request.input('second_name')
        Person.last_name = request.input('last_name')
		Person.second_last_name = request.input('second_last_name')
        Person.age = request.input('age')
        Person.identification_type_id = request.input('identification_type_id')
        Person.idetification = request.input('idetification')
        Person.birthday = request.input('birthday')
        Person.address = request.input('address')
        Person.email = request.input('email')
        Person.phone_number = request.input('phone_number')
        Person.entity_id = request.input('entity_id')
        Person.ocupation = request.input('ocupation')
        await Person.save()

        return Person.toJSON();

	}
	async destroy({ params }) {
		const Person = await Persons.find(params.id)
		await Person.delete()

		return Person.toJSON();
	}
}

module.exports = PersonController
