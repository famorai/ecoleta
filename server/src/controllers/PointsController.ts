import {Request, Response} from 'express';
import knex from '../database/connection';

class PointsController {
  async index(req: Request, res: Response){
    const {city, uf, items } = req.query;
    
    const parsedItems = String(items)
    .split(',')
    .map(item => Number(item.trim()));

    const points = await knex('points')
    .join('point_items', 'points.id', '=', 'point_items.item_id')
    .whereIn('point_items.item_id', parsedItems)
    .where('city', String(city))
    .where('uf', String(uf))
    .distinct()
    .select('points.*') 

    const serializedPoints = points.map(point => {
      return {
        ...point, 
        image_url: `http://192.168.0.10:3001/uploads/${point.img}`,
      };
    });  
  
    return res.json(serializedPoints);
  }

  async show(req: Request, res: Response){
    const {id} = req.params;

    const point = await knex('points').where('id', id).first();

    if (!point) {
      return res.status(400).json({ message: 'Point not found' });
    }

    const serializedPoint =  {
        ...point, 
        image_url: `http://192.168.0.10:3001/uploads/${point.img}`,
      };
         
    const items = await knex('items')
    .join('point_items', 'item_id', '=', 'point_items.item_id')
    .where('point_items.point_id',id)
    .distinct()
    .select('items.title');
     
      return res.json({ point: serializedPoint, items });
  }

  async create(req: Request, res: Response) {
  
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items
    } = req.body;
  
    const trx = await knex.transaction();

    const point = {
      img: req.file.filename,
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf
      }
  
     const insertedIds = await trx('points').insert(point);
  
    const point_id = insertedIds[0];
  
  
    const pointItems = items
       .split(',')
       .map((item: string ) => Number(item.trim())) 
       .map((item_id: Number ) => {
       return {
        item_id,
         point_id,
       };
    })
  
    await trx('point_items').insert(pointItems);
    
    await trx.commit();
    
    return res.json({
      id: point_id,
      ...point,
    });
  }
}

export default PointsController;