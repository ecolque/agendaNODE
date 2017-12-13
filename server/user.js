const mongoose = require('mongoose')
	const Schema = mongoose.Schema

	let UsuarioSchema = new Schema({
		email:{ type: String, require: true, unique:true },
		username:{ type: String, require: true },
		password:{ type: String, require: true },
		birth:{ type: String, require: true }
	})
	let UserModel = mongoose.model('Usuario', UsuarioSchema)
	module.exports = UserModel

