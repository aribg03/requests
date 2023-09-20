const express = require('express')
const app = express()

app.get('/:user/:password', (req, res) => {
    const {user, password} = req.params

    if (user==='arizbeth' && password==='123'){
        res.json({msg: 'Inicio de sesión exitoso'})
        return
    }
    res.status(404).json({msg: 'Error en el usuario o la contraseña'})
})

//http://localhost:3000/login?user=arizbeth&password=123
app.get('/login',(req, res) => {//la combinacion de una ruta y su totalidad se denomina endpoint
    const {user,password} = req.query
    if (!user || !password){
        res.status(400).json({
            msg:'You need to provide <user> and <password> parameter'
        })
        return
    }
    if (user==='arizbeth' && password==='123'){
        res.json({msg: 'Inicio de sesión exitoso'})
        return
    }
    res.status(404).json({msg: 'Error en el usuario o la contraseña'})
})

app.post('/',(req, res) => {res.json({msg: 'Hola POST'})})
app.put('/',(req, res) => {res.json({msg: 'Hola PUT'})})
app.patch('/',(req, res) => {res.json({msg: 'Hola PATCH'})})
app.delete('/',(req, res) => {res.json({msg: 'Hola DELETE'})})

/*FUNCIONALIDAD*/

app.listen(3000, () => {
    console.log('listening on port 3000')
})
