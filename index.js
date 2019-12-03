const express = require('express')
//const { tasks } = require('./model')
const { getAllBooks } = require('./model')
const { createBook } = require('./model')
const { updateBook } = require('./model')
const { deleteBook } = require('./model')





const app = express()

app.listen(3000, () => {
    console.log('Server is listening on port 3000. Ready to accept requests!')
})

app.get('/', (req, res) => {
    console.log(req)
    res.send('Hello World')
})

//creamos un endpoint para devolver el listado de libros
app.get('/api/books', (req, res) => {
    getAllBooks((books) => res.send(books))
})

//creamos un endpoint para crear un libro
app.post('/api/books', (req, res) => {
    app.use(express.json())
    createBook(req.body, () => res.status(201).send())
})

//creamos un endpoint para actualizar un libro
app.put('/api/books/:id', (req, res) => {
    updateBook(req.params.id, req.body, () => res.send())
})

//creamos un endpoint para borrar un libro
app.delete('/api/books/:id', (req, res) => {
    deleteBook(req.params.id, () => res.send())
})