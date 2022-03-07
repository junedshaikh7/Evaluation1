let express = require('express');

let app = express();

app.get('/books', function(req,res){
    res.send({ route: "/books"}

    )
})

app.get('/libraries' ,function(req,res){
    res.send({ route: "/libraries", permission: true}

    );
})
app.get('/authors', function(req,res){
    res.send({ route: "/authors", permission: true});
})

app.listen(5000, ()=>{
    console.log('Listening on port 5000')
})