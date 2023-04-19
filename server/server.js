let express = require('express')
let cors = require('cors')

let app = express()

app.use(express.json())
app.use(cors())

let {
     getCompliment,
     getFortune,
     addGoal,
     getGoals, 
     updateUsersPriority, 
     deleteGoal
    } = require('./controller')

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.post('/goal', addGoal )

app.get('/goals', getGoals )

app.put('/goal', updateUsersPriority)

app.delete('/goal/:name', deleteGoal)

app.listen(5507, () => {
    console.log('App is up on 5507!')
})

