const http = require('http'),
	path = require('path'),
	Routing = require('./routes.js')
	express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose');

const Users = require('./user.js')

const PORT = 3000
const app = express()

const Server = http.createServer(app)

var createUser = require('./createUsers.js')


mongoose.connect('mongodb://localhost/edwin')

app.use(express.static('../client'))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true }))
app.use('/events', Routing)


Server.listen(PORT, function(){
   createUser.insertUser((error, result) => {
    if(error) console.log(error)
      console.log(result)
   })	
	console.log("Servidor corriendo por puerto: " + PORT)
})

