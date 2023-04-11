let express = require('express')
let cors = require('cors')

let app = express()

app.use(express.json())
app.use(cors())

let {
     addPerson,
     getPeople, 
     updatePersonsPower, 
     deletePerson
    } = require('./controller')


app.post('/person', addPerson )

app.get('/people', getPeople )

app.put('/person', updatePersonsPower)

app.delete('/person/:name', deletePerson)

app.listen(5502, () => {
    console.log('App is up on 5502!')
})

