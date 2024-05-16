const { response, request } = require('express');
const Board = require('../models/Board');

const getBoards = async(req, res = response) => {
    const boards = await Board.find();
    res.json({
        ok: true,
        boards
    });
}

const getBoard = async(req, res) => {
    const boardId = req.params.id;
    try {
        const board = await Board.findById(boardId);
        if(!board){
            return res.status(404).json({
                ok: false,
                msg: 'There is not board with this id'
            });
        }
        res.json({
            ok: true,
            board
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Talk to administrador'
        });
    }
}

const createBoard = async(req, res) => {
    const board = new Board( req.body );
    try {
        const savedBoard = await board.save();
        res.json({
            ok: true,
            board: savedBoard
        });
    } catch (error) {
        
    }
}

const updateBoard = async(req, res) => {

}

const deleteBoard = async(req, res) => {

}



module.exports = {
    getBoards,
    getBoard,
    createBoard,
    updateBoard,
    deleteBoard
}