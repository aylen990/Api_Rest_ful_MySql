import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("API get")
})

app.post('/', (req, res) => {
    res.send("API post")
})

app.put('/', (req, res) => {
    res.send("API put")
})

app.delete('/', (req, res) => {
    res.send("API delete")
})

app.use((req,res)=>{
    res.status(404).send('pagina inexistente')
})
app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`)
})