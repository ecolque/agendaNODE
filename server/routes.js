const Router = require('express').Router();
const Users = require('./user.js')
const Events = require('./evento.js')


// Login
Router.post('/login', function(req, res) {  
     let user = req.body.username;
     let pass = req.body.password;     
    Users.findOne({username: user}).exec(function(err, data){
        if (err) {
            res.status(500)
            res.json(err)
        }else{
         if (data) {
             if (data.password == pass) {
                res.send("Validado")
             } else {
                res.send("Password no valido")
             }
          } else {
             res.send("Usuario no existe")
          }
        }       
    })
})

//obtener todos
Router.get('/all', function(req, res) {
    Events.find({}).exec(function(err, data) {
        if (err) {
            res.status(500)
            res.json(err)
        }        
        console.log(data);
        res.json(data)        
    })
})

// Agregar a un evento
Router.post('/new', function(req, res) {  
    let evento = new Events({
        id: Math.floor(Math.random() * 50),
        title: req.body.title,
        start: req.body.start,
        end: req.body.end
    })
    evento.save(function(error) {
        if (error) {
            res.status(500)
            res.json(error)
        }
        res.send("Registro guardado")
    })
})

// Update a un usuario
Router.post('/update', function(req, res) {
   /* let evento = new Events({
        id: req.body.id,
        title: req.body.title,
        start: req.body.start,
        end: req.body.end
    })*/

    try {
          var myquery = { id: req.body.id };
          var newvalues = { start: req.body.start, end: req.body.end };

        Events.update(myquery, newvalues,function(error) {
            if (error) {
                res.status(500)
                res.json(error)
            }
            console.log(newvalues)
            res.send("Evento Actualizado")
        })
    } catch(e) {
       res.send(e.message)
    }
})

// Eliminar un evento por su id
Router.post('/delete', function(req, res) {
    let uid = req.body.id
    Events.remove({id: uid}, function(error) {
        if(error) {
            res.status(500)
            res.json(error)
        }
        res.send("Registro eliminado")
    })
})

module.exports = Router
