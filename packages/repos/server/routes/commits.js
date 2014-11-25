'use strict';

var commits = require('../controllers/commits'); 

// The Package is past automatically as first parameter
module.exports = function(Repos, app, auth, database, io) {

    app.get('/:username/commits', function(req,res,io){
    	commits.userCommits(req,res,io,function(err,result){
    		if(err)
    			res.send('Error occured');
    		else
    			res.jsonp(result);
    	});
    });
    app.get('/repos/:reposlug/commits', commits.repoCommits);
    app.get('/commits/:id', commits.getCommit);

    app.post('/commits', commits.createCommit);
};