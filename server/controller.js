let database = []


module.exports = {
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["A beautiful, smart, and loving person will be coming into your life.", "A faithful friend is a strong defense.", "A lifetime of happiness lies ahead of you.", "A smooth long journey! Great expectations.", "Any day above ground is a good day."];
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },
    addGoal: (req, res) => {
            database.push(req.body)
            res.status(200).send(database)
    },
    getGoals: (req, res) => {
        res.status(200).send(database) 
    },
    updateUsersPriority: (req, res) => {
        let name = req.query.name

        let index 

        for (let i = 0; i < database.length; i++ ) {
            let currentName = database[i].name

            if (currentName === name) {
                index = i
            }
        }

        if (index === undefined) {
            res.status(400).send('goal not found')
        } else {
            database[index].priority = 1
            res.status(200).send(database)
        }
    },
    deleteGoal: (req, res) => {
        let {name} = req.params

        let index 

        for (let i = 0; i < database.length; i++ ) {
            let currentName = database[i].name

            if (currentName === name) {
                index = i
            }
        }
        
        if (index === undefined) {
            res.status(200).send(database)
        } else {
            database.splice(index, 1)
            res.status(200).send
        }
    }
}
