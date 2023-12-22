const express = require('express')
const db = require('./db')
//const cors = require('cors') if the server is hosting the client side we dont use cors
const path = require('path')

const app = express();

const PORT = 3000

//the middleware to parse JSON bodies
app.use(express.json());

//sets the path to the client folder
const clientPath = path.resolve(__dirname, '../client/dist')

//Create a new route that serves up the static files in your client folder
app.use(express.static(clientPath))

//app.use(cors())


app.get('/', (req, res) => {
  
    res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'))
    })

    app.get('/ReactPage', (req, res) => {
        res.sendFile(path.resolve(__dirname, './components/ReactPage.jsx'));
      });
  

 app.listen(PORT, () => {
     console.log(`Server is live on port ${PORT}`)
        })
        
//CRUD APPLICATION
app.post('/signup', db.signup);


     
        