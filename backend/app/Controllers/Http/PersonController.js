'use strict'

const Persons = use('App/Models/Person')

class PersonController {

    async index({ view }) {

		const Person = await Persons.all()

		return view.render('Person.index', {
			Persons: Person.toJSON()
		})
	}

	async add({ view }) {
		return view.render('Person.add')
	}

	async store({ request, response, view }) {
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
		return response.redirect('/Persons')
	}
    async details({ params, view }) {
		console.log(params)
		const Person = await Persons.find(params.id)
		return view.render('Person.details', {
			Person
		})
	}
	async edit({ params, view }) {
		const Person = await Persons.find(params.id)
		return view.render('Person.edit', {
			Person
		})
	}

	async update ({params, request, response}){
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

        return response.redirect('/Persons')

	}
	async destroy({ params, response }) {
		const Person = await Persons.find(params.id)
		await Person.delete()

		return response.redirect('/Persons')
	}
}

module.exports = PersonController
