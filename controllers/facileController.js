const db = require("../models")
const jwt = require("jsonwebtoken")
require('dotenv').config();

class Facile {
    static async faciles(req, res){
        try {

            const todosDados = await db.facile.findAll()
            todosDados.forEach(facile => {
                facile.encripted_name = jwt.verify(facile.encripted_name, process.env.CHAVE_JWT)
            })

            return res.status(200).json(todosDados)
            
        } catch (error) {
            console.log(error)
            return res.status(400).json({
                code: 400,
                message: error.message
            })
        }
    }

    static async facile(req, res){
        try {

            const facile = await db.facile.findByPk(req.params.id)
            if (facile) {
                facile.encripted_name = jwt.verify(facile.encripted_name, process.env.CHAVE_JWT)
            }

            return res.status(200).json(facile)
            
        } catch (error) {
            console.log(error)
            return res.status(400).json({
                code: 400,
                message: error.message
            })
        }
    }

    static async criaFacile(req, res){
        try {

            if (!req.body.name) {
                throw new Error('O campo "name" é obrigatório')
            }

            var name = jwt.sign(req.body.name, process.env.CHAVE_JWT)

            const resultadoCreate = await db.facile.create({
                encripted_name: name
            })
            resultadoCreate.encripted_name = jwt.verify(resultadoCreate.encripted_name, process.env.CHAVE_JWT)

            return res.status(201).json(resultadoCreate)
            
        } catch (error) {
            console.log(error)
            return res.status(400).json({
                code: 400,
                message: error.message
            })
        }
    }

    static async atualizaFacile(req, res){
        try {
            if (!req.body.name) {
                throw new Error('O campo "name" é obrigatório')
            }

            if (!req.body.id) {
                throw new Error('O campo "id" é obrigatório')
            }

            const facile = await db.facile.findByPk(req.body.id);
            var name = jwt.sign(req.body.name, process.env.CHAVE_JWT)
            facile.encripted_name = name;

            const resultadoSave = await facile.save();
            resultadoSave.encripted_name = jwt.verify(resultadoSave.encripted_name, process.env.CHAVE_JWT)

            return res.status(201).json(resultadoSave)
            
        } catch (error) {
            console.log(error)
            return res.status(400).json({
                code: 400,
                message: error.message
            })
        }
    }

    static async deletaFacile(req, res){
        try {

            db.facile.destroy({ where: { id: req.params.id }});

            return res.status(200).json({
                code: 200,
                message: "Excluido com sucesso"
            })
            
        } catch (error) {
            console.log(error)
            return res.status(400).json({
                code: 400,
                message: error.message
            })
        }
    }

}
module.exports = Facile