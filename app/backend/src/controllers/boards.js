const { response, request } = require('express');
const Board = require('../models/Board');

const getBoards = async(req, res = response) => {
    try {
        const boards = await Board.find();
        const boardsData = boards.map(board => ({
            _id: board._id,
            title: board.title,
            favorite: board.favorite,
            updatedAt: board.updatedAt
        }));
        res.json(boardsData);
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Talk to administrador'
        });
    } 
}

const getBoardsList = async(req, res) => {
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
            list: board.list
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
        throw new error("Cant create board");
    }
}

const updateBoard = async(req, res) => {

}

const deleteBoard = async(req, res) => {

}

const getListsFromBoardId = async(req,res) => {
}



module.exports = {
    getBoards,
    getBoardsList,
    createBoard,
    updateBoard,
    deleteBoard,
}