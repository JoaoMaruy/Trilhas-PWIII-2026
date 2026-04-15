const User = require("../models/UserModel")

exports.register = (req, res) => {

   const { name, email, password } = req.body

   const newUser = {
       name,
       email,
       password,
       role: "cliente"
   }

   User.create(newUser, (err, result) => {

       if(err){
           return res.status(400).json({message:"Erro ao cadastrar"})
       }

       res.json({message:"Usuário cadastrado com sucesso"})
   })
}

exports.getProfile = (req, res) => {

   const userId = req.user.id

   User.getById(userId, (err, result) => {

       res.json(result[0])
   })
}

exports.update = (req, res) => {

   const userId = req.user.id

   User.update(userId, req.body, (err) => {

       if(err){
           return res.status(400).json({message:"Erro ao atualizar"})
       }

       res.json({message:"Atualizado com sucesso"})
   })
}

exports.delete = (req, res) => {

   const userId = req.user.id

   User.delete(userId, (err) => {

       if(err){
           return res.status(400).json({message:"Erro ao excluir"})
       }

       res.json({message:"Conta excluída"})
   })
}
