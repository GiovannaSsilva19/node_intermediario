import express from 'express';
import cors from 'cors';

const server = express();

server.use(express.json());
server.use(cors());

const usuarios = ["Guilherme", "Jose", "Anna", "Barbara"];

//SELECT * FROM usuarios
//http://localhost:3333/usuarios
server.get("/usuarios", (req,res) => {
    res.json(usuarios)
})
    
    
// SELECT * FROM usuarios WHERE id = :index
server.get("/usuarios/:index", (req, res) => {  
    const { index } = req.params //recupera o valor da url
    res.json(usuarios[index])
})

// INSERT INTO usuarios (name) values (':name')
server.post("/usuarios", (req, res) => {
    const { name } = req.body

    usuarios.push(name)
    res.json("Usuário cadastrado")
})

// UPDATE usuarios SET name = "Gui" WHERE id = 3
server.put("/usuarios/:index", (req, res) => {
    const { index } = req.params // Recupenado parâmetro da URL
    const { name } = req.body // Recuperando valor enviado no Body

    usuarios[index] = name
    res.json(usuarios)
})

// DELETE FROM usuarios WHERE id = :id
server.delete("/usuarios/:index", (req, res) => {
    const { index } = req.params;

    usuarios.splice(index, 1)
    res.json(usuarios)
})

server.listen(3334)

