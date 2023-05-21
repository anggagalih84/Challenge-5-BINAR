//console.log('hello world')

//const os = require('os')
//console.log('free memory: ', os.freemem());



const express = require('express')
const app = express()
const fs = require('fs')
const port = 5250

const usersRead = fs.readFileSync('./public/data/user.json');
const users = JSON.parse(usersRead);

app.use(express.json()) //
app.set('view engine', 'ejs') //memanggil ejs
app.use(express.static('public')) //memanggil folder file (public)

app.get('/', (req, res) => res.render('project')) //masuk ke halaman utama
app.get('/game', (req, res) => res.render('project-4')) // masuk ke halaman ke dua
app.get('/home', (req, res) => res.render('project')) // kembali ke halaman pertama 

app.post('/login', (req, res) => {
    //console.log(user)
    const username = req.body.username
    const pass = req.body.password

    const userGet = users.find(userGet => userGet.username === username && userGet.password === pass)
    if (userGet) {
        res.status(200).json({ message: "Login sukses" });
    } else {
        res.status(401).json({ message: "Login gagal." });

    }

})

app.listen(port, () => console.log(`example app listening at http://localhost: ${port}`))