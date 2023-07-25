import { model } from 'mongoose';
import { BoardSchema } from '../schemas/index.js';

const Board = model('boards', BoardSchema);

class BoardModel {
  async find() {
    return await Board.find().lean();
  }
  async findMBTI(category) {
    return await Board.find({ category }).lean();
  }
  async create(board) {
    return (await Board.create(board)).toObject();
  }
}

export default new BoardModel();
