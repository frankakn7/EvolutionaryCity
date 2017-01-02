var state = {
	capital: 10000,
	employees: 0,
	
	construct: {
		office: function(){
			buildOffice(10, 20000, Math.round(Math.random()*500), Math.round(Math.random()*500), 4, 'state');
		},
		residence: function(){
			buildResidence(10,20000,Math.round(Math.random()*500),Math.round(Math.random()*500),50,'state');
		},
	},
}