const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3131

app.use(cors())

app.get('/api', (req, res) => {
  res.status(200).json({api: 'version 1'})
})

app.get("/register", function(req,res){
   res.sendFile('register.html', {root: __dirname });
//   res.render("register");
});


app.post("/register", function(req,res){
//   res.redirect("/secrets");
   res.sendFile('secrets.html', {root: __dirname });
});

app.use((req, res) => res.status(404).send({code: '404', message: 'no found'}))

app.listen(port, () => console.log('server started on port', port))
