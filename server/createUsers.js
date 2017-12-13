var User = require('./user.js')

module.exports.insertUser = function(callback){
	deleteUser('user1');
	deleteUser('user2');
	deleteUser('user3');
	
	let user1 = new User({
       username:'user1',
       email:'user1',
       password:'user1'
    })
    user1.save(function(error) {
        if (error)  callback(error);        
        callback(null, "User1 guardado");        
    })

    let user2 = new User({
       username:'user2',
       email:'user2',
       password:'user2'
    })
    user2.save(function(error) {
        if (error)  callback(error);        
        callback(null, "User2 guardado");        
    })

    let user3 = new User({
       username:'user3',
       email:'user3',
       password:'user3'
    })
    user3.save(function(error) {
        if (error)  callback(error);        
        callback(null, "User3 guardado");        
    })

}

function deleteUser(username){
	User.remove({username:username}, (error) => {})	
}
