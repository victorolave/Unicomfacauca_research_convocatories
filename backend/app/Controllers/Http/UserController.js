'use strict'

const User = use('App/Models/User')

class UserController {
    /**
     * @desc Metodo para registrar un nuevo usuario. 
     */
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

    /**
     * @desc Metodo para ingreso de usuarios
     */
    async login({request, response, auth})
    {
        const {email, password} = request.only([
            'email',
            'password'
        ])

        const token = await auth.attempt(email, password)

        return response.json(token)
    }
    
    /**
     * @desc Metodo para mostrar usuuario especifico.
     */
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
