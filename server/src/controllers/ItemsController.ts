import knex from '../database/connection';
import {Request, Response} from 'express';

class ItensController {
  async index(req: Request, res: Response){
    const items = await knex('items')
    .select('*');
    
    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://192.168.0.10:3001/uploads/${item.img}`,
      };
    });  
      return res.json(serializedItems);
  }
}

export default ItensController;

