'use strict'

const User = use('App/Models/User')

class UserController {

    async register({request, response})
    {
        const {username, email, password} = request.only([
            'username',
            'email',
            'password'
        ])

        await User.create({
            username,
            email,
            password
        })

        return response.send({message: 'Usuario creado con exito!!'})  
    }

    async login({request, response, auth})
    {
        const {email, password} = request.only([
            'email',
            'password'
        ])

        const token = await auth.attempt(email, password)

        return response.json(token)
    }
    
    async show({params, response})
    {
        const user = await User.find(params.id)
        const res = {
            username: user.username,
            email: user.email
        }

        return response.json(res)
    }

}

module.exports = UserController
