var Song = require('./models/song');

// function getSong(res) {
//     song.find(function (err, animalesDomesticos) {
//         if (err) {
//             res.send(err);
//         }

//         res.json(animalesDomesticos);
//     });
// }

module.exports = function (app) {

    app.post('/login', (req, res) => {        
        if(Object.keys(req.body).length === 0){
            res.status(400).send("Your request is missing details.");
        }else{
            console.log('user authentificated: ' + JSON.stringify({token:'test123'}));
            res.send({
                token: 'test123'
            });
        }        
    });    

    app.get('/api/songs', (req, res) => {
        Song.find({}, function(err, songs){
            // console.log(songs);
            res.json(songs);
        });
        
    }); 

    app.post('/api/songs', (req, res) => {
        console.log(req.body);
        if(Object.keys(req.body).length === 0){
            res.status(400).send("Your request is missing details.");
        }else{

            Song.create({
                id: req.body.id,
                songname: req.body.songname,
                author: req.body.author,
                genre: req.body.genre,
                quantity: req.body.quantity,
                price: req.body.price,
                date: req.body.date
            }, function (err, songCreated) {
                if (!err){
                    res.send({
                        result: 'song added to db.'
                    });
                }                 
            });            
        }
    });

    // //Se actualiza el registro mediante el id del json
    app.put('/api/songs/:id', function (req, res) {
        const songId = req.params.id;
        if(songId !== '')
        {
            console.log(songId);
            console.log(req.body);
            Song.updateOne({id: songId},
                {
                    id: req.body.id,
                    songname: req.body.songname,
                    author: req.body.author,
                    genre: req.body.genre,
                    quantity: req.body.quantity,
                    price: req.body.price,
                    date: req.body.date
                }, 
                function(err){
                    if(!err){
                        res.send({
                            result: 'song updated.'
                        });
                    }
            });
        }        
        
    }); 

    // //Se borra el registro mediante el id del json
    app.delete('/api/songs/:id', function (req, res) {
        const songId = req.params.id;
        if(songId !== '')
        {
            Song.deleteOne({id: songId}, function(err){
                if(!err){
                    res.send({
                        result: 'song deleted from db.'
                    });   
                }
            });
        }                  
    });    

}
