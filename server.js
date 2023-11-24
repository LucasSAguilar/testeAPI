import express from 'express'
import cors from 'cors'
import coletarDados from './database.js'
const app = express()
const PORT = 3333

app.use(express.json())
app.use(cors())


const options = {
    host: '15.229.119.137',
    user: 'root',
    database: 'teste',
    password: '1234'
};


app.get('/', (req, res) => {
    res.status(200).json({ mensagem: 'Página home' })
})

app.get('/dados', async (req, res) => {

    try {
        const resultado = await coletarDados(options)
        res.status(200).json(resultado);
    } catch {
        res.status(500).json({ erro: err })
    }

})


app.listen(PORT, () => {
    console.log(`Servidor escutando no link: http://localhost:${3000}`);
    console.log(`Dados no link: http://localhost:${3000}/dados`);
})