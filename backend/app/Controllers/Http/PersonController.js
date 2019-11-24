'use strict'

const Person = use('App/Models/Person')

class PersonController {
    async create({request, response}){
        const{first_name,second_name,last_name,second_last_name,age,identification_type_id,idetification,birthday,address,email,phone_number,entity_id,ocupation}=request.only([
            'first_name',
            'second_name',
            'last_name',
            'second_last_name',
            'age',
            'identification_type_id',
            'identification',
            'birthday',
            'address',
            'email',
            'phone_number',
            'entity_id',
            'ocupation'
        ])

        await Person.create({
            first_name,
            second_name,
            last_name,
            second_last_name,
            age,
            identification_type_id,
            idetification,
            birthday,
            address,
            email,
            phone_number,
            entity_id,
            ocupation
        })
        return response.send({message: 'Persona creada con exito!'})
    }
    async update ({params, request, response}){
		const Persona = await Person.find(params.id)
		Persona.first_name = request.input('first_name')
		Persona.second_name = request.input('second_name')
		Persona.last_name = request.input('last_name')
		Persona.second_last_name = request.input('second_last_name')
		Persona.age = request.input('age')
        Persona.identification_type_id = request.input('identification_type_id')
        Persona.idetification = request.input('idetification')
		Persona.birthday = request.input('birthday')
        Persona.address = request.input('address')
        Persona.email = request.input('email')
		Persona.phone_number = request.input('phone_number')
		Persona.entity_id = request.input('entity_id')
        Persona.ocupation = request.input('ocupation')
        
        await Persona.save()

        return response.send({message:'Persona editada con exito!'})

	}
	async destroy({ params, response }) {
		const Persona = await Person.find(params.id)
		await Persona.delete()

		return response.send({message: 'Persona eliminada con exito!'})
	}
}

module.exports = PersonController
