import express from 'express'
import cors from 'cors'

// Express App Initialization
const app = express()

app.use(cors())
app.use(express.json())

// Epic Farm Time
import Chance from 'chance'
const chance = new Chance();

const animals = [...Array(250).keys()].map(id => {
    return {
        id,
        type: chance.animal(),
        age: chance.age(),
        name: chance.name(),
    }
})

// Search Endpoint
app.get('',(req,res) => {
    // Query Filters
    const q = req.query.q?.toLowerCase()
    const results = animals.filter(animal => animal.type.toLowerCase().includes(q))

    res.send(results)

})

app.listen(8080, () => console.log('Listening on port http://localhost:8080'))




