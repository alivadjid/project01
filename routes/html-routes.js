const mysql = require('mysql');

module.exports = function(app, connection){
	app.get('/', function(req, res) {
		//res.send('<h1>Hello from simple-react project</h1>');
		connection.query('SELECT * FROM database01_schema_table', function(err, data){
			(err)? res.send(err) : res.json({users: data})
		})
	})
}
